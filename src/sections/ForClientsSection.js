import React from 'react';
import { Camera, Users, Star } from 'lucide-react';

const ForClientsSection = ({ galatsyForCustomers }) => {
  return (
    <section id="for-clients" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center text-white">For Style-Conscious Clients</h3>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Image on the left for larger screens, on top for smaller screens */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:order-1">
            <img 
              src={galatsyForCustomers} 
              alt="Client using Galatsy" 
              className="rounded-lg shadow-2xl w-full" 
            />
          </div>
          <div className="w-full md:w-1/2 pl-0 md:pl-12 md:order-2">
            <h4 className="text-2xl font-semibold mb-4 text-white">Express Your Style with Confidence</h4>
            <ul className="space-y-4 text-white">
              <li className="flex items-center">
                <Camera className="text-purple-400 mr-2" />
                Share inspiration from TikTok and Instagram
              </li>
              <li className="flex items-center">
                <Users className="text-purple-400 mr-2" />
                Connect with top stylists in your area
              </li>
              <li className="flex items-center">
                <Star className="text-purple-400 mr-2" />
                Rate and review your experiences
              </li>
            </ul>
            <button 
              type="button"
              className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-md font-semibold text-lg inline-flex items-center hover:bg-purple-500 transition duration-300"
            >
              Download Galatsy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForClientsSection;
