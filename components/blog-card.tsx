"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { useAccent } from './accent-provider';

export function BlogCard({
  post,
  index = 0,
}: {
  post: { slug: string; title: string; excerpt: string; category: string; date: string; image: string };
  index?: number;
}) {
  const accent = useAccent();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group"
    >
      <Link
        href={`/blog/${post?.slug ?? ''}`}
        className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px] h-full flex flex-col">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post?.image ?? ''}
            alt={post?.title ?? 'Blog post'}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
          <span
            className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(10,22,40,0.75)', color: '#F0F4F8' }}
          >
            {post?.category ?? ''}
          </span>
        </div>
        <div className="p-5 flex-1 flex flex-col space-y-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post?.date ?? ''}</span>
          </div>
          <h3 className="font-display text-lg font-semibold text-foreground leading-snug">
            {post?.title ?? ''}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed flex-1 line-clamp-3">
            {post?.excerpt ?? ''}
          </p>
          <div className="flex items-center gap-2 text-sm font-medium pt-1" style={{ color: accent }}>
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
