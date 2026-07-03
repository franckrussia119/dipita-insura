import React, { useState, useEffect } from "react";
import { useRouter } from "../context/RouterContext";
import { 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ChevronDown, 
  Menu, 
  X 
} from "lucide-react";

export default function Navbar() {
  const { currentPath, navigateTo } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services", hasDropdown: true },
    { label: "Our Team", path: "/team" },
    { label: "Blog", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  const servicesList = [
    { name: "Health Insurance", path: "/services/health" },
    { name: "Life Insurance", path: "/services/life" },
    { name: "Auto Insurance", path: "/services/auto" },
    { name: "Business Insurance", path: "/services/business" },
    { name: "Education Insurance", path: "/services/education" },
  ];

  const handleNavClick = (path: string) => {
    navigateTo(path);
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="w-full z-50">
      {/* Top Bar */}
      <div className="bg-navy text-white text-[12px] h-10 px-4 md:px-8 flex justify-between items-center border-b border-white/10 gap-2 select-none shrink-0">
        <div className="flex flex-wrap items-center justify-center gap-6">
          <a href="tel:+79502294642" className="flex items-center gap-2 hover:text-gold transition-colors font-medium">
            <Phone size={13} className="text-gold" />
            <span>+7 950 229-46-42</span>
          </a>
          <span className="hidden sm:inline text-white/10">|</span>
          <a href="mailto:info@dipita-insura.com" className="flex items-center gap-2 hover:text-gold transition-colors font-medium">
            <Mail size={13} className="text-gold" />
            <span>info@dipita-insura.com</span>
          </a>
          <span className="hidden lg:inline text-white/10">|</span>
          <div className="hidden lg:flex items-center gap-2 text-white/70 font-medium">
            <Clock size={13} className="text-gold" />
            <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-gold transition-colors" aria-label="Facebook">
              <Facebook size={13} />
            </a>
            <a href="#" className="hover:text-gold transition-colors" aria-label="Twitter">
              <Twitter size={13} />
            </a>
            <a href="#" className="hover:text-gold transition-colors" aria-label="Instagram">
              <Instagram size={13} />
            </a>
            <a href="#" className="hover:text-gold transition-colors" aria-label="LinkedIn">
              <Linkedin size={13} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full bg-white transition-all duration-300 ${
        isSticky 
          ? "fixed top-0 left-0 right-0 shadow-md border-b border-gray-100 h-[72px] flex items-center animate-fade-in" 
          : "relative h-[72px] flex items-center border-b border-gray-100"
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center w-full">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick("/")}
            className="flex items-center gap-2 text-left focus:outline-none cursor-pointer group"
          >
            <span className="text-3xl" role="img" aria-label="Tree Placeholder">🌳</span>
            <span className="font-display font-black text-2xl text-navy tracking-tighter transition-opacity group-hover:opacity-90">
              DIPITA <span className="text-gold">INSURA</span>
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-navy">
            {menuItems.map((item) => {
              const isActive = currentPath === item.path || (item.hasDropdown && currentPath.startsWith("/services"));
              
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.label}
                    className="relative group py-2"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button 
                      onClick={() => handleNavClick("/services")}
                      className={`flex items-center gap-1 font-sans font-semibold text-[14px] cursor-pointer transition-colors ${
                        isActive ? "text-gold" : "text-navy hover:text-gold"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute left-0 mt-2 w-56 bg-white border border-gray-100 rounded-lg shadow-xl py-2 z-50 transition-all duration-300 transform origin-top-left ${
                      dropdownOpen 
                        ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" 
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }`}>
                      {servicesList.map((srv) => (
                        <button
                           key={srv.name}
                           onClick={() => handleNavClick(srv.path)}
                           className={`w-full text-left px-4 py-2 text-xs font-semibold font-sans cursor-pointer transition-colors hover:bg-light-gray ${
                             currentPath === srv.path ? "text-gold bg-light-gray" : "text-navy hover:text-gold"
                           }`}
                        >
                          {srv.name}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`font-sans font-semibold text-[14px] cursor-pointer transition-colors relative py-1 ${
                    isActive ? "text-gold" : "text-navy hover:text-gold"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Get a Quote Action Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("/quote")}
              className="bg-navy text-white px-6 py-2.5 rounded-full font-bold text-[14px] hover:bg-[#1a1a2e] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy hover:text-gold focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen border-t border-gray-100 py-4" : "max-h-0 py-0"
        } bg-white px-4`}>
          <div className="flex flex-col gap-3">
            {menuItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div key={item.label} className="border-b border-gray-50 pb-2">
                    <button 
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full flex justify-between items-center text-left font-sans font-semibold text-sm text-navy py-1"
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={16} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="mt-2 pl-4 flex flex-col gap-2">
                        {servicesList.map((srv) => (
                          <button
                            key={srv.name}
                            onClick={() => handleNavClick(srv.path)}
                            className={`text-left text-xs font-medium py-1.5 transition-colors ${
                              currentPath === srv.path ? "text-gold" : "text-navy/70 hover:text-gold"
                            }`}
                          >
                            {srv.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.path)}
                  className={`text-left font-sans font-semibold text-sm py-2 border-b border-gray-50 last:border-0 ${
                    currentPath === item.path ? "text-gold" : "text-navy hover:text-gold"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick("/quote")}
              className="w-full bg-navy text-white text-center font-sans font-semibold text-sm py-3 rounded-xl mt-2 hover:bg-gold hover:text-navy transition-colors"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
