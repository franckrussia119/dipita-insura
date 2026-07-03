import React, { useState } from "react";
import { useRouter } from "../context/RouterContext";
import { TEAM_DATA } from "../data";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Mail, 
  ChevronRight,
  Briefcase,
  CheckCircle2
} from "lucide-react";

export default function Team() {
  const { navigateTo } = useRouter();

  // Careers form state
  const [careerState, setCareerState] = useState({
    name: "",
    email: "",
    role: "",
    resumeUrl: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (careerState.name && careerState.email) {
      setSubmitted(true);
      setCareerState({ name: "", email: "", role: "", resumeUrl: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCareerState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full">
      
      {/* Page Header */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: "url('https://dipita-insura.com/wp-content/uploads/2025/03/pexels-thirdman-5060999-scaled.jpg')" }} />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <span className="text-gold text-xs uppercase tracking-widest font-bold">People Behind DIPITA</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
            Our Expert Advisors
          </h1>
          <div className="flex items-center gap-2 text-xs text-gray-300 mt-2 font-medium">
            <button onClick={() => navigateTo("/")} className="hover:text-gold cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white">Our Team</span>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-16 md:py-24 bg-white px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center flex flex-col gap-4">
          <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-gold">Dedicated Consultants</span>
          <h2 className="font-display font-extrabold text-2xl md:text-4xl text-navy">
            Commitment, Trust, and Cross-Border Protection Expertise
          </h2>
          <div className="w-12 h-1 bg-gold mx-auto mt-1 rounded-full" />
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-4">
            Our team brings together decades of diverse experience in global finance, regional African insurance legal frameworks, software design, and client relations. We are completely committed to building long-term confidence and providing clear, honest, pay-as-you-go financial shields.
          </p>
        </div>
      </section>

      {/* Grid of Team Cards */}
      <section className="pb-24 px-4 md:px-8 bg-light-gray">
        <div className="max-w-7xl mx-auto pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM_DATA.map((m, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-gray-150 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full group"
              >
                {/* Header Avatar Area */}
                <div className="bg-gradient-to-br from-navy to-blue-900 h-44 flex items-center justify-center relative overflow-hidden shrink-0">
                  <div className="absolute inset-0 bg-black/10" />
                  <div className={`w-24 h-24 rounded-full ${m.bgClass} text-3xl font-black flex items-center justify-center shadow-lg border-4 border-white transform group-hover:scale-105 transition-transform duration-300`}>
                    {m.initials}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-8 flex flex-col justify-between flex-grow gap-4 text-center">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-display font-bold text-lg text-navy group-hover:text-gold transition-colors">
                      {m.name}
                    </h3>
                    <span className="text-xs font-semibold text-gold tracking-wider uppercase">
                      {m.role}
                    </span>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed mt-3">
                      {m.description}
                    </p>
                  </div>

                  {/* Social icons */}
                  <div className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-gray-100">
                    {m.social.linkedin && (
                      <a href="#" className="w-8 h-8 rounded-full bg-light-gray text-navy hover:bg-navy hover:text-white flex items-center justify-center transition-colors" aria-label="LinkedIn">
                        <Linkedin size={14} />
                      </a>
                    )}
                    {m.social.twitter && (
                      <a href="#" className="w-8 h-8 rounded-full bg-light-gray text-navy hover:bg-navy hover:text-white flex items-center justify-center transition-colors" aria-label="Twitter">
                        <Twitter size={14} />
                      </a>
                    )}
                    {m.social.facebook && (
                      <a href="#" className="w-8 h-8 rounded-full bg-light-gray text-navy hover:bg-navy hover:text-white flex items-center justify-center transition-colors" aria-label="Facebook">
                        <Facebook size={14} />
                      </a>
                    )}
                    <a href="mailto:info@dipita-insura.com" className="w-8 h-8 rounded-full bg-light-gray text-navy hover:bg-navy hover:text-white flex items-center justify-center transition-colors" aria-label="Email">
                      <Mail size={14} />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 md:py-28 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-gold">Careers At DIPITA</span>
            <h2 className="font-display font-extrabold text-3xl text-navy leading-tight tracking-tight">
              Join Our Mission to Secure the Growth of Africas Future
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              We are constantly seeking brilliant, passionate, and energetic professionals who care about resolving real-world security gaps. If you are eager to build high-trust digital tools and provide customer-first advisor guidance, we want to meet you.
            </p>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-3 text-xs md:text-sm text-gray-600">
                <CheckCircle2 size={16} className="text-gold" />
                <span>Fully remote friendly workplace conditions</span>
              </div>
              <div className="flex items-center gap-3 text-xs md:text-sm text-gray-600">
                <CheckCircle2 size={16} className="text-gold" />
                <span>Ongoing career development mentorship</span>
              </div>
              <div className="flex items-center gap-3 text-xs md:text-sm text-gray-600">
                <CheckCircle2 size={16} className="text-gold" />
                <span>Incredible work-life balance focus</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-light-gray rounded-3xl p-6 md:p-10 border border-gray-150">
            <h3 className="font-display font-bold text-xl text-navy mb-1 flex items-center gap-2">
              <Briefcase size={20} className="text-gold" />
              <span>Submit General Application</span>
            </h3>
            <p className="text-gray-500 text-xs mb-8">
              Send us your background details and our talent acquisition advisor will follow up.
            </p>

            <form onSubmit={handleCareerSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-navy">Full Name *</label>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Enter your name"
                  value={careerState.name}
                  onChange={handleInputChange}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-gold w-full"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-navy">Email Address *</label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Enter your email"
                  value={careerState.email}
                  onChange={handleInputChange}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-gold w-full"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-navy">Preferred Position *</label>
                <select
                  required
                  name="role"
                  value={careerState.role}
                  onChange={handleInputChange}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-gold w-full"
                >
                  <option value="">Select a role</option>
                  <option value="Risk Consultant">Risk Consultant / Agent</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Operations Manager">Operations Manager</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-navy">LinkedIn or Portfolio URL</label>
                <input
                  type="url"
                  name="resumeUrl"
                  placeholder="https://linkedin.com/in/username"
                  value={careerState.resumeUrl}
                  onChange={handleInputChange}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-gold w-full"
                />
              </div>

              {submitted && (
                <div className="bg-green/10 text-green border border-green/20 p-4 rounded-xl text-xs font-semibold flex items-center gap-1.5">
                  <CheckCircle2 size={16} />
                  <span>General application submitted successfully! Our agents will contact you.</span>
                </div>
              )}

              <button
                type="submit"
                className="bg-navy hover:bg-gold text-white hover:text-navy font-bold text-xs px-8 py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer mt-2"
              >
                Submit Application
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}
