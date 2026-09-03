"use client";

import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { BlogCard } from '@/components/blog-card';
import { SectionReveal } from '@/components/section-reveal';
import { SectionDivider } from '@/components/section-divider';
import { useAccent } from '@/components/accent-provider';
import { BLOG_POSTS } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  content?: string[];
}

export function BlogDetailContent({ post }: { post: BlogPost }) {
  const accent = useAccent();
  const related = (BLOG_POSTS ?? [])
    .filter((p: any) => p?.slug !== post?.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0">
          <Image src={post?.image ?? ''} alt={post?.title ?? ''} fill className="object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/70 via-[#0A1628]/90 to-[#0A1628]" />
        </div>
        <div className="relative max-w-[900px] mx-auto px-4 sm:px-6">
          <SectionReveal>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>
              {post?.category ?? ''}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-3 mb-6">
              {post?.title ?? ''}
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{post?.date ?? ''}</span>
            </div>
          </SectionReveal>
        </div>
      </section>

      <SectionDivider from="#0A1628" to="#F4F7FB" accent={accent} />

      {/* Article Body */}
      <section className="section-light py-20 sm:py-28">
        <div className="max-w-[760px] mx-auto px-4 sm:px-6">
          <SectionReveal>
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10">
              <Image src={post?.image ?? ''} alt={post?.title ?? ''} fill className="object-cover" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {post?.excerpt ?? ''}
            </p>
            <div className="space-y-6">
              {(post?.content ?? []).map((paragraph: string, i: number) => (
                <p key={i} className="text-base text-foreground/90 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <SectionDivider from="#F4F7FB" to="#0A1628" accent={accent} />

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-20 sm:py-28">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <SectionReveal className="text-center mb-16">
              <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>Keep Reading</span>
              <h2 className="font-display text-3xl sm:text-4xl tracking-tight mt-3">
                More From Our Blog
              </h2>
            </SectionReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p: any, i: number) => (
                <BlogCard key={p?.slug ?? i} post={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
