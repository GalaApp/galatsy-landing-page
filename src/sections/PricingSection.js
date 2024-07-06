import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingTier = ({ name, price, frequency, features, buttonText, highlighted = false }) => (
  <div className={`bg-gray-800 p-6 sm:p-8 rounded-lg ${highlighted ? 'border-2 border-purple-500' : ''}`}>
    <h4 className="text-xl sm:text-2xl font-bold mb-4">{name}</h4>
    <p className="text-3xl sm:text-4xl font-bold mb-6">
      {name.toLowerCase() === 'starter' ? (
        <>
          <span>{price}</span>
          <span className="text-lg sm:text-xl font-normal text-gray-400"></span>
        </>
      ) : (
        <>
          <span>${price}</span>
          <span className="text-lg sm:text-xl font-normal text-gray-400">/{frequency}</span>
        </>
      )}
    </p>
    <ul className="mb-8 space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <Check className="text-purple-400 mr-2 mt-1 flex-shrink-0" size={18} />
          <span className="text-sm sm:text-base">{feature}</span>
        </li>
      ))}
    </ul>
    <button className={`w-full py-2 sm:py-3 rounded-md font-semibold text-base sm:text-lg transition duration-300 ${
      highlighted ? 'bg-purple-600 text-white hover:bg-purple-500' : 'bg-gray-700 text-white hover:bg-gray-600'
    }`}>
      {buttonText}
    </button>
  </div>
);

export const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const businessPlans = [
    {
      name: "Starter",
      price: "Free",
      frequency: billingCycle === 'monthly' ? "" : "",
      features: [
        "Basic customer experience tools",
        "Simple performance tracking dashboard",
        "Limited AI-powered marketing features",
        "Up to 100 customer profiles"
      ],
      buttonText: "Get Started"
    },
    {
      name: "Professional",
      price: billingCycle === 'monthly' ? "35" : "350",
      frequency: billingCycle === 'monthly' ? "month" : "year",
      features: [
        "Advanced customer experience enhancement",
        "Comprehensive performance tracking",
        "Full AI-powered marketing suite",
        "Customer retention tools",
        "Up to 500 customer profiles"
      ],
      buttonText: "Go Professional",
      highlighted: true
    },
    {
      name: "Concierge",
      price: billingCycle === 'monthly' ? "50" : "500",
      frequency: billingCycle === 'monthly' ? "month" : "year",
      features: [
        "All Professional features",
        "Custom AI solutions",
        "Dedicated account manager",
        "Advanced analytics and forecasting",
        "Unlimited customer profiles"
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-12 sm:py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-purple-300">Business Pricing Plans</h3>
        <p className="text-lg sm:text-xl mb-8 sm:mb-12 text-center text-gray-400">Choose the perfect plan to elevate your salon business</p>

        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 p-1 rounded-full">
            <button
              className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base ${billingCycle === 'monthly' ? 'bg-purple-600 text-white' : 'text-gray-400'}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-3 sm:px-4 py-2 rounded-full text-sm sm:text-base ${billingCycle === 'yearly' ? 'bg-purple-600 text-white' : 'text-gray-400'}`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly (Save 17%)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {businessPlans.map((plan, index) => (
            <PricingTier
              key={index}
              name={plan.name}
              price={plan.price}
              frequency={plan.frequency}
              features={plan.features}
              buttonText={plan.buttonText}
              highlighted={plan.highlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;