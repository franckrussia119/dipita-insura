"use client";

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { PricingCard } from '@/components/pricing-card';
import { FAQAccordion } from '@/components/faq-accordion';
import { SectionReveal } from '@/components/section-reveal';
import { SectionDivider } from '@/components/section-divider';
import { useAccent } from '@/components/accent-provider';
import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowLeft } from 'lucide-react';

interface ServiceData {
  slug: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  plans: { name: string; features: string[]; highlighted: boolean }[];
  faqs: { q: string; a: string }[];
}

export function ServiceDetailContent({ service }: { service: ServiceData }) {
  const accent = useAccent();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0">
          <Image src={service?.image ?? ''} alt={service?.title ?? ''} fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/70 via-[#0A1628]/90 to-[#0A1628]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionReveal>
            <Link href="/services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </Link>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight mb-6">
              {service?.title ?? ''}
            </h1>
            <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
              {service?.description ?? ''}
            </p>
          </SectionReveal>
        </div>
      </section>

      <SectionDivider from="#0A1628" to="#F4F7FB" accent={accent} />

      {/* Features */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionReveal className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>Coverage Highlights</span>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight mt-3">
              What&apos;s <span className="text-gold-gradient">Included</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {(service?.features ?? []).map((f: string, i: number) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="glass-card rounded-xl p-5 flex items-start gap-3 hover:translate-y-[-2px] transition-all duration-300">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: accent }} />
                  <span className="text-foreground text-sm font-medium">{f}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="#F4F7FB" to="#0A1628" accent={accent} />

      {/* Pricing */}
      <section className="py-20 sm:py-28 bg-[#0F2040]/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionReveal className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>Coverage Tiers</span>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight mt-3 mb-4">
              Choose Your <span className="text-gold-gradient">Plan</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Every plan is tailored to you with a personalized quote — no hidden fees, upgrade or downgrade anytime.
            </p>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(service?.plans ?? []).map((plan: any, i: number) => (
              <PricingCard key={i} plan={plan} index={i} accent={accent} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <SectionReveal className="text-center mb-12">
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>FAQ</span>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight mt-3">
              Common <span className="text-gold-gradient">Questions</span>
            </h2>
          </SectionReveal>
          <FAQAccordion faqs={service?.faqs ?? []} accent={accent} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
