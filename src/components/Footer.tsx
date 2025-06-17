
import { Instagram, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-amber-800 to-orange-800 text-white py-8">
      <div className="container-responsive">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="mb-4">
              <img 
                src="/lovable-uploads/75201a2e-d2a9-43b5-bfa7-7ac8d26e1f94.png" 
                alt="Chai Chowk Logo" 
                className="h-10 w-auto mx-auto md:mx-0 rounded-md filter brightness-110"
              />
            </div>
            <p className="text-orange-100 leading-relaxed mb-4 text-sm">
              Experience the authentic taste of traditional chai and delicious snacks 
              in the heart of Vapi, Gujarat.
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              <a 
                href="https://www.instagram.com/chaichowkofficial?igsh=NDZpeXptbWdmZDN3&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="tel:+919909101647"
                className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-lg mb-4 text-orange-100">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Menu', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => scrollToSection(`#${item.toLowerCase()}`)} 
                    className="text-orange-200 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <a 
                  href="https://zomato.onelink.me/xqzv/gz09m36a" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-200 hover:text-white transition-colors text-sm"
                >
                  Order on Zomato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-lg mb-4 text-orange-100">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <MapPin className="w-4 h-4 text-orange-300 flex-shrink-0" />
                <span className="text-orange-200 text-xs">
                  Fortune Square, Chala, Vapi
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <Phone className="w-4 h-4 text-orange-300 flex-shrink-0" />
                <a href="tel:+919909101647" className="text-orange-200 text-xs hover:text-white transition-colors">
                  +91 99091 01647
                </a>
              </div>
              <p className="text-orange-200 text-xs">
                Every Day: 6:30 AM – 10:30 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-6 pt-4 text-center">
          <p className="text-orange-300 text-xs">
            © 2024 Chai Chowk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
