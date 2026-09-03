# ---- Dependencies ----
FROM node:20-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat openssl
# Set directly via env var instead of relying on a committed .npmrc file,
# since dotfiles are easy to accidentally omit when uploading manually.
ENV npm_config_legacy_peer_deps=true
ENV npm_config_audit=false
ENV npm_config_fund=false
COPY package.json package-lock.json ./
RUN npm ci

# ---- Build ----
FROM node:20-alpine AS builder
WORKDIR /app
RUN apk add --no-cache openssl
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# DATABASE_URL is required at build time only for `prisma generate`,
# not for an actual DB connection.
ARG DATABASE_URL="postgresql://user:password@localhost:5432/dipita_insura"
ENV DATABASE_URL=${DATABASE_URL}
RUN npx prisma generate
RUN npm run build

# ---- Runtime ----
FROM node:20-alpine AS runner
WORKDIR /app
RUN apk add --no-cache openssl
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
