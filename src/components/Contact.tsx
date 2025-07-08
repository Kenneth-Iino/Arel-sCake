import React, { useState } from 'react';
import { Facebook, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    occasion: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', occasion: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-coral-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-coral-100 px-4 py-2 rounded-full mb-6">
            <MessageCircle className="h-4 w-4 text-coral-600" />
            <span className="text-coral-700 font-medium">Get in Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Let's Create Something{' '}
            <span className="text-coral-500">Sweet</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to order your perfect cake or pastry? Contact us to discuss your requirements 
            and let us create something special for your occasion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-coral-50 transition-colors duration-200">
                  <div className="bg-coral-100 p-3 rounded-full">
                    <Facebook className="h-6 w-6 text-coral-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Facebook Page</h4>
                    <a 
                      href="https://facebook.com/arelscakepastries" 
                      className="text-coral-600 hover:text-coral-700 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Arel's Cake and Pastries by Thess Cortez
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-coral-50 transition-colors duration-200">
                  <div className="bg-coral-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-coral-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <a 
                      href="tel:+639123456789" 
                      className="text-coral-600 hover:text-coral-700 hover:underline"
                    >
                      +63 912 345 6789
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="bg-coral-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-coral-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Service Area</h4>
                    <p className="text-gray-600">Available for pickup and local delivery</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="bg-coral-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-coral-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Order Notice</h4>
                    <p className="text-gray-600">Please order at least 2-3 days in advance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Process */}
            <div className="bg-coral-500 text-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Order Process</h3>
              <div className="space-y-4">
                {[
                  'Contact us via Facebook or phone to discuss your requirements',
                  'Share your design preferences and occasion details',
                  'Receive quote and confirm your order',
                  'Pickup or delivery on your scheduled date'
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-white text-coral-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-2">
                  Occasion/Inquiry Type
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select an occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="wedding">Wedding</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="baptism">Baptism/Debut</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="seasonal">Seasonal Order</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all duration-200 resize-vertical"
                  placeholder="Please describe your requirements, preferred date, number of servings, design preferences, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-coral-500 hover:bg-coral-600 text-white py-4 px-6 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};