import React from 'react';
import { Calendar, Heart, Baby, Gift, Briefcase, Star } from 'lucide-react';

const occasions = [
  {
    icon: <Calendar className="h-8 w-8" />,
    title: 'Birthdays',
    description: 'Make every birthday unforgettable with our custom birthday cakes',
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Character themes', 'Age milestones', 'Photo cakes']
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Weddings',
    description: 'Elegant wedding cakes that make your special day even sweeter',
    image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Multi-tier designs', 'Floral decorations', 'Custom toppers']
  },
  {
    icon: <Gift className="h-8 w-8" />,
    title: 'Anniversaries',
    description: 'Celebrate your love story with romantic anniversary cakes',
    image: 'https://images.pexels.com/photos/1998635/pexels-photo-1998635.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Elegant designs', 'Golden accents', 'Personalized messages']
  },
  {
    icon: <Baby className="h-8 w-8" />,
    title: 'Baptisms & Debuts',
    description: 'Special cakes for life\'s important milestones and celebrations',
    image: 'https://images.pexels.com/photos/1729808/pexels-photo-1729808.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Religious themes', 'Elegant presentations', 'Custom colors']
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: 'Corporate Events',
    description: 'Professional cakes and treats for business celebrations',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Company branding', 'Bulk orders', 'Professional presentation']
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: 'Special Celebrations',
    description: 'Unique cakes for graduations, promotions, and other achievements',
    image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=500',
    specialties: ['Achievement themes', 'Custom messages', 'Celebration designs']
  }
];

export const Occasions: React.FC = () => {
  return (
    <section id="occasions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-800 mb-6">
            Perfect for Every Occasion
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-8"></div>
          <p className="text-lg text-rose-600 max-w-2xl mx-auto">
            Whatever the celebration, we create cakes and pastries that perfectly match 
            the significance of your special moments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {occasions.map((occasion, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={occasion.image}
                  alt={occasion.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 p-3 rounded-full">
                  <div className="text-rose-600">{occasion.icon}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-rose-800 mb-3">
                  {occasion.title}
                </h3>
                
                <p className="text-rose-600 mb-4 leading-relaxed">
                  {occasion.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-rose-700 mb-2">Specialties:</h4>
                  <ul className="space-y-1">
                    {occasion.specialties.map((specialty, specialtyIndex) => (
                      <li key={specialtyIndex} className="flex items-center text-sm text-rose-600">
                        <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></div>
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-rose-800 mb-4">
              Planning Something Special?
            </h3>
            <p className="text-rose-600 mb-6">
              Let us help you create the perfect cake for your unique celebration. 
              Contact us to discuss your vision and requirements.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};