import React from "react";
import { useRouter } from "../context/RouterContext";
import { SERVICES_DATA } from "../data";
import { 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Shield, 
  Car, 
  Building, 
  GraduationCap,
  Award
} from "lucide-react";

export default function Services() {
  const { navigateTo } = useRouter();

  const handleQuoteClick = (serviceTitle: string) => {
    // Go to quote page (could save preferred service in state/localStorage, handled in Quote.tsx)
    localStorage.setItem("selectedService", serviceTitle);
    navigateTo("/quote");
  };

  const getServiceIconComponent = (slug: string) => {
    switch (slug) {
      case "health": return <Activity className="w-12 h-12 text-gold" />;
      case "life": return <Shield className="w-12 h-12 text-gold" />;
      case "auto": return <Car className="w-12 h-12 text-gold" />;
      case "business": return <Building className="w-12 h-12 text-gold" />;
      case "education": return <GraduationCap className="w-12 h-12 text-gold" />;
      default: return <Award className="w-12 h-12 text-gold" />;
    }
  };

  const getServiceColorGradient = (slug: string) => {
    switch (slug) {
      case "health": return "from-blue-600 to-cyan-500";
      case "life": return "from-indigo-600 to-purple-600";
      case "auto": return "from-red-600 to-orange-500";
      case "business": return "from-emerald-600 to-teal-500";
      case "education": return "from-amber-600 to-yellow-500";
      default: return "from-navy to-blue-900";
    }
  };

  return (
    <div className="w-full">
      
      {/* Page Header */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: "url('https://dipita-insura.com/wp-content/uploads/2025/03/pexels-thirdman-5060999-scaled.jpg')" }} />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <span className="text-gold text-xs uppercase tracking-widest font-bold">Comprehensive Protection</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
            Our Tailored Services
          </h1>
          <div className="flex items-center gap-2 text-xs text-gray-300 mt-2 font-medium">
            <button onClick={() => navigateTo("/")} className="hover:text-gold cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white">Services</span>
          </div>
        </div>
      </section>

      {/* Services Overview Intro */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
          <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-gold">Built For Your Life</span>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-navy">
            Securing Your Interests Across Every Milestone
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-1 rounded-full" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4">
            At Dipita Insura, we believe financial peace of mind should not be a luxury. We provide innovative, high-trust portfolios designed intentionally to protect Africas middle class and our hard-working diaspora networks globally. Learn more about each plan below.
          </p>
        </div>
      </section>

      {/* Alternating Services Cards */}
      <section className="pb-24 px-4 md:px-8 bg-light-gray">
        <div className="max-w-7xl mx-auto flex flex-col gap-20 pt-16">
          
          {SERVICES_DATA.map((srv, idx) => {
            const isEven = idx % 2 === 0;
            const bgGradient = getServiceColorGradient(srv.slug);
            
            return (
              <div 
                key={srv.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                
                {/* Visual Image/Illustration Box */}
                <div className={`lg:col-span-5 w-full ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className={`relative bg-gradient-to-br ${bgGradient} rounded-3xl p-12 aspect-[4/3] flex flex-col justify-between items-start text-white shadow-lg overflow-hidden group`}>
                    <div className="absolute top-0 right-0 w-44 h-44 bg-white/10 rounded-full blur-2xl transform group-hover:scale-125 transition-transform duration-500" />
                    
                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10 shrink-0">
                      {getServiceIconComponent(srv.slug)}
                    </div>

                    <div className="mt-8">
                      <span className="text-5xl font-black block select-none mb-2 filter drop-shadow-md">
                        {srv.icon}
                      </span>
                      <h3 className="font-display font-bold text-2xl text-white">
                        {srv.title}
                      </h3>
                      <p className="text-white/80 text-xs mt-1">Premium Protection Plan</p>
                    </div>
                  </div>
                </div>

                {/* Text Details Box */}
                <div className={`lg:col-span-7 flex flex-col gap-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{srv.icon}</span>
                    <span className="font-sans font-bold text-xs uppercase tracking-widest text-gold">
                      Category: {srv.title}
                    </span>
                  </div>
                  
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-navy">
                    {srv.title} Portfolio
                  </h3>
                  
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {srv.fullDesc}
                  </p>

                  {/* Features Bullet List */}
                  <div className="mt-2">
                    <h4 className="font-display font-bold text-navy text-sm mb-3">Key Coverage Elements:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {srv.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                          <CheckCircle2 size={16} className="text-gold shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mt-6">
                    <button
                      onClick={() => handleQuoteClick(srv.title)}
                      className="bg-navy hover:bg-gold text-white hover:text-navy font-bold text-xs px-8 py-3.5 rounded-full transition-all duration-300 shadow-md transform hover:-translate-y-0.5 cursor-pointer"
                    >
                      Get {srv.title.split(" ")[0]} Quote
                    </button>
                    <button
                      onClick={() => navigateTo(`/services/${srv.slug}`)}
                      className="border-2 border-navy/20 hover:border-gold hover:bg-gold/5 text-navy font-bold text-xs px-6 py-3 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Plan Pricing & FAQ</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>

    </div>
  );
}
