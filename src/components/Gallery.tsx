import React, { useState } from 'react';
import { galleryItems, categories } from '../data/gallery';
import { CategoryFilter } from '../types';
import { Search, Filter } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('birthday');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = galleryItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-coral-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-coral-100 px-4 py-2 rounded-full mb-6">
            <Filter className="h-4 w-4 text-coral-600" />
            <span className="text-coral-700 font-medium">Our Cakes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Featured{' '}
            <span className="text-coral-500">Creations</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explore our collection of handcrafted cakes and pastries, each one uniquely designed 
            to make your special occasions unforgettable.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search our creations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-coral-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id as CategoryFilter)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                activeFilter === category.id
                  ? 'bg-coral-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-coral-50 border border-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="inline-block bg-coral-500 px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {item.occasion}
                  </span>
                  <p className="text-sm leading-relaxed">{item.description}</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                    {categories.find(cat => cat.id === item.category)?.label}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-coral-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-3xl p-12 shadow-lg max-w-md mx-auto">
              <div className="text-6xl mb-4">🍰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">No items found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchTerm('');
                }}
                className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-200"
              >
                Show All Items
              </button>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-12 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to Create Something Special?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Let us bring your vision to life with a custom cake designed just for your occasion.
            </p>
            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Start Your Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};