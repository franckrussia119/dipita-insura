"use client";

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';
import { useAccent } from './accent-provider';

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const accent = useAccent();
  const items = TESTIMONIALS ?? [];

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = items[current];

  return (
    <div className="relative max-w-3xl mx-auto text-center">
      <Quote className="w-12 h-12 mx-auto mb-6 opacity-20" style={{ color: accent }} />
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-lg sm:text-xl text-foreground leading-relaxed italic">
            &ldquo;{t?.quote ?? ''}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-1 mb-2">
            {Array.from({ length: t?.rating ?? 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" style={{ color: accent }} />
            ))}
          </div>
          <div>
            <p className="font-semibold text-foreground">{t?.name ?? ''}</p>
            <p className="text-sm text-muted-foreground">{t?.role ?? ''}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="chip-adaptive p-2 rounded-full"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {items.map((_: any, i: number) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? 'w-6' : 'dot-adaptive'
              }`}
              style={i === current ? { backgroundColor: accent } : undefined}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="chip-adaptive p-2 rounded-full"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
