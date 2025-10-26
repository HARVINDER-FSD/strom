import { Mail, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Strategy & Process Building',
      'Training & Development',
      'Operations Management',
      'Recruitment Solutions',
      'Marketing Management',
    ],
    company: ['About Us', 'Case Studies', 'Testimonials', 'Contact Us'],
  };

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/shaishav-kayastha-952ba818?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
    { icon: Instagram, url: 'https://www.instagram.com/shaishav.kayastha?igsh=NXE2aHN4ZngybDRh', label: 'Instagram' },
    { icon: Youtube, url: 'https://www.youtube.com/@stormorganisers7949/videos', label: 'YouTube' },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img
                src="/Storm.png"
                alt="STORM - Organising the UnOrganised"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Empowering businesses with clarity, strategy, and growth. We
              transform vision into action.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:storm.organisers@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">storm.organisers@gmail.com</span>
              </a>
              <a
                href="tel:+919099921767"
                className="flex items-center gap-2 text-slate-400 hover:text-teal-400 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9099921767</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const element = document.querySelector('#services');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      const sectionId =
                        link === 'About Us'
                          ? '#about'
                          : link === 'Case Studies'
                            ? '#case-studies'
                            : link === 'Testimonials'
                              ? '#testimonials'
                              : '#contact';
                      const element = document.querySelector(sectionId);
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-4">
              <p className="text-sm font-semibold mb-2">
                Ready to Transform Your Business?
              </p>
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-all duration-300 w-full"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} All rights reserved. Organising the Un-Organised.
            </p>
            {/* <div className="flex gap-6">
              <button className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-slate-400 hover:text-blue-400 text-sm transition-colors duration-300">
                Terms of Service
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
