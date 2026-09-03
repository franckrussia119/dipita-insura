"use client";

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SectionReveal } from '@/components/section-reveal';
import { SectionDivider } from '@/components/section-divider';
import { useAccent } from '@/components/accent-provider';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2, User, MessageSquare, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CONTACT_INFO = [
  { icon: MapPin, label: 'Address', value: 'Douala, Cameroon' },
  { icon: Phone, label: 'Phone', value: '+237 650 123 456' },
  { icon: Mail, label: 'Email', value: 'info@dipita-insura.com' },
  { icon: Clock, label: 'Hours', value: 'Mon - Fri: 8AM - 6PM' },
];

export function ContactContent() {
  const accent = useAccent();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <SectionReveal>
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>Contact Us</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight mt-3 mb-6">
              Get in <span className="text-gold-gradient">Touch</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have questions about our services? Our team is here to help you find the perfect coverage.
            </p>
          </SectionReveal>
        </div>
      </section>

      <SectionDivider from="#0A1628" to="#F4F7FB" accent={accent} />

      <section className="section-light py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Info Cards */}
            <div className="lg:col-span-2 space-y-4">
              {CONTACT_INFO.map((info, i) => (
                <SectionReveal key={i} delay={i * 0.1}>
                  <div className="glass-card rounded-xl p-5 flex items-start gap-4 hover:translate-y-[-2px] transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: accent + '15' }}>
                      <info.icon className="w-5 h-5" style={{ color: accent }} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-sm text-foreground font-medium" suppressHydrationWarning>{info.value}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <SectionReveal delay={0.2}>
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="glass-card rounded-2xl p-12 text-center"
                    >
                      <CheckCircle className="w-16 h-16 mx-auto mb-6" style={{ color: accent }} />
                      <h2 className="font-display text-2xl font-semibold mb-3">Message Sent!</h2>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We will get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setStatus('idle')}
                        className="px-6 py-2.5 rounded-full btn-outline text-sm font-medium"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="glass-card rounded-2xl p-6 sm:p-8 space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            type="text"
                            placeholder="Full Name"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-colors"
                          />
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <input
                            type="email"
                            placeholder="Email Address"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-colors"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          placeholder="Subject"
                          required
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-colors"
                        />
                      </div>

                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
                        <textarea
                          placeholder="Your Message"
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-colors resize-none"
                        />
                      </div>

                      {status === 'error' && (
                        <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
                      )}

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full btn-gold-shimmer text-[#0A1628] text-sm font-semibold disabled:opacity-50 transition-transform hover:scale-[1.02]"
                      >
                        {status === 'loading' ? (
                          <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
                        ) : (
                          <><Send className="w-4 h-4" /> Send Message</>
                        )}
                      </button>

                      <p className="text-xs text-muted-foreground text-center">
                        Your information is secure. We never share your data with third parties.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider from="#F4F7FB" to="#0A1628" accent={accent} />

      <Footer />
    </main>
  );
}
