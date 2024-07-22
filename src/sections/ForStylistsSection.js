import React from 'react';
import { Scissors, Users, Star } from 'lucide-react';

const ForStylistsSection = ({ galatsyForStylists }) => {
  return (
    <section id="for-stylists" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">For Hair Stylists</h3>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <h4 className="text-2xl font-semibold mb-4">Boost Your Business with Galatsy</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Scissors className="text-purple-400 mr-2" />
                Improve client communication and satisfaction
              </li>
              <li className="flex items-center">
                <Users className="text-purple-400 mr-2" />
                Expand your client base with in-app promotions
              </li>
              <li className="flex items-center">
                <Star className="text-purple-400 mr-2" />
                Showcase your best work to attract new clients
              </li>
            </ul>
            <button 
              type="button" 
              className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-md font-semibold text-lg inline-flex items-center hover:bg-purple-500 transition duration-300"
            >
              Join Galatsy Network
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img 
              src={galatsyForStylists} 
              alt="Stylist using Galatsy" 
              className="rounded-lg shadow-2xl w-full" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForStylistsSection;