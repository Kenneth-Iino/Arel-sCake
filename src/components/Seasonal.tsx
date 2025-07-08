import React from 'react';
import { Snowflake, Heart, Flower, Sun, Calendar } from 'lucide-react';

const seasonalOffers = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: 'Valentine\'s Day',
    description: 'Romantic cakes and treats perfect for expressing your love',
    image: 'https://images.pexels.com/photos/1998635/pexels-photo-1998635.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Heart-shaped cakes', 'Red velvet specials', 'Chocolate treats', 'Romantic decorations'],
    season: 'February',
    color: 'bg-red-500'
  },
  {
    icon: <Flower className="h-8 w-8" />,
    title: 'Mother\'s Day',
    description: 'Beautiful cakes to honor and celebrate the special mothers in your life',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Floral designs', 'Elegant presentations', 'Pastel colors', 'Custom messages'],
    season: 'May',
    color: 'bg-pink-500'
  },
  {
    icon: <Sun className="h-8 w-8" />,
    title: 'Summer Specials',
    description: 'Fresh, light treats perfect for summer celebrations',
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Fresh fruit tarts', 'Light cream cakes', 'Seasonal flavors', 'Refreshing treats'],
    season: 'June - August',
    color: 'bg-yellow-500'
  },
  {
    icon: <Snowflake className="h-8 w-8" />,
    title: 'Christmas Collection',
    description: 'Festive holiday cakes and treats to make your Christmas magical',
    image: 'https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg?auto=compress&cs=tinysrgb&w=500',
    features: ['Christmas themes', 'Holiday flavors', 'Festive decorations', 'Gift packaging'],
    season: 'December',
    color: 'bg-green-500'
  }
];

export const Seasonal: React.FC = () => {
  return (
    <section id="seasonal" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-coral-100 px-4 py-2 rounded-full mb-6">
            <Calendar className="h-4 w-4 text-coral-600" />
            <span className="text-coral-700 font-medium">Seasonal Specials</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Seasonal{' '}
            <span className="text-coral-500">Delights</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrate the seasons with our limited-time offerings, featuring unique flavors 
            and designs that capture the spirit of each special time of year.
          </p>
        </div>

        {/* Seasonal Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {seasonalOffers.map((offer, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Icon */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl">
                  <div className="text-coral-600">{offer.icon}</div>
                </div>
                
                {/* Season Badge */}
                <div className={`absolute top-6 right-6 ${offer.color} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                  {offer.season}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-coral-600 transition-colors duration-200">
                  {offer.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {offer.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-gray-800">Featured Items:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {offer.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-coral-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-coral-50 to-orange-50 rounded-3xl p-12 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Pre-Order Seasonal Items
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Seasonal items are available for limited time only. Contact us early to reserve 
              your favorites and ensure availability for your special occasions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Pre-Order Now
              </button>
              <button
                onClick={() => {
                  const element = document.querySelector('#gallery');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-coral-500 text-coral-600 hover:bg-coral-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                View Gallery
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};