import React, { useState, useEffect } from "react";
import { useRouter } from "../context/RouterContext";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Activity, 
  Shield, 
  Car, 
  Building, 
  GraduationCap, 
  Award, 
  Check, 
  Briefcase, 
  ChevronLeft, 
  ChevronRight,
  Star,
  Users,
  Smile,
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react";
import { SERVICES_DATA, TEAM_DATA, BLOG_DATA, TESTIMONIALS_DATA, PARTNER_LOGOS } from "../data";

export default function Home() {
  const { navigateTo } = useRouter();

  // Hero Slider State
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      bg: "https://dipita-insura.com/wp-content/uploads/2025/03/pexels-thirdman-5060999-scaled.jpg",
      title: <>Empower Your Future with <span className="text-gold">Dipita</span></>,
      subtitle: "Tailored Insurance Solutions specifically designed for Africa middle class and the global diaspora."
    },
    {
      bg: "https://dipita-insura.com/wp-content/uploads/2025/03/pexels-garvin-st-villier-719266-14277569-scaled.jpg",
      title: <>Flexible Insurance Plans Designed <span className="text-gold">Specifically for You</span></>,
      subtitle: "Dipita Insurance provides innovative and creative solutions corresponding to your needs."
    },
    {
      bg: "https://dipita-insura.com/wp-content/uploads/2025/03/pexels-gustavo-fring-7446985-scaled.jpg",
      title: <>Secure Your Future <span className="text-gold">Today with Pride</span></>,
      subtitle: "Affordable and transparent coverage for every stage of your life journey."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Testimonials Slider State
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Stats Counters
  const [clientsCount, setClientsCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [teamCount, setTeamCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const intervalTime = 30;
    const steps = duration / intervalTime;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setClientsCount(Math.min(500, Math.floor((500 / steps) * step)));
      setSuccessRate(Math.min(98, Math.floor((98 / steps) * step)));
      setTeamCount(Math.min(25, Math.floor((25 / steps) * step)));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  // Quick Contact Form State
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; msg?: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuickContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState)
      });

      const resData = await response.json();
      if (response.ok && resData.success) {
        setSubmitStatus({ success: true, msg: resData.message });
        setFormState({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setSubmitStatus({ success: false, msg: resData.error || "Failed to submit inquiry." });
      }
    } catch (err) {
      setSubmitStatus({ success: false, msg: "Failed to connect to backend server. Message logged to sandbox console instead." });
    } finally {
      setLoading(false);
    }
  };

  // Map service icons
  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case "health": return <Activity className="w-6 h-6 text-white" />;
      case "life": return <Shield className="w-6 h-6 text-white" />;
      case "auto": return <Car className="w-6 h-6 text-white" />;
      case "business": return <Building className="w-6 h-6 text-white" />;
      case "education": return <GraduationCap className="w-6 h-6 text-white" />;
      default: return <Award className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="w-full">
      
      {/* 1c) HERO SLIDER */}
      <section className="relative w-full h-[60vh] sm:h-[75vh] md:h-[85vh] lg:h-[90vh] overflow-hidden bg-[#1a3c6e]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-[4000ms] ease-out"
              style={{ 
                backgroundImage: `url('${slides[currentSlide].bg}')`,
              }}
            />
            <div className="absolute inset-0 bg-[#1a3c6e]/60" /> {/* Sleek Navy Overlay */}

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8 max-w-4xl mx-auto z-10">
              <span className="bg-[#e8a020] text-white text-[11px] font-bold px-3 py-1 rounded uppercase tracking-wider mb-6 inline-block select-none shadow-sm">
                Confidence in the future
              </span>
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-display font-extrabold text-white leading-[1.1] mb-6 tracking-tight"
                style={{ fontSize: "clamp(2rem, 5.5vw, 3.5rem)" }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-sans text-white/90 text-sm md:text-lg max-w-2xl mb-8 leading-relaxed"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
              >
                <button
                  onClick={() => navigateTo("/quote")}
                  className="w-full sm:w-auto bg-[#e8a020] hover:bg-white text-white hover:text-navy font-bold text-xs px-8 py-4 rounded-md transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Get a Quote Now
                </button>
                <button
                  onClick={() => navigateTo("/services")}
                  className="w-full sm:w-auto border-2 border-white hover:bg-white hover:text-[#1a3c6e] text-white font-bold text-xs px-8 py-4 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  Learn More
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-gold hover:text-navy text-white rounded-full flex items-center justify-center transition-all z-20 cursor-pointer"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-black/30 hover:bg-gold hover:text-navy text-white rounded-full flex items-center justify-center transition-all z-20 cursor-pointer"
          aria-label="Next Slide"
        >
          <ChevronRight size={20} />
        </button>

        {/* Slide Capsule Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 transition-all cursor-pointer rounded ${
                currentSlide === idx ? "w-12 bg-gold" : "w-8 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 1d) ABOUT PREVIEW SECTION */}
      <section className="py-20 md:py-28 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Description */}
          <div className="flex flex-col gap-6">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-gold">
              Welcome to Dipita Insura
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy leading-tight tracking-tight">
              Confident in What Comes Ahead for Africa Middle Class
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Dipita Insura is built on a simple vision: to bridge the critical financial security gap for Africas rapidly growing middle class and the African diaspora globally. We understand that traditional insurance has been complex, inaccessible, and expensive.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              That is why we offer innovative, flexible pay-as-you-go plans. Whether you are safeguarding your family healthcare back home, securing children academic paths, protecting a growing SME business, or getting on the road with total confidence, we provide smart coverage tailored precisely to your budget.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-light-gold text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <div>
                  <h4 className="font-display font-bold text-navy text-sm">Flexible Pay-As-You-Go</h4>
                  <p className="text-gray-500 text-xs">No rigid yearly contracts or hidden fees.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-light-gold text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
                <div>
                  <h4 className="font-display font-bold text-navy text-sm">Diaspora Global Portal</h4>
                  <p className="text-gray-500 text-xs">Manage family support plans globally.</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => navigateTo("/about")}
                className="bg-navy hover:bg-gold text-white hover:text-navy font-bold text-xs px-8 py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>Discover Our Story</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: 2x2 collage */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden shadow-md transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://dipita-insura.com/wp-content/uploads/2025/03/pexels-william-fortunato-6392875-scaled.jpg" 
                  alt="African middle class family laughing" 
                  className="w-full h-44 sm:h-56 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://dipita-insura.com/wp-content/uploads/2025/03/pexels-kampus-8441866-684x1024.jpg" 
                  alt="Corporate meeting discussions" 
                  className="w-full h-56 sm:h-72 object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 pt-8">
              <div className="rounded-2xl overflow-hidden shadow-md transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://dipita-insura.com/wp-content/uploads/2025/03/pexels-jakubzerdzicki-30349323-683x1024.jpg" 
                  alt="African small business entrepreneur" 
                  className="w-full h-56 sm:h-72 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md transform hover:scale-[1.02] transition-transform duration-300">
                <img 
                  src="https://dipita-insura.com/wp-content/uploads/2025/03/pexels-leeloothefirst-7163948-684x1024.jpg" 
                  alt="Doctor consulting family" 
                  className="w-full h-44 sm:h-56 object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 1e) STATS SECTION */}
      <section className="bg-navy text-white py-16 px-4 md:px-8 relative overflow-hidden border-t-4 border-gold">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 md:gap-4 relative z-10 w-full divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="flex flex-col items-center gap-3 w-full text-center py-4 md:py-0">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-1 text-2xl">
              <Smile className="w-6 h-6 text-gold" />
            </div>
            <span className="font-display font-bold text-4xl md:text-5xl text-gold">
              {clientsCount}+
            </span>
            <span className="font-sans font-medium text-xs uppercase tracking-widest text-white/70">
              Satisfied Clients
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 w-full text-center py-6 md:py-0">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-1 text-2xl">
              <Zap className="w-6 h-6 text-gold" />
            </div>
            <span className="font-display font-bold text-4xl md:text-5xl text-gold">
              {successRate}%
            </span>
            <span className="font-sans font-medium text-xs uppercase tracking-widest text-white/70">
              Claims Success Rate
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 w-full text-center py-4 md:py-0">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-1 text-2xl">
              <Users className="w-6 h-6 text-gold" />
            </div>
            <span className="font-display font-bold text-4xl md:text-5xl text-gold">
              {teamCount}+
            </span>
            <span className="font-sans font-medium text-xs uppercase tracking-widest text-white/70">
              Expert Team Members
            </span>
          </div>

        </div>
      </section>

      {/* 1f) SERVICES SECTION */}
      <section className="py-20 md:py-28 bg-light-gray px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          <div className="text-center max-w-2xl mb-16 flex flex-col gap-3">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-gold">
              Our Portfolios
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy">
              We offer many services to progress!
            </h2>
            <div className="w-12 h-1 bg-gold mx-auto mt-2 rounded-full" />
            <p className="text-gray-500 text-xs md:text-sm mt-3">
              Explore our innovative, tailor-made coverage portfolios built to empower Africans across the globe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-center">
            {SERVICES_DATA.map((srv) => (
              <div 
                key={srv.slug}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:border-b-gold hover:border-b-4 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                    {getServiceIcon(srv.slug)}
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                    {srv.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6">
                    {srv.shortDesc}
                  </p>
                </div>
                <button
                  onClick={() => navigateTo(`/services/${srv.slug}`)}
                  className="font-sans font-bold text-xs text-navy group-hover:text-gold flex items-center gap-1.5 cursor-pointer mt-auto self-start"
                >
                  <span>Read More</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 1g) TESTIMONIALS SECTION */}
      <section className="py-20 md:py-28 bg-white px-4 md:px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mb-16 mx-auto flex flex-col gap-3">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-gold">
              Client Feedback
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy">
              We are very glad to get client review
            </h2>
            <div className="w-12 h-1 bg-gold mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch justify-center">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div 
                key={idx}
                className="bg-light-gray border border-gray-100/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative shadow-sm"
              >
                <div className="absolute top-6 right-6 text-gold/20 font-serif text-6xl select-none leading-none">
                  “
                </div>
                <div>
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6 text-gold">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm italic leading-relaxed mb-8 relative z-10">
                    {t.quote}
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-auto">
                  <div className={`w-11 h-11 rounded-full ${t.bgClass} text-white font-bold flex items-center justify-center text-sm shadow-md`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-navy">{t.name}</h4>
                    <span className="block text-gray-500 text-[11px] font-sans font-medium">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 1h) TEAM SECTION */}
      <section className="py-20 md:py-28 bg-light-gray px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mb-16 mx-auto flex flex-col gap-3">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-gold">
              Our Experts
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy">
              Our expert team will help you
            </h2>
            <div className="w-12 h-1 bg-gold mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_DATA.slice(0, 4).map((m, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group border border-gray-100"
              >
                {/* Image Placeholder */}
                <div className="h-56 bg-gradient-to-br from-navy to-blue-900 flex flex-col items-center justify-center relative overflow-hidden">
                  <div className={`w-24 h-24 rounded-full ${m.bgClass} text-3xl font-black flex items-center justify-center shadow-lg border-2 border-white/20 transform group-hover:scale-105 transition-transform duration-300`}>
                    {m.initials}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    <span className="text-[9px] uppercase font-bold tracking-wider text-gold">Expert Agent</span>
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-6 text-center flex flex-col gap-2">
                  <h3 className="font-display font-bold text-base text-navy group-hover:text-gold transition-colors">
                    {m.name}
                  </h3>
                  <span className="block text-xs font-semibold text-gold tracking-wide uppercase">
                    {m.role}
                  </span>
                  <p className="text-gray-500 text-xs leading-relaxed mt-2">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 1i) PARTNERS/CLIENTS LOGOS */}
      <section className="py-12 bg-white px-4 md:px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity">
            {PARTNER_LOGOS.map((p, idx) => (
              <div 
                key={idx} 
                className="font-display font-black text-gray-400 text-sm tracking-[0.3em] flex items-center gap-1 bg-light-gray px-4 py-2.5 rounded-lg border border-gray-200/50"
              >
                <span className="text-xs">⊞</span>
                <span>{p.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 1j) CONTACT PREVIEW & FORM */}
      <section className="py-20 md:py-28 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Contact Info Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-gold">
              Get in Touch
            </span>
            <h2 className="font-display font-extrabold text-3xl text-navy leading-tight tracking-tight">
              Let Our Consultants Help Securing Your Future Today
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We understand you may have unique circumstances. Whether you are living in Johannesburg, Nairobi, Lagos, London, or New York, our agents are ready to construct custom coverage options suited exactly to your environment.
            </p>

            <div className="flex flex-col gap-5 mt-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-light-gold text-gold flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-sm">Call Our Support</h4>
                  <a href="tel:+79502294642" className="text-gray-600 text-sm hover:underline hover:text-gold block">
                    +7 950 229-46-42 (Mon - Sat)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-light-gold text-gold flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-sm">Email Us</h4>
                  <a href="mailto:info@dipita-insura.com" className="text-gray-600 text-sm hover:underline hover:text-gold block">
                    info@dipita-insura.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-light-gold text-gold flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-sm">Head Office Location</h4>
                  <span className="text-gray-600 text-sm">
                    Leninsky Prospekt 12, Moscow, Russia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quick Contact Form */}
          <div className="lg:col-span-7 bg-light-gray rounded-3xl p-6 md:p-10 border border-gray-100 shadow-sm">
            <h3 className="font-display font-bold text-xl text-navy mb-1">
              Request a Consultation Call
            </h3>
            <p className="text-gray-500 text-xs mb-8">
              Fill out this quick secure form and an advisor will coordinate.
            </p>

            <form onSubmit={handleQuickContactSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-navy">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-gold w-full"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-navy">Your Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={handleInputChange}
                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-gold w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-semibold text-navy">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter with country code"
                    value={formState.phone}
                    onChange={handleInputChange}
                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-gold w-full"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-xs font-semibold text-navy">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleInputChange}
                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-gold w-full"
                  >
                    <option value="">Select a coverage plan</option>
                    <option value="Health Insurance">Health Insurance</option>
                    <option value="Life Insurance">Life Insurance</option>
                    <option value="Auto Insurance">Auto Insurance</option>
                    <option value="Business Insurance">Business Insurance</option>
                    <option value="Education Insurance">Education Insurance</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-navy">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="How can we assist you today?"
                  value={formState.message}
                  onChange={handleInputChange}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-gold w-full resize-none"
                />
              </div>

              {submitStatus && (
                <div className={`p-4 rounded-xl text-xs font-semibold border ${
                  submitStatus.success 
                    ? "bg-green/10 text-green border-green/20" 
                    : "bg-red-50 text-red-600 border-red-100"
                }`}>
                  {submitStatus.msg}
                </div>
              )}

              <div className="mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-navy hover:bg-gold text-white hover:text-navy font-bold text-xs px-8 py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer w-full sm:w-auto"
                >
                  {loading ? "Submitting Inquiry..." : "Submit Inquiry Now"}
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
