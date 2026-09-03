"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Shield, Car, Building2, GraduationCap } from 'lucide-react';
import { useAccent } from './accent-provider';

const ICON_MAP: Record<string, any> = {
  Heart, Shield, Car, Building2, GraduationCap,
};

export function ServiceCard({
  service,
  index = 0,
}: {
  service: { slug: string; title: string; shortDesc: string; icon: string; image: string };
  index?: number;
}) {
  const accent = useAccent();
  const IconComponent = ICON_MAP[service?.icon ?? ''] ?? Shield;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={`/services/${service?.slug ?? ''}`} className="group block">
        <div className="glass-card rounded-2xl overflow-hidden transition-all duration-300 hover:translate-y-[-4px]">
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src={service?.image ?? ''}
              alt={service?.title ?? 'Service'}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
            <div
              className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/10 backdrop-blur-sm"
              style={{ borderColor: accent + '40', borderWidth: 1 }}
            >
              <IconComponent className="w-5 h-5" style={{ color: accent }} />
            </div>
          </div>
          <div className="p-5 space-y-3">
            <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold-gradient transition-all">
              {service?.title ?? ''}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {service?.shortDesc ?? ''}
            </p>
            <div className="flex items-center gap-2 text-sm font-medium pt-1" style={{ color: accent }}>
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
