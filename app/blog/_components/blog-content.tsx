"use client";

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BlogCard } from '@/components/blog-card';
import { SectionReveal } from '@/components/section-reveal';
import { SectionDivider } from '@/components/section-divider';
import { useAccent } from '@/components/accent-provider';
import { BLOG_POSTS } from '@/lib/data';

export function BlogContent() {
  const accent = useAccent();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <SectionReveal>
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>Our Blog</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-3 mb-6">
              Insights & <span className="text-gold-gradient">Resources</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Expert advice, industry insights, and practical tips to help you make informed decisions about your insurance coverage.
            </p>
          </SectionReveal>
        </div>
      </section>

      <SectionDivider from="#0A1628" to="#F4F7FB" accent={accent} />

      {/* Blog Grid */}
      <section className="section-light pt-20 pb-20 sm:pt-24 sm:pb-28">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(BLOG_POSTS ?? []).map((post: any, i: number) => (
              <BlogCard key={post?.slug ?? i} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider from="#F4F7FB" to="#0A1628" accent={accent} />

      <Footer />
    </main>
  );
}
