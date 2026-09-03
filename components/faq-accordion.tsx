"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function FAQAccordion({
  faqs,
  accent,
}: {
  faqs: { q: string; a: string }[];
  accent: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {(faqs ?? []).map((faq: any, i: number) => (
        <div
          key={i}
          className="glass-card rounded-xl overflow-hidden transition-all"
          style={openIndex === i ? { borderColor: accent + '40' } : undefined}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 flex-shrink-0" style={{ color: accent }} />
              <span className="font-medium text-foreground text-sm sm:text-base">
                {faq?.q ?? ''}
              </span>
            </div>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                openIndex === i ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-5 pb-5 pl-13 text-sm text-muted-foreground leading-relaxed">
                  {faq?.a ?? ''}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
