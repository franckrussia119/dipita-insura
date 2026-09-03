"use client";

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ServiceCard } from '@/components/service-card';
import { SectionReveal } from '@/components/section-reveal';
import { SectionDivider } from '@/components/section-divider';
import { useAccent } from '@/components/accent-provider';
import { SERVICES } from '@/lib/data';
import Link from 'next/link';
import { Shield } from 'lucide-react';

export function ServicesContent() {
  const accent = useAccent();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <SectionReveal>
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>Our Services</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-3 mb-6">
              Comprehensive <span className="text-gold-gradient">Coverage</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From health to education, discover the insurance solutions designed to protect every aspect of your life across Africa and beyond.
            </p>
          </SectionReveal>
        </div>
      </section>

      <SectionDivider from="#0A1628" to="#F4F7FB" accent={accent} />

      {/* Services Grid */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(SERVICES ?? []).map((service: any, i: number) => (
              <ServiceCard key={service?.slug ?? i} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="#F4F7FB" to="#0A1628" accent={accent} />

      {/* CTA */}
      <section className="py-20 bg-[#0F2040]/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <SectionReveal>
            <Shield className="w-12 h-12 mx-auto mb-6" style={{ color: accent }} />
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight mb-4">
              Not Sure Which Plan <span className="text-gold-gradient">Is Right?</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Our insurance advisors are here to help you find the perfect coverage for your needs and budget.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center px-8 py-3.5 text-sm font-semibold rounded-full btn-gold-shimmer text-[#0A1628] transition-transform hover:scale-105"
            >
              Get a Personalized Quote
            </Link>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
