"use client";

import Link from 'next/link';
import { Shield, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useAccent } from './accent-provider';

export function Footer() {
  const accent = useAccent();

  return (
    <footer className="bg-[#060E1A] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="w-7 h-7" style={{ color: accent }} />
              <span className="font-display text-xl tracking-tight">
                <span className="text-foreground">Dipita</span>
                <span style={{ color: accent }}>-Insura</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your shield in every season of life. Premium insurance solutions crafted for Africa&apos;s middle class and diaspora communities.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2 rounded-lg bg-white/5 text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
                  aria-label={`Social link ${i + 1}`}
                >
                  <Icon className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              {[{ href: '/', label: 'Home' }, { href: '/about', label: 'About Us' }, { href: '/services', label: 'Services' }, { href: '/contact', label: 'Contact' }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {['Health Insurance', 'Life Insurance', 'Auto Insurance', 'Business Insurance', 'Education Insurance'].map((s) => (
                <li key={s}>
                  <Link href={`/services/${s.split(' ')[0].toLowerCase()}`} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li suppressHydrationWarning>info@dipita-insura.com</li>
              <li suppressHydrationWarning>+237 650 123 456</li>
              <li>Douala, Cameroon</li>
              <li>Mon - Fri: 8AM - 6PM</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © 2026 Dipita-Insura. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Protecting Africa&apos;s future, one policy at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
