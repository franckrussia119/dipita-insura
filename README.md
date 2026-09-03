# Dipita-Insura

Next.js 16 marketing site for Dipita-Insura, an insurance company serving Africa's
middle class and diaspora communities.

## Local development

```bash
npm ci   # uses the committed package-lock.json for a fast, deterministic install
cp .env.example .env   # then fill in DATABASE_URL
npx prisma generate
npx prisma db push     # creates the ContactSubmission / QuoteRequest tables
npm run dev
```

`.npmrc` in this repo sets `legacy-peer-deps=true`, so you don't need to pass
that flag manually — it applies automatically to `npm ci` / `npm install`.
The peer conflict itself is minor (one or two packages haven't published
fully-aligned React 19 peer ranges yet) and is safe to ignore.

**Important:** `package-lock.json` is committed on purpose — do not delete or
`.gitignore` it. The Dockerfile uses `npm ci`, which requires the lockfile to
be present and in sync with `package.json`; without it, npm falls back to a
full, unbounded dependency resolution that is far slower and can silently
fail (e.g. get killed) inside a resource-constrained Docker build step. If
you ever change dependencies, run `npm install` locally to regenerate the
lockfile, then commit the updated `package-lock.json` alongside your
`package.json` change.

## Deploying on Coolify

1. Push this repo to GitHub.
2. In Coolify, create a new **Application** → source it from this GitHub repo.
3. Coolify will detect the `Dockerfile` at the project root and build with it
   automatically (build pack: **Dockerfile**).
4. Set the following environment variable in Coolify's app settings:
   - `DATABASE_URL` — your Postgres connection string (Coolify can also
     provision a managed Postgres instance for you and inject this).
5. After the first deploy, run the Prisma migration against the database once
   (from Coolify's terminal for the app, or locally with the same
   `DATABASE_URL`):
   ```bash
   npx prisma db push
   ```
6. Set the app's exposed port to `3000` (already set via `EXPOSE 3000` in the
   Dockerfile) and attach your domain.

The Dockerfile builds a `next build` **standalone** output, so the final
runtime image only contains what's needed to run `node server.js` — no
dev dependencies or source maps ship to production.

## Notes

- Contact form submissions (`/api/contact`) and quote requests (`/api/quote`)
  are written to Postgres via Prisma — both need `DATABASE_URL` set to a real,
  reachable database at build time (for `prisma generate`) and at runtime.
- Google Fonts (DM Sans, Playfair Display, JetBrains Mono) are fetched at
  build time via `next/font/google`, so the build environment needs normal
  outbound internet access to `fonts.googleapis.com`.
