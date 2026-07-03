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
  HelpCircle,
  CheckCircle2,
  XCircle
} from "lucide-react";

export default function Contact() {
  const { navigateTo } = useRouter();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success?: boolean; msg?: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSubmitResult({ success: true, msg: data.message });
        setFormState({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setSubmitResult({ success: false, msg: data.error || "Failed to submit message." });
      }
    } catch (err) {
      setSubmitResult({ 
        success: false, 
        msg: "Failed to connect to full-stack backend. Please verify that your dev server is active and try again." 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full">
      
      {/* Page Header */}
      <section className="relative bg-navy text-white py-20 px-4 md:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25" style={{ backgroundImage: "url('https://dipita-insura.com/wp-content/uploads/2025/03/pexels-thirdman-5060999-scaled.jpg')" }} />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-3">
          <span className="text-gold text-xs uppercase tracking-widest font-bold">Contact Our Offices</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight">
            Connect With Our Agents
          </h1>
          <div className="flex items-center gap-2 text-xs text-gray-300 mt-2 font-medium">
            <button onClick={() => navigateTo("/")} className="hover:text-gold cursor-pointer">Home</button>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main 2-Column Section */}
      <section className="py-20 md:py-28 bg-white px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-gold">Get In Touch</span>
              <h2 className="font-display font-extrabold text-3xl text-navy leading-tight tracking-tight">
                We are Here to Help Secure Your Future
              </h2>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mt-1">
                Do not hesitate to connect with our professional advisors. Whether checking premium options, reviewing dynamic claim policies, or seeking clarifications, we respond with absolute urgency.
              </p>
            </div>

            {/* Contact details list */}
            <div className="flex flex-col gap-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-light-gold text-navy flex items-center justify-center shrink-0 shadow-sm border border-yellow-200">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-sm mb-0.5">Call Our Direct Helpdesk</h4>
                  <a href="tel:+79502294642" className="text-gray-600 text-sm hover:underline hover:text-gold block font-semibold">
                    +7 950 229-46-42
                  </a>
                  <span className="text-gray-400 text-[11px] block mt-0.5">Available Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-light-gold text-navy flex items-center justify-center shrink-0 shadow-sm border border-yellow-200">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-sm mb-0.5">Send a Secure Email</h4>
                  <a href="mailto:info@dipita-insura.com" className="text-gray-600 text-sm hover:underline hover:text-gold block font-semibold">
                    info@dipita-insura.com
                  </a>
                  <span className="text-gray-400 text-[11px] block mt-0.5">We reply within 2 hours</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-light-gold text-navy flex items-center justify-center shrink-0 shadow-sm border border-yellow-200">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-sm mb-0.5">Headquarters Address</h4>
                  <span className="text-gray-600 text-sm font-medium block">
                    Leninsky Prospekt 12
                  </span>
                  <span className="text-gray-500 text-xs block">Moscow, Russia</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-light-gold text-navy flex items-center justify-center shrink-0 shadow-sm border border-yellow-200">
                  <Clock size={20} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-navy text-sm mb-0.5">Operating Hours</h4>
                  <span className="text-gray-600 text-sm font-medium block">Mon - Sat: 9:00 AM - 7:00 PM</span>
                  <span className="text-red-500 text-xs font-semibold block">Sunday: Closed</span>
                </div>
              </div>

            </div>

            {/* Social media connections */}
            <div className="pt-6 border-t border-gray-100">
              <h4 className="font-display font-bold text-navy text-sm mb-3">Connect via Social Networks</h4>
              <div className="flex items-center gap-3">
                <a href="#" className="w-9 h-9 rounded-xl bg-light-gray text-navy hover:bg-gold hover:text-white flex items-center justify-center transition-colors" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-xl bg-light-gray text-navy hover:bg-gold hover:text-white flex items-center justify-center transition-colors" aria-label="Twitter">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-xl bg-light-gray text-navy hover:bg-gold hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="#" className="w-9 h-9 rounded-xl bg-light-gray text-navy hover:bg-gold hover:text-white flex items-center justify-center transition-colors" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-light-gray rounded-3xl p-6 md:p-10 border border-gray-150 shadow-sm w-full">
            <h3 className="font-display font-bold text-xl text-navy mb-1">
              Send a Secure Message
            </h3>
            <p className="text-gray-500 text-xs mb-8">
              Fill out this form and we will distribute it immediately to the designated advisor team.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-navy">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formState.name}
                    onChange={handleInputChange}
                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-gold w-full"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-navy">Email Address *</label>
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
                  <label htmlFor="service" className="text-xs font-semibold text-navy">Service Category Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleInputChange}
                    className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-gold w-full"
                  >
                    <option value="">Choose a coverage plan</option>
                    <option value="Health Insurance">Health Insurance Plan</option>
                    <option value="Life Insurance">Life Insurance Plan</option>
                    <option value="Auto Insurance">Auto Insurance Plan</option>
                    <option value="Business Insurance">Business Insurance Plan</option>
                    <option value="Education Insurance">Education Insurance Plan</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-navy">Message Details *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="How can we assist you today?"
                  value={formState.message}
                  onChange={handleInputChange}
                  className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-gold w-full resize-none"
                />
              </div>

              {submitResult && (
                <div className={`p-4 rounded-xl text-xs font-semibold border ${
                  submitResult.success 
                    ? "bg-green/10 text-green border-green/20 flex items-center gap-1.5" 
                    : "bg-red-50 text-red-600 border-red-100 flex items-center gap-1.5"
                }`}>
                  {submitResult.success ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
                  <span>{submitResult.msg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="bg-navy hover:bg-gold text-white hover:text-navy font-bold text-xs px-8 py-3.5 rounded-full transition-all duration-300 shadow-md cursor-pointer self-start w-full sm:w-auto"
              >
                {loading ? "Sending Message..." : "Send Secure Message"}
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="px-4 md:px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-navy rounded-3xl p-12 text-center text-white relative overflow-hidden border border-yellow-500/20 shadow-xl flex flex-col items-center justify-center min-h-[300px]">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15" style={{ backgroundImage: "url('https://dipita-insura.com/wp-content/uploads/2025/03/pexels-thirdman-5060999-scaled.jpg')" }} />
            <div className="absolute inset-0 bg-navy/85" />
            
            <div className="relative z-10 flex flex-col items-center gap-4 max-w-xl">
              <span className="text-gold text-4xl" role="img" aria-label="Map flag">📍</span>
              <h3 className="font-display font-extrabold text-2xl text-white">Our Headquarters Location</h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                Leninsky Prospekt 12, Moscow, Russia. Feel free to schedule an in-person session or speak to one of our regional advisors at our head offices.
              </p>
              <div className="mt-4 flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full border border-white/10 text-xs">
                <Clock size={14} className="text-gold" />
                <span>Operating Hours: Mon - Sat 9:00 AM - 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
