"use client";

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';

export function PricingCard({
  plan,
  index = 0,
  accent,
}: {
  plan: { name: string; features: string[]; highlighted: boolean };
  index?: number;
  accent: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] ${
        plan?.highlighted
          ? 'border-2 shadow-lg'
          : 'glass-card'
      }`}
      style={plan?.highlighted ? { borderColor: accent, boxShadow: `0 0 30px ${accent}20` } : undefined}
    >
      {plan?.highlighted && (
        <div
          className="absolute top-0 left-0 right-0 py-1.5 text-center text-xs font-semibold text-[#0A1628]"
          style={{ backgroundColor: accent }}
        >
          <Star className="w-3 h-3 inline mr-1" /> Most Popular
        </div>
      )}
      <div className={`p-6 sm:p-8 ${plan?.highlighted ? 'pt-10' : ''}`}>
        <h3 className="font-display text-xl font-semibold text-foreground mb-2">
          {plan?.name ?? ''}
        </h3>
        <div className="mb-6">
          <span className="text-2xl font-display font-bold text-gold-gradient">
            Custom Quote
          </span>
          <p className="text-muted-foreground text-sm mt-1">Tailored to your needs</p>
        </div>
        <ul className="space-y-3 mb-8">
          {(plan?.features ?? []).map((f: string, i: number) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: accent }} />
              <span className="text-muted-foreground">{f}</span>
            </li>
          ))}
        </ul>
        <Link
          href="/quote"
          className={`block w-full text-center py-3 rounded-full text-sm font-semibold transition-all ${
            plan?.highlighted
              ? 'btn-gold-shimmer text-[#0A1628]'
              : 'border border-white/20 text-foreground hover:bg-white/10'
          }`}
        >
          Get Custom Quote
        </Link>
      </div>
    </motion.div>
  );
}
