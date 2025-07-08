import React from 'react';
import { Facebook, Phone, Cake, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-coral-500 p-3 rounded-full">
                <Cake className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Arel's Cake & Pastries</h3>
                <p className="text-sm text-gray-300">by Thess Cortez</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Handcrafted cakes and pastries made with love for every sweet moment. 
              Creating beautiful, delicious memories for your special occasions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100057079976676"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-coral-500 p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="tel:+639123456789"
                className="bg-gray-700 hover:bg-coral-500 p-3 rounded-full transition-all duration-200 hover:scale-110"
                aria-label="Call us"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Seasonal', href: '#seasonal' }
              ].map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-coral-400 transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Custom Cakes',
                'Wedding Cakes',
                'Birthday Cakes',
                'Seasonal Treats',
                'Special Orders'
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span>&copy; 2024 Arel's Cake & Pastries by Thess Cortez. Made with</span>
            <Heart className="h-4 w-4 text-coral-400" />
            <span>for sweet moments.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};