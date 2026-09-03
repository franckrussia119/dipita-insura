"use client";

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SectionReveal } from '@/components/section-reveal';
import { SectionDivider } from '@/components/section-divider';
import { useAccent } from '@/components/accent-provider';
import { SERVICES } from '@/lib/data';
import { Shield, Send, CheckCircle, Loader2, User, Mail, Phone, FileText, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function QuoteContent() {
  const accent = useAccent();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    coverageNeed: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', serviceType: '', coverageNeed: '', message: '' });
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
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <SectionReveal className="text-center">
            <span className="text-sm font-medium tracking-wider uppercase" style={{ color: accent }}>Get a Quote</span>
            <h1 className="font-display text-4xl sm:text-5xl tracking-tight mt-3 mb-4">
              Request Your <span className="text-gold-gradient">Free Quote</span>
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Fill in the form below and our team will get back to you within 24 hours with a personalized insurance quote.
            </p>
          </SectionReveal>
        </div>
      </section>

      <SectionDivider from="#0A1628" to="#F4F7FB" accent={accent} />

      <section className="section-light py-16 sm:py-20">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <SectionReveal>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card rounded-2xl p-12 text-center"
                >
                  <CheckCircle className="w-16 h-16 mx-auto mb-6" style={{ color: accent }} />
                  <h2 className="font-display text-2xl font-semibold mb-3">Quote Request Received!</h2>
                  <p className="text-muted-foreground mb-6">
                    Thank you for your interest. Our team will review your request and send you a personalized quote within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-full btn-outline text-sm font-medium"
                  >
                    Submit Another Request
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                    <div className="relative">
                      <Shield className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <select
                        required
                        value={form.serviceType}
                        onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-foreground focus:outline-none focus:border-white/30 transition-colors appearance-none"
                      >
                        <option value="" className="bg-white text-[#0A1628]">Select Insurance Type</option>
                        {(SERVICES ?? []).map((s: any) => (
                          <option key={s?.slug} value={s?.title ?? ''} className="bg-white text-[#0A1628]">
                            {s?.title ?? ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Coverage Need (e.g., Family health, Business property)"
                      required
                      value={form.coverageNeed}
                      onChange={(e) => setForm({ ...form, coverageNeed: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
                    <textarea
                      placeholder="Additional details or questions (optional)"
                      rows={4}
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
                      <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
                    ) : (
                      <><Send className="w-4 h-4" /> Request Quote</>
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
      </section>

      <SectionDivider from="#F4F7FB" to="#0A1628" accent={accent} />

      <Footer />
    </main>
  );
}
