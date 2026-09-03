"use client";

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { HeroSlider } from '@/components/hero-slider';
import { StatsCounter } from '@/components/stats-counter';
import { ServiceCard } from '@/components/service-card';
import { TestimonialCarousel } from '@/components/testimonial-carousel';
import { BlogCard } from '@/components/blog-card';
import { SectionReveal } from '@/components/section-reveal';
import { SectionDivider } from '@/components/section-divider';
import { SERVICES, BLOG_POSTS, PARTNERS } from '@/lib/data';
import { useAccent } from '@/components/accent-provider';
import Link from 'next/link';
import { ArrowRight, Shield, Sparkles, Award, Globe, Users, CheckCircle } from 'lucide-react';

const FEATURES = [
  { icon: Shield, title: 'Comprehensive Coverage', desc: 'From health to education, every aspect of life protected under one roof.' },
  { icon: Globe, title: 'Pan-African Network', desc: 'Coverage across 15+ countries with a growing partner hospital and service network.' },
  { icon: Award, title: 'Award-Winning Service', desc: 'Recognized for excellence in customer experience and claims processing.' },
  { icon: Users, title: 'Diaspora Friendly', desc: 'Tailored plans for Africans abroad who want to protect loved ones back home.' },
  { icon: Sparkles, title: 'Digital-First Approach', desc: 'Manage policies, file claims, and get support — all from your phone or laptop.' },
  { icon: CheckCircle, title: 'Transparent Pricing', desc: 'No hidden fees. Clear, honest pricing so you always know what you pay for.' },
];

export function HomeContent() {
  const accent = useAccent();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <HeroSlider />

      {/* Stats */}
      <StatsCounter />

      <SectionDivider from="#0A1628" to="#F4F7FB" accent={accent} />

      {/* Services Section */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionReveal className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>What We Offer</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight mt-3 mb-4">
              Insurance Solutions <span className="text-gold-gradient">Tailored for Africa</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of insurance products designed to protect what matters most to you and your family.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(SERVICES ?? []).map((service: any, i: number) => (
              <ServiceCard key={service?.slug ?? i} service={service} index={i} />
            ))}
          </div>

          <SectionReveal className="text-center mt-12">
            <Link
              href="/services"
              className="btn-outline inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <SectionDivider from="#F4F7FB" to="#0A1628" accent={accent} />

      {/* Why Choose Us */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionReveal className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>Why Dipita-Insura</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight mt-3 mb-4">
              Built for <span className="text-gold-gradient">Africa&apos;s Future</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We understand the unique challenges facing African families and businesses. Our solutions are designed from the ground up for your reality.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((feat, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:translate-y-[-4px]">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: accent + '15' }}
                  >
                    <feat.icon className="w-6 h-6" style={{ color: accent }} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feat.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="#0A1628" to="#F4F7FB" accent={accent} />

      {/* Testimonials */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionReveal className="text-center mb-12">
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>Testimonials</span>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight mt-3">
              What Our <span className="text-gold-gradient">Clients Say</span>
            </h2>
          </SectionReveal>
          <TestimonialCarousel />
        </div>
      </section>

      <SectionDivider from="#F4F7FB" to="#0A1628" accent={accent} />

      {/* Blog Preview */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionReveal className="text-center mb-16">
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>Latest Insights</span>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight mt-3 mb-4">
              From Our <span className="text-gold-gradient">Blog</span>
            </h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(BLOG_POSTS ?? []).slice(0, 3).map((post: any, i: number) => (
              <BlogCard key={post?.slug ?? i} post={post} index={i} />
            ))}
          </div>
          <SectionReveal className="text-center mt-12">
            <Link
              href="/blog"
              className="btn-outline inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-medium"
            >
              View All Posts <ArrowRight className="w-4 h-4" />
            </Link>
          </SectionReveal>
        </div>
      </section>

      <SectionDivider from="#0A1628" to="#F4F7FB" accent={accent} />

      {/* Partners */}
      <section className="section-light py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionReveal className="text-center mb-10">
            <span className="text-sm font-medium text-muted-foreground tracking-wider uppercase">Trusted Partners</span>
          </SectionReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {(PARTNERS ?? []).map((p: string, i: number) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="chip-adaptive px-6 py-3 rounded-xl text-sm font-medium">
                  {p}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="#F4F7FB" to="#0A1628" accent={accent} />

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <SectionReveal>
            <div className="relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A84C]/20 via-[#0F2040] to-[#C9A84C]/20" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl" />
              <div className="relative px-8 sm:px-16 py-16 sm:py-20 text-center">
                <Shield className="w-12 h-12 mx-auto mb-6" style={{ color: accent }} />
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
                  Ready to Get <span className="text-gold-gradient">Protected?</span>
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                  Join thousands of families and businesses across Africa who trust Dipita-Insura to safeguard their future.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/quote"
                    className="inline-flex items-center px-8 py-3.5 text-sm font-semibold rounded-full btn-gold-shimmer text-[#0A1628] transition-transform hover:scale-105"
                  >
                    Get Your Free Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center px-8 py-3.5 text-sm font-semibold rounded-full border border-white/20 text-foreground hover:bg-white/10 transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
