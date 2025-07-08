import React from 'react';
import { Heart, Award, Clock, Star } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-coral-100 px-4 py-2 rounded-full">
                <Star className="h-4 w-4 text-coral-600" />
                <span className="text-coral-700 font-medium">About Our Story</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Taking Cake Making To New{' '}
                <span className="text-coral-500">Heights</span>
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to Arel's Cake & Pastries, where every creation tells a story of passion, 
                dedication, and the sweet art of celebration. Founded by Thess Cortez, our bakery 
                has been bringing joy to families and special occasions through handcrafted cakes 
                and pastries that are as beautiful as they are delicious.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                With meticulous attention to detail and a commitment to using only the finest 
                ingredients, we create custom cakes and pastries that make your special moments 
                unforgettable.
              </p>
            </div>

            <button
              onClick={() => {
                const element = document.querySelector('#gallery');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </button>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-coral-50 to-orange-50 rounded-3xl p-8">
              <img
                src="https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Thess Cortez baking"
                className="w-full h-80 object-cover rounded-2xl mb-6"
              />
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-gray-800">Thess Cortez</h3>
                <p className="text-coral-600 font-medium">Founder</p>
                <p className="text-gray-600 italic">
                  "Enjoy the Joy of the Best Cake."
                </p>
              </div>
            </div>
            
            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="bg-coral-100 p-3 rounded-full w-fit mb-4">
                  <Heart className="h-6 w-6 text-coral-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Made with Love</h4>
                <p className="text-sm text-gray-600">Every creation is handcrafted with passion and care</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="bg-coral-100 p-3 rounded-full w-fit mb-4">
                  <Award className="h-6 w-6 text-coral-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Quality Ingredients</h4>
                <p className="text-sm text-gray-600">Only the finest ingredients make it into our creations</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="bg-coral-100 p-3 rounded-full w-fit mb-4">
                  <Clock className="h-6 w-6 text-coral-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Made to Order</h4>
                <p className="text-sm text-gray-600">Fresh, custom creations for your special occasions</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                <div className="bg-coral-100 p-3 rounded-full w-fit mb-4">
                  <Star className="h-6 w-6 text-coral-600" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Custom Designs</h4>
                <p className="text-sm text-gray-600">Unique designs tailored to your vision</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};