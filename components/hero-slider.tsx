"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Shield } from 'lucide-react';
import { useAccent } from './accent-provider';

const SLIDES = [
  {
    image: '/images/hero-1.jpg',
    title: 'Your Shield in Every',
    highlight: 'Season of Life',
    subtitle: 'Premium insurance solutions crafted for Africa\'s middle class and diaspora communities worldwide.',
  },
  {
    image: '/images/hero-2.jpg',
    title: 'Health Coverage That',
    highlight: 'Cares for You',
    subtitle: 'Comprehensive health plans with access to 500+ hospitals across 15 African countries.',
  },
  {
    image: '/images/hero-3.jpg',
    title: 'Drive with Complete',
    highlight: 'Confidence',
    subtitle: 'Auto insurance that protects you on every road — from basic liability to full comprehensive coverage.',
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const accent = useAccent();

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={SLIDES[current]?.image ?? ''}
            alt={SLIDES[current]?.title ?? 'Hero slide'}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-6"
            >
              <Shield className="w-5 h-5" style={{ color: accent }} />
              <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>
                Trusted Insurance Partner
              </span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] mb-6">
              <span className="text-foreground">{SLIDES[current]?.title ?? ''} </span>
              <span className="text-gold-gradient">{SLIDES[current]?.highlight ?? ''}</span>
            </h1>

            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              {SLIDES[current]?.subtitle ?? ''}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center px-8 py-3.5 text-sm font-semibold rounded-full text-white transition-transform hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #C9A84C, #B8942F)' }}
              >
                Get a Free Quote
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3.5 text-sm font-semibold rounded-full border border-white/20 text-foreground hover:bg-white/10 transition-all"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-1/2 translate-y-1/2 left-4 z-20">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute bottom-1/2 translate-y-1/2 right-4 z-20">
        <button
          onClick={next}
          className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-8 h-2' : 'w-2 h-2 bg-white/30 hover:bg-white/50'
            }`}
            style={i === current ? { backgroundColor: accent } : undefined}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
