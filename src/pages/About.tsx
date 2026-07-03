import React, { useState, useEffect } from "react";
import { useRouter } from "../context/RouterContext";
import { 
  Shield, 
  Globe, 
  CreditCard, 
  Zap, 
  Lock, 
  UserCheck, 
  Smile, 
  Users, 
  Star,
  Target,
  Eye,
  Heart
} from "lucide-react";
import { TEAM_DATA } from "../data";

export default function About() {
  const { navigateTo } = useRouter();

  // Stats Counters
  const [clientsCount, setClientsCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [teamCount, setTeamCount] = useState(0);

  useEffect(() => {
    const duration = 1500;
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

  const featureBoxes = [
    {
      icon: <Shield className="w-6 h-6 text-gold" />,
      title: "Flexible Monthly Plans",
      desc: "We offer simple monthly subscription options that you can pause or scale as your budget changes."
    },
    {
      icon: <Globe className="w-6 h-6 text-gold" />,
      title: "Global Diaspora Portal",
      desc: "Africans living abroad can easily secure coverage and pay premiums directly for their family at home."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-gold" />,
      title: "Direct Digital Payments",
      desc: "Seamless payment integrations with credit cards, banking transfer options, and mobile money services."
    },
    {
      icon: <Zap className="w-6 h-6 text-gold" />,
      title: "Rapid Claims Settlement",
      desc: "No long processes. We settle claims with extreme urgency, targeting payouts within 24 business hours."
    },
    {
      icon: <Lock className="w-6 h-6 text-gold" />,
      title: "Secure Encrypted Vaults",
      desc: "Your personal details and premium transactions are heavily protected using industrial-level encryptions."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-gold" />,
      title: "Dedicated Advisors",
      desc: "Receive ongoing direct assistance from a designated personal risk manager who speaks your language."
    }
  ];

  return (
    <div className="w-full">
      
      {/* Page Header */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: "url('https://dipita-insura.com/wp-content/uploads/2025/03/pexels-thirdman-5060999-scaled.jpg')" }} />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <span className="text-gold text-xs uppercase tracking-widest font-bold">About Our Enterprise</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
            Our Story & Core Values
          </h1>
          <div className="flex items-center gap-2 text-xs text-gray-300 mt-2 font-medium">
            <button onClick={() => navigateTo("/")} className="hover:text-gold cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white">About Us</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 relative group">
            <img 
              src="https://dipita-insura.com/wp-content/uploads/2025/03/pexels-william-fortunato-6392875-scaled.jpg" 
              alt="Secured African family with Dipita Insura"
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-navy/90 backdrop-blur-md text-white p-6 rounded-2xl border border-white/10">
              <span className="text-gold font-display font-bold text-lg block mb-1">Empowering the Diaspora</span>
              <p className="text-gray-300 text-xs">Connecting Africans worldwide to quality health, education, and asset support networks back home.</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-gold">Why We Exist</span>
            <h2 className="font-display font-extrabold text-3xl text-navy tracking-tight leading-tight">
              Bridging the Insurance Gap for Africa Middle Class
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Dipita Insura was founded out of a critical mission: traditional insurance on the continent was built for big corporations, completely missing the dynamic middle class and the massive diaspora who actively support relatives back home.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We realized that the hard-working African middle class wanted to secure their healthcare, children educational paths, small business operations, and transportation without being tied down by yearly complex contracts. That is why we designed a simplified, digital-first model built on transparent pay-as-you-go systems.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Our name DIPITA stands for confidence and trust, and we live by our slogan: "We are confident in what comes ahead."
            </p>
          </div>

        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-light-gray px-4 md:px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl p-8 border border-gray-150 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-white shrink-0 shadow-md">
              <Target size={18} className="text-gold" />
            </div>
            <h3 className="font-display font-bold text-navy text-lg">Our Mission</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              To make high-quality, trustworthy insurance coverage highly accessible and affordable for families and expanding businesses across Africa.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-150 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-white shrink-0 shadow-md">
              <Eye size={18} className="text-gold" />
            </div>
            <h3 className="font-display font-bold text-navy text-lg">Our Vision</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              To remain the primary, most reliable digital insurance portal connecting global diaspora payments directly to family security benefits back home.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-150 shadow-sm flex flex-col gap-4">
            <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center text-white shrink-0 shadow-md">
              <Heart size={18} className="text-gold" />
            </div>
            <h3 className="font-display font-bold text-navy text-lg">Our Values</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Honesty in pricing, continuous technology innovations, uncompromised accessibility, and active investment back into the local community.
            </p>
          </div>

        </div>
      </section>

      {/* Why Choose Dipita: 6 feature boxes */}
      <section className="py-20 md:py-28 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mb-16 mx-auto flex flex-col gap-3">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-gold">Key Pillars</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-navy">
              Why Choose Dipita Insura
            </h2>
            <div className="w-12 h-1 bg-gold mx-auto mt-2 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureBoxes.map((f, idx) => (
              <div 
                key={idx}
                className="bg-light-gray rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-gold transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6 shadow-sm">
                  {f.icon}
                </div>
                <h3 className="font-display font-bold text-navy text-base mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Stats Counter (Same as home) */}
      <section className="bg-navy text-white py-16 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center relative z-10">
          
          <div className="flex flex-col items-center gap-3">
            <span className="font-display font-bold text-4xl md:text-5xl text-gold">
              {clientsCount}+
            </span>
            <span className="font-sans font-medium text-xs uppercase tracking-wider text-gray-300">
              Satisfied Clients
            </span>
          </div>

          <div className="flex flex-col items-center gap-3 border-y md:border-y-0 md:border-x border-blue-900/60 py-8 md:py-0">
            <span className="font-display font-bold text-4xl md:text-5xl text-gold">
              {successRate}%
            </span>
            <span className="font-sans font-medium text-xs uppercase tracking-wider text-gray-300">
              Claims Success Rate
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <span className="font-display font-bold text-4xl md:text-5xl text-gold">
              {teamCount}+
            </span>
            <span className="font-sans font-medium text-xs uppercase tracking-wider text-gray-300">
              Expert Team Members
            </span>
          </div>

        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20 md:py-28 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          <div className="text-center max-w-2xl mb-16 flex flex-col gap-3">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-gold">Our Leaders</span>
            <h2 className="font-display font-extrabold text-3xl text-navy">
              Led by Industry Veterans
            </h2>
            <div className="w-12 h-1 bg-gold mx-auto mt-2 rounded-full" />
            <p className="text-gray-500 text-xs md:text-sm mt-2">
              Our team consists of operations managers, digital platform designs, and legacy experts dedicated to supporting your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full justify-center">
            {TEAM_DATA.slice(0, 3).map((m, idx) => (
              <div 
                key={idx}
                className="bg-light-gray rounded-2xl overflow-hidden border border-gray-150 p-6 flex flex-col items-center text-center gap-4"
              >
                <div className={`w-20 h-20 rounded-full ${m.bgClass} text-2xl font-black flex items-center justify-center shadow-md`}>
                  {m.initials}
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-base">{m.name}</h4>
                  <span className="text-xs font-semibold text-gold uppercase tracking-wide">{m.role}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {m.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => navigateTo("/team")}
              className="bg-navy hover:bg-gold text-white hover:text-navy font-bold text-xs px-8 py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer"
            >
              Meet Our Complete Team
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
