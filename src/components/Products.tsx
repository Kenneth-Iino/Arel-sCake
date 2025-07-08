import React from 'react';
import { Cake, Cookie, Coffee, Sparkles } from 'lucide-react';

const productCategories = [
  {
    icon: <Cake className="h-8 w-8" />,
    title: 'Custom Cakes',
    description: 'Personalized cakes for all occasions - birthdays, weddings, anniversaries, and more',
    features: ['Made to order', 'Custom designs', 'Various sizes', 'Special dietary options']
  },
  {
    icon: <Cookie className="h-8 w-8" />,
    title: 'Pastries & Treats',
    description: 'Delicious pastries, brownies, and sweet treats perfect for any time of day',
    features: ['Fresh daily', 'Premium ingredients', 'Variety of flavors', 'Perfect for sharing']
  },
  {
    icon: <Coffee className="h-8 w-8" />,
    title: 'Tarts & Pies',
    description: 'Elegant tarts and pies with seasonal fruits and rich, creamy fillings',
    features: ['Seasonal fruits', 'Buttery pastry', 'Beautiful presentation', 'Individual or family size']
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: 'Specialty Orders',
    description: 'Unique creations for special events and corporate functions',
    features: ['Event planning', 'Bulk orders', 'Custom branding', 'Delivery available']
  }
];

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-rose-800 mb-6">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-8"></div>
          <p className="text-lg text-rose-600 max-w-2xl mx-auto">
            From custom celebration cakes to everyday sweet treats, we offer a wide variety 
            of handcrafted products to satisfy every craving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {productCategories.map((product, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-rose-100 p-4 rounded-full w-fit mb-6">
                <div className="text-rose-600">{product.icon}</div>
              </div>
              
              <h3 className="text-2xl font-serif font-bold text-rose-800 mb-4">
                {product.title}
              </h3>
              
              <p className="text-rose-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <ul className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-rose-700">
                    <div className="w-2 h-2 bg-rose-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-rose-800 mb-4">
              Made to Order
            </h3>
            <p className="text-rose-600 mb-6">
              All our products are made fresh to order. Please contact us to discuss your requirements, 
              preferred pickup date, and any special dietary considerations.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Place Your Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};