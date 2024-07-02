import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingTier = ({ name, price, features, buttonText, highlighted = false }) => (
  <div className={`bg-gray-800 p-8 rounded-lg ${highlighted ? 'border-2 border-purple-500' : ''}`}>
    <h4 className="text-2xl font-bold mb-4">{name}</h4>
    <p className="text-4xl font-bold mb-6">${price}<span className="text-xl font-normal text-gray-400">/month</span></p>
    <ul className="mb-8 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Check className="text-purple-400 mr-2" size={20} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-3 rounded-md font-semibold text-lg transition duration-300 ${
      highlighted ? 'bg-purple-600 text-white hover:bg-purple-500' : 'bg-gray-700 text-white hover:bg-gray-600'
    }`}>
      {buttonText}
    </button>
  </div>
);

export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold mb-4 text-center">Pricing Plans</h3>
        <p className="text-xl mb-12 text-center text-gray-400">Choose the perfect plan for your styling needs</p>
        
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 p-1 rounded-full">
            <button 
              className={`px-4 py-2 rounded-full ${billingCycle === 'monthly' ? 'bg-purple-600 text-white' : 'text-gray-400'}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${billingCycle === 'yearly' ? 'bg-purple-600 text-white' : 'text-gray-400'}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingTier
            name="Essentials"
            price="0"
            features={[
              "Basic style recommendations",
              "Limited image sharing",
              "Access to trending styles"
            ]}
            buttonText="Get Started"
          />
          <PricingTier
            name="Style Pro"
            price={billingCycle === 'monthly' ? "35" : "350"}
            features={[
              "Advanced AI style suggestions",
              "Unlimited image sharing",
              "Priority booking with stylists",
              "Exclusive style tutorials"
            ]}
            buttonText="Upgrade to Pro"
            highlighted={true}
          />
          <PricingTier
            name="Concierge"
            price={billingCycle === 'monthly' ? "50" : "500"}
            features={[
              "Personal style consultant",
              "VIP access to top stylists",
              "Custom style portfolio",
              "Trend forecasting reports"
            ]}
            buttonText="Go Concierge"
          />
        </div>
      </div>
    </section>
  );
};