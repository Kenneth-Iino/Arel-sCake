import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToGallery = () => {
    const element = document.querySelector('#gallery');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-coral-50 via-white to-orange-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-coral-200 rounded-full opacity-60 animate-bounce-gentle"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-coral-300 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 right-40 w-8 h-8 bg-orange-300 rounded-full opacity-60"></div>
      
      {/* Floating Sparkles */}
      <div className="absolute top-32 right-1/3 text-coral-300 opacity-70">
        <Sparkles className="h-6 w-6 animate-pulse" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 text-orange-300 opacity-60">
        <Sparkles className="h-4 w-4 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
                Handcrafted{' '}
                <span className="text-coral-500 relative">
                  Cakes
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C50 2 100 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-coral-300"/>
                  </svg>
                </span>
                {' '}&{' '}
                <span className="text-orange-500">Pastries</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Made-to-order cakes with customized designs and handcrafted pastries 
                that celebrate life's special occasions with sweetness and style.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToGallery}
                className="group bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Browse Our Gallery</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-coral-500 text-coral-600 hover:bg-coral-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-600">1000+</div>
                <div className="text-sm text-gray-600">Facebook Followers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-600">100+</div>
                <div className="text-sm text-gray-600">Custom Designs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-coral-600">5★</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Illustration Area */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-coral-100 to-orange-100 rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Featured cake creation"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Fresh Daily</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-coral-500 rounded-full"></div>
                  <span className="text-sm font-medium text-gray-700">Custom Made</span>
                </div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-coral-200 rounded-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};