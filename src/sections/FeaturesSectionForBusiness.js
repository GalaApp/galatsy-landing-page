import React from 'react';
import { Camera, BrainCircuit, CircleDollarSign } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesSectionForBusiness = () => {
  const features = [
    {
      icon: <Camera className="text-purple-400" size={32} />,
      title: "Visual Communication",
      description: "Share templates of your desired hairstyle directly with your stylist, ensuring perfect understanding."
    },
    {
      icon: <BrainCircuit className="text-purple-400" size={32} />,
      title: "AI-Powered Suggestions",
      description: "Get personalized style recommendations based on your preferences and face shape."
    },
    {
      icon: <CircleDollarSign className="text-purple-400" size={32} />,
      title: "Market Your Hair Templates",
      description: "Sell your unique hair templates to top stylists eager to showcase their creativity to a wider audience."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Why Choose Galatsy?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSectionForBusiness;