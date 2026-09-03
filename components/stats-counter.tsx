"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { STATS } from '@/lib/data';
import { useAccent } from './accent-provider';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl tracking-tight text-gold-gradient">
      {count}{suffix}
    </span>
  );
}

export function StatsCounter() {
  const accent = useAccent();

  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628] via-[#0F2040] to-[#0A1628]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/30 to-transparent" />
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {(STATS ?? []).map((stat: any, i: number) => (
            <motion.div
              key={stat?.label ?? i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center space-y-2"
            >
              <Counter value={stat?.value ?? 0} suffix={stat?.suffix ?? ''} />
              <p className="text-muted-foreground text-sm font-medium">{stat?.label ?? ''}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
