"use client";

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { StatsCounter } from '@/components/stats-counter';
import { SectionReveal } from '@/components/section-reveal';
import { SectionDivider } from '@/components/section-divider';
import { useAccent } from '@/components/accent-provider';
import Image from 'next/image';
import { Target, Eye, Gem, Heart, Globe, Shield, Award, Users } from 'lucide-react';

const VALUES = [
  { icon: Heart, title: 'Empathy', desc: 'We understand the real challenges facing African families and respond with genuine care.' },
  { icon: Globe, title: 'Accessibility', desc: 'Insurance should be available to everyone, not just the privileged few.' },
  { icon: Shield, title: 'Integrity', desc: 'We honor every commitment and process claims with speed and transparency.' },
  { icon: Award, title: 'Excellence', desc: 'We continuously improve our products and service to exceed expectations.' },
  { icon: Users, title: 'Community', desc: 'We invest in the communities we serve, building a stronger Africa together.' },
  { icon: Gem, title: 'Innovation', desc: 'We leverage technology to make insurance simpler, faster, and more personal.' },
];

export function AboutContent() {
  const accent = useAccent();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0">
          <Image src="/images/modern-house.jpg" alt="About Dipita-Insura" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/90 to-[#0A1628]" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <SectionReveal>
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>About Us</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-3 mb-6">
              Architects of <span className="text-gold-gradient">Protection</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              Founded in 2021, Dipita-Insura is dedicated to transforming the insurance landscape across Africa, making premium protection accessible to every family and business.
            </p>
          </SectionReveal>
        </div>
      </section>

      <SectionDivider from="#0A1628" to="#F4F7FB" accent={accent} />

      {/* Mission & Vision */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionReveal>
              <div className="glass-card rounded-2xl p-8 sm:p-10 h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: accent + '15' }}>
                  <Target className="w-7 h-7" style={{ color: accent }} />
                </div>
                <h2 className="font-display text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, affordable, and comprehensive insurance solutions that empower Africa&apos;s middle class and diaspora communities to protect their families, health, businesses, and futures with confidence and dignity.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="glass-card rounded-2xl p-8 sm:p-10 h-full">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: accent + '15' }}>
                  <Eye className="w-7 h-7" style={{ color: accent }} />
                </div>
                <h2 className="font-display text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become Africa&apos;s most trusted and innovative insurance partner, setting the standard for customer-centric coverage that adapts to the evolving needs of a continent on the rise.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <SectionDivider from="#F4F7FB" to="#0A1628" accent={accent} />

      <StatsCounter />

      <SectionDivider from="#0A1628" to="#F4F7FB" accent={accent} />

      {/* Values */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionReveal className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>Our Values</span>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight mt-3 mb-4">
              What We <span className="text-gold-gradient">Stand For</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 h-full hover:translate-y-[-4px] transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: accent + '15' }}>
                    <v.icon className="w-6 h-6" style={{ color: accent }} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="#F4F7FB" to="#0A1628" accent={accent} />

      {/* Story */}
      <section className="py-20 sm:py-28 bg-[#0F2040]/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image src="/images/hero-1.jpg" alt="Our Story" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628]/60 to-transparent" />
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>Our Story</span>
              <h2 className="font-display text-3xl sm:text-4xl tracking-tight mt-3 mb-6">
                Born from a <span className="text-gold-gradient">Simple Truth</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Africa&apos;s insurance penetration remains among the lowest in the world — yet the need for protection has never been greater. Dipita-Insura was founded on the belief that every African family deserves access to world-class insurance coverage.
                </p>
                <p>
                  Since 2021, we&apos;ve grown from a small team in Douala, Cameroon, to a pan-African operation serving thousands of clients across 15+ countries. Our diaspora-focused plans bridge the gap for Africans abroad who want to protect their families back home.
                </p>
                <p>
                  Every policy we write, every claim we process, and every family we protect brings us closer to our vision of an Africa where insurance is not a luxury — but a fundamental right.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
