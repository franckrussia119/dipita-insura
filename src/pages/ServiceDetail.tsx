import React, { useState } from "react";
import { useRouter } from "../context/RouterContext";
import { SERVICES_DATA } from "../data";
import { 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ArrowRight, 
  Activity, 
  Shield, 
  Car, 
  Building, 
  GraduationCap, 
  Award,
  Clock,
  ThumbsUp
} from "lucide-react";

interface ServiceDetailProps {
  slug: string;
}

export default function ServiceDetail({ slug }: ServiceDetailProps) {
  const { navigateTo } = useRouter();
  
  // Find current service
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  // FAQ accordion open states
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    return (
      <div className="py-24 text-center bg-light-gray min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <span className="text-4xl">⚠️</span>
        <h2 className="font-display font-black text-navy text-xl">Service Plan Not Found</h2>
        <button 
          onClick={() => navigateTo("/services")}
          className="bg-navy hover:bg-gold text-white font-bold text-xs px-6 py-2.5 rounded-full"
        >
          Return to All Services
        </button>
      </div>
    );
  }

  const getServiceIconComponent = (iconSlug: string) => {
    switch (iconSlug) {
      case "health": return <Activity className="w-10 h-10 text-gold" />;
      case "life": return <Shield className="w-10 h-10 text-gold" />;
      case "auto": return <Car className="w-10 h-10 text-gold" />;
      case "business": return <Building className="w-10 h-10 text-gold" />;
      case "education": return <GraduationCap className="w-10 h-10 text-gold" />;
      default: return <Award className="w-10 h-10 text-gold" />;
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq((prev) => (prev === idx ? null : idx));
  };

  const handleQuoteClick = () => {
    localStorage.setItem("selectedService", service.title);
    navigateTo("/quote");
  };

  return (
    <div className="w-full">
      
      {/* Service Header */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: "url('https://dipita-insura.com/wp-content/uploads/2025/03/pexels-thirdman-5060999-scaled.jpg')" }} />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <span className="text-gold text-xs uppercase tracking-widest font-bold">Premium Coverage Plans</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
            {service.title} Portfolio
          </h1>
          <div className="flex items-center gap-2 text-xs text-gray-300 mt-2 font-medium">
            <button onClick={() => navigateTo("/")} className="hover:text-gold cursor-pointer">Home</button>
            <span>/</span>
            <button onClick={() => navigateTo("/services")} className="hover:text-gold cursor-pointer">Services</button>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </div>
        </div>
      </section>

      {/* Main Description & Features */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Details block */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-3 bg-light-gray p-4 rounded-2xl border border-gray-100 self-start">
              <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center">
                {getServiceIconComponent(service.slug)}
              </div>
              <div>
                <span className="block text-navy font-display font-bold text-sm">Designated Core Plan</span>
                <span className="block text-gold text-[11px] font-semibold uppercase tracking-wider">Premium Protection</span>
              </div>
            </div>

            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy">
              About Our {service.title} Coverage
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {service.fullDesc}
            </p>

            {/* Detailed Feature List */}
            <div className="mt-4">
              <h3 className="font-display font-bold text-navy text-base mb-4">Included Protection Benefits:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-gray-500">
                    <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right quick advisory block */}
          <div className="lg:col-span-5 bg-light-gray rounded-3xl p-6 md:p-8 border border-gray-150 shadow-sm flex flex-col gap-6">
            <h3 className="font-display font-bold text-navy text-lg pb-2 border-b border-gray-200">
              Need Quick Advice?
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Our professional risk consultants are ready to tailor premium solutions that perfectly correspond to your family budget.
            </p>
            <div className="flex flex-col gap-4 text-xs">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                <span>24/7 Rapid Emergency Response</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                <span>Direct Mobile Money Payments Support</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold shrink-0" />
                <span>Global Diaspora Management Access</span>
              </div>
            </div>
            <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
              <button 
                onClick={handleQuoteClick}
                className="w-full bg-navy hover:bg-gold text-white hover:text-navy font-bold text-xs py-3 rounded-full transition-all duration-300 shadow-md cursor-pointer text-center"
              >
                Get Custom {service.title} Quote
              </button>
              <button 
                onClick={() => navigateTo("/contact")}
                className="w-full border border-navy/20 hover:bg-navy/5 text-navy font-bold text-xs py-3 rounded-full transition-all duration-300 cursor-pointer text-center"
              >
                Connect With Advisors
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Tiers row */}
      <section className="py-20 bg-light-gray px-4 md:px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          <div className="text-center max-w-2xl mb-16 flex flex-col gap-3">
            <span className="text-gold text-xs uppercase tracking-widest font-bold">Pricing Guide</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy">
              Transparent, Honest Premium Structures
            </h2>
            <p className="text-gray-500 text-xs md:text-sm">
              Choose a pricing plan that fits your life. No hidden setup charges, no long-term rigid binding terms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-center items-stretch">
            {service.pricingTiers.map((tier, tIdx) => (
              <div 
                key={tIdx}
                className="bg-white rounded-3xl p-6 md:p-8 border border-gray-150 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full relative"
              >
                {tIdx === 1 && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-navy text-[9px] uppercase tracking-wider font-extrabold px-4 py-1.5 rounded-full shadow-md border border-yellow-400">
                    Most Popular
                  </div>
                )}
                <div>
                  <h4 className="font-display font-bold text-navy text-sm mb-4 uppercase tracking-wider">{tier.name}</h4>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-display font-black text-3xl md:text-4xl text-navy">{tier.price}</span>
                    <span className="text-gray-400 text-xs">/ {tier.period}</span>
                  </div>
                  <div className="w-full h-px bg-gray-100 mb-6" />
                  
                  {/* Features */}
                  <div className="flex flex-col gap-3.5">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-500">
                        <span className="text-gold shrink-0 mt-0.5">✓</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleQuoteClick}
                  className="bg-navy hover:bg-gold text-white hover:text-navy font-bold text-xs py-3 rounded-full transition-all duration-300 w-full cursor-pointer mt-8"
                >
                  Get {tier.name} Setup
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16 flex flex-col gap-3">
            <span className="text-gold text-xs uppercase tracking-widest font-bold font-sans">Learn More Info</span>
            <h2 className="font-display font-extrabold text-2xl md:text-3xl text-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {service.faq.map((item, fIdx) => (
              <div 
                key={fIdx}
                className="bg-light-gray rounded-2xl border border-gray-150 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(fIdx)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-display font-bold text-navy text-sm md:text-base flex items-center gap-2">
                    <HelpCircle size={16} className="text-gold" />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown size={18} className={`text-navy/50 transition-transform ${openFaq === fIdx ? "rotate-180" : ""}`} />
                </button>
                
                {openFaq === fIdx && (
                  <div className="px-6 pb-5 text-gray-500 text-xs md:text-sm border-t border-gray-200/50 pt-3 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
