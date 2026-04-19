import { MapPin, Mail, Phone, Clock, Facebook, Youtube, Instagram, ArrowUp } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Choose Us', href: '#why-us' },
  { name: 'Doctor', href: '#doctor' },
  { name: 'FAQ', href: '#faq' },
];

const services = [
  'Dental Fillings',
  'Root Canal Treatment',
  'Teeth Extraction',
  'Braces & Aligners',
  'Dental Implants',
  'Teeth Whitening',
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[var(--dental-dark)] text-white">
      {/* Main Footer */}
      <div className="section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Dr. <span className="text-[var(--dental-sky)]">Samee</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Dr. Samee's Dental Clinic strives to open up a world of excellence in delivering 
              total dental care. With over 10 years of experience, we provide the best dental 
              services with advanced technology and compassionate care.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--dental-blue)] transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--dental-blue)] transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--dental-blue)] transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-gray-300 text-sm hover:text-[var(--dental-sky)] transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--dental-blue)] rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollToSection('#services'); }}
                    className="text-gray-300 text-sm hover:text-[var(--dental-sky)] transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[var(--dental-blue)] rounded-full" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--dental-blue)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  123 Dental Street, Medical City, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--dental-blue)] flex-shrink-0" />
                <a
                  href="mailto:drsamee@dentalclinic.com"
                  className="text-gray-300 text-sm hover:text-[var(--dental-sky)] transition-colors"
                >
                  drsamee@dentalclinic.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[var(--dental-blue)] flex-shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="text-gray-300 text-sm hover:text-[var(--dental-sky)] transition-colors"
                >
                  +91 12345 67890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[var(--dental-blue)] flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Mon to Sun / 10:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              Dr. Samee Dental Clinic &copy; Copyright 2025. All Rights Reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-[var(--dental-blue)] flex items-center justify-center hover:bg-[var(--dental-light)] transition-colors duration-300"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
