"use client";

import { motion } from 'framer-motion';

/**
 * A smooth wave divider that blends one section color into the next.
 * `from` = color of the section ABOVE the divider (fills the box behind the wave)
 * `to`   = color of the section BELOW the divider (fills the wave shape)
 */
export function SectionDivider({
  from,
  to,
  height = 90,
  accent,
}: {
  from: string;
  to: string;
  height?: number;
  accent?: string;
}) {
  return (
    <div style={{ background: from, lineHeight: 0 }} aria-hidden="true" className="relative overflow-hidden">
      {accent && (
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${accent}55, transparent)` }}
        />
      )}
      <motion.svg
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{ display: 'block', width: '100%', height }}
      >
        <path
          d="M0,64 C240,118 480,18 720,46 C960,74 1200,120 1440,70 L1440,120 L0,120 Z"
          fill={to}
        />
      </motion.svg>
    </div>
  );
}
