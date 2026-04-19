import { Phone, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-[var(--dental-dark)] text-white py-2">
      <div className="section-padding">
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm">
          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[var(--dental-sky)] transition-colors duration-300"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[var(--dental-sky)] transition-colors duration-300"
            >
              <Youtube size={18} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[var(--dental-sky)] transition-colors duration-300"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Emergency Helpline */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[var(--dental-sky)] hidden sm:inline">Emergency Helpline:</span>
              <a 
                href="tel:+911234567890" 
                className="flex items-center gap-1.5 hover:text-[var(--dental-sky)] transition-colors duration-300 font-medium"
              >
                <Phone size={16} />
                <span>+91 12345 67890</span>
              </a>
            </div>
            <div className="hidden md:flex items-center gap-2 text-[var(--dental-sky)]">
              <MapPin size={16} />
              <span>123 Dental Street, Medical City</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
