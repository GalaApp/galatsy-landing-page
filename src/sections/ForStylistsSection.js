import React from 'react';
import { Scissors, Users, Star } from 'lucide-react';

const ForStylistsSection = ({ galatsyForStylists }) => {
  return (
    <section id="for-stylists" className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">For Hair Stylists</h3>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-8 lg:mb-0">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4">Boost Your Business with Galatsy</h4>
            <ul className="space-y-4">
              <FeatureItem icon={Scissors}>
                Improve client communication and satisfaction
              </FeatureItem>
              <FeatureItem icon={Users}>
                Expand your client base with in-app promotions
              </FeatureItem>
              <FeatureItem icon={Star}>
                Showcase your best work to attract new clients
              </FeatureItem>
            </ul>
            <button 
              type="button" 
              className="mt-6 sm:mt-8 bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-base sm:text-lg inline-flex items-center hover:bg-purple-500 transition duration-300"
            >
              Join Galatsy Network
            </button>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
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

const FeatureItem = ({ icon: Icon, children }) => (
  <li className="flex items-start">
    <Icon className="text-purple-400 mr-2 mt-1 flex-shrink-0" size={20} />
    <span className="text-sm sm:text-base">{children}</span>
  </li>
);

export default ForStylistsSection;
