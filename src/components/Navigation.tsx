import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  isScrolled: boolean;
}

const Navigation = ({ isScrolled }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-sm bg-opacity-95'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* ✅ Logo Section */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('#home')}
              className="flex items-center space-x-2"
            >
              <img
                src="/Storm.png" // from public folder
                alt="Storm Logo"
                className="h-10 w-auto transition-transform duration-300 hover:scale-105"
              />
            </button>
          </div>

          {/* ✅ Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? 'text-slate-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-300'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* ✅ Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book a Consultation
            </button>
          </div>

          {/* ✅ Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 rounded-lg"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="block w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-4"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
