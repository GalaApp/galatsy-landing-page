import React from 'react';
import { Camera, BrainCircuit, CircleDollarSign, TrendingUp, BarChart3, Megaphone } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-purple-400/30 hover:-translate-y-1">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2 text-purple-300">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const customerFeatures = [
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

  const businessFeatures = [
    {
      icon: <TrendingUp className="text-purple-400" size={32} />,
      title: "Upscale Customer Experience",
      description: "Enhance your service quality with AI-powered tools and visual communication features."
    },
    {
      icon: <BarChart3 className="text-purple-400" size={32} />,
      title: "Performance Tracking",
      description: "Monitor your business growth with intuitive dashboards and AI-powered economic analysis tools."
    },
    {
      icon: <Megaphone className="text-purple-400" size={32} />,
      title: "AI-Powered Marketing",
      description: "Expand your reach and attract more clients using intelligent marketing strategies and tools."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center text-purple-300">Why Choose Galatsy?</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center text-purple-200">For Customers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {customerFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-purple-200">For Businesses</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {businessFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;