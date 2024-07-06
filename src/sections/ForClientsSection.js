import React from 'react';
import { Camera, Users, Star } from 'lucide-react';

const ForClientsSection = ({ galatsyForCustomers }) => {
  return (
    <section id="for-clients" className="py-12 sm:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">For Style-Conscious Clients</h3>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 order-1 lg:order-1">
            <img 
              src={galatsyForCustomers} 
              alt="Client using Galatsy" 
              className="rounded-lg shadow-2xl w-full" 
            />
          </div>
          <div className="w-full lg:w-1/2 pl-0 lg:pl-12 order-2 lg:order-2">
            <h4 className="text-xl sm:text-2xl font-semibold mb-4 text-white">Express Your Style with Confidence</h4>
            <ul className="space-y-4 text-white">
              <FeatureItem icon={Camera}>
                Share inspiration from TikTok and Instagram
              </FeatureItem>
              <FeatureItem icon={Users}>
                Connect with top stylists in your area
              </FeatureItem>
              <FeatureItem icon={Star}>
                Rate and review your experiences
              </FeatureItem>
            </ul>
            <button 
              type="button"
              className="mt-6 sm:mt-8 bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-semibold text-base sm:text-lg inline-flex items-center hover:bg-purple-500 transition duration-300"
            >
              Download Galatsy
            </button>
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

export default ForClientsSection;
