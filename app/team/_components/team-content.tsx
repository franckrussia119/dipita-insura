"use client";

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SectionReveal } from '@/components/section-reveal';
import { SectionDivider } from '@/components/section-divider';
import { useAccent } from '@/components/accent-provider';
import { TEAM } from '@/lib/data';
import { motion } from 'framer-motion';
import { User, Linkedin, Twitter } from 'lucide-react';

const COLORS = ['#C9A84C', '#2D6A4F', '#1A3A5C', '#C05621', '#7B3F8C'];

export function TeamContent() {
  const accent = useAccent();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <SectionReveal>
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>Our Team</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-3 mb-6">
              Meet the <span className="text-gold-gradient">Experts</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Dedicated professionals committed to making insurance accessible and trustworthy across Africa.
            </p>
          </SectionReveal>
        </div>
      </section>

      <SectionDivider from="#0A1628" to="#F4F7FB" accent={accent} />

      {/* Team Grid */}
      <section className="section-light pt-20 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(TEAM ?? []).map((member: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-6 text-center hover:translate-y-[-4px] transition-all duration-300 h-full">
                  {/* Avatar */}
                  <div
                    className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center"
                    style={{ backgroundColor: (COLORS[i % COLORS.length] ?? '#C9A84C') + '20' }}
                  >
                    <User className="w-10 h-10" style={{ color: COLORS[i % COLORS.length] ?? '#C9A84C' }} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {member?.name ?? ''}
                  </h3>
                  <p className="text-sm font-medium mb-4" style={{ color: accent }}>
                    {member?.role ?? ''}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {member?.bio ?? ''}
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <button className="chip-adaptive p-2 rounded-lg" aria-label="LinkedIn">
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button className="chip-adaptive p-2 rounded-lg" aria-label="Twitter">
                      <Twitter className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="#F4F7FB" to="#0A1628" accent={accent} />

      <Footer />
    </main>
  );
}
