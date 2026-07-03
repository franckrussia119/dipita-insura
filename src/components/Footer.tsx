import React, { useState } from "react";
import { useRouter } from "../context/RouterContext";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Send,
  CheckCircle2
} from "lucide-react";

export default function Footer() {
  const { navigateTo } = useRouter();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLinkClick = (path: string) => {
    navigateTo(path);
  };

  return (
    <footer className="bg-navy text-white font-sans pt-16 pb-8 border-t border-navy/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-navy to-blue-900 border border-yellow-500/30 rounded-2xl p-6 md:p-10 flex flex-col lg:flex-row justify-between items-center mb-16 gap-6 shadow-xl">
          <div className="max-w-md text-center lg:text-left">
            <h3 className="font-display font-bold text-xl md:text-2xl text-gold mb-2">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-300 text-xs md:text-sm">
              Stay updated with premium financial tips and tailored insurance offers designed for Africas middle class.
            </p>
          </div>
          <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col sm:flex-row gap-2">
            {subscribed ? (
              <div className="flex items-center gap-2 bg-green/20 text-green border border-green/30 px-4 py-3 rounded-xl w-full text-xs font-semibold justify-center">
                <CheckCircle2 size={16} />
                <span>Subscribed successfully! Thank you.</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-navy-dark/50 text-white placeholder-gray-400 border border-gray-600 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-gold w-full"
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-white text-navy font-bold text-xs px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <Send size={13} />
                </button>
              </>
            )}
          </form>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => handleLinkClick("/")}
              className="flex items-center gap-2 text-left focus:outline-none cursor-pointer self-start"
            >
              <span className="text-2xl" role="img" aria-label="Logo tree">🌳</span>
              <div>
                <span className="font-display font-bold text-2xl tracking-tight text-white hover:text-gold transition-colors">
                  DIPITA
                </span>
                <span className="block font-sans font-bold text-[10px] uppercase tracking-[0.2em] text-gold -mt-1">
                  Insura
                </span>
              </div>
            </button>
            <p className="text-gray-300 text-xs leading-relaxed mt-2">
              Tailored Insurance Solutions for Africas Middle Class and the diaspora worldwide. We provide flexible, secure, and modern cover for life, health, businesses, and education, ensuring you remain confident in what comes ahead.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300" aria-label="Facebook">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300" aria-label="Twitter">
                <Twitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300" aria-label="Instagram">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300" aria-label="LinkedIn">
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="flex flex-col gap-4 md:pl-8">
            <h4 className="font-display font-bold text-base text-gold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gold">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2 mt-2">
              {[
                { name: "Home Dashboard", path: "/" },
                { name: "About Us Story", path: "/about" },
                { name: "Our Services Info", path: "/services" },
                { name: "Our Expert Team", path: "/team" },
                { name: "Blog & Financial Insights", path: "/blog" },
                { name: "Contact Our Agents", path: "/contact" },
                { name: "Get Premium Quote", path: "/quote" }
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.path)}
                  className="text-left text-gray-300 hover:text-gold text-xs font-sans transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span className="text-gold/50 text-xs">➔</span>
                  <span>{link.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display font-bold text-base text-gold relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gold">
              Contact Info
            </h4>
            <div className="flex flex-col gap-3.5 mt-2 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span>Leninsky Prospekt 12, Moscow, Russia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:+79502294642" className="hover:underline hover:text-gold">
                  +7 950 229-46-42
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:info@dipita-insura.com" className="hover:underline hover:text-gold">
                  info@dipita-insura.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <span className="block">Mon - Sat: 9:00 AM - 7:00 PM</span>
                  <span className="block text-gray-500">Sunday: Closed</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            © 2026 Dipita Insura. All rights reserved. Slogan: Tailored Insurance Solutions for Africas Middle Class.
          </p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleLinkClick("/services")} className="hover:text-gold cursor-pointer">Privacy Policy</button>
            <button onClick={() => handleLinkClick("/services")} className="hover:text-gold cursor-pointer">Terms of Service</button>
            <button onClick={() => handleLinkClick("/contact")} className="hover:text-gold cursor-pointer">Support</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
