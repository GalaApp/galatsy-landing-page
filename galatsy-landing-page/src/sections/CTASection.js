import React from 'react';
import { DownloadIcon, InfoIcon } from 'lucide-react'; // Update icons if needed

const PrimaryButton = ({ children, ...props }) => (
  <button
    type="button"
    className="bg-purple-600 text-white px-8 py-4 rounded-md font-semibold text-xl inline-flex items-center hover:bg-purple-500 transition duration-300"
    {...props}
  >
    {children}
  </button>
);

const SecondaryButton = ({ children, ...props }) => (
  <button
    type="button"
    className="border border-purple-400 text-purple-400 px-8 py-4 rounded-md font-semibold text-xl inline-flex items-center hover:bg-purple-400 hover:text-white transition duration-300"
    {...props}
  >
    {children}
  </button>
);

export const CTASection = () => (
  <section id="ctaSection" className="py-20">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h3 className="text-4xl font-bold mb-6">Ready to Revolutionize Your Hair Game?</h3>
      <p className="text-xl mb-8 text-gray-400">
        Join thousands of satisfied clients and stylists on Galatsy
      </p>
      <div className="space-x-4">
        <PrimaryButton>
          <DownloadIcon className="mr-2" />
          Get Galatsy Now
        </PrimaryButton>
        <SecondaryButton>
          <InfoIcon className="mr-2" />
          Learn More
        </SecondaryButton>
      </div>
    </div>
  </section>
);