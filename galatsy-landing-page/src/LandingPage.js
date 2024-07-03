import React from 'react';
import galatsyForStylists from './assets/galatsy-for-stylists.jpeg';
import galatsyForCustomers from './assets/img-customer-woman-salon.jpeg';
import profileImage from './assets/profile-message.jpg';

import { PricingSection } from './sections/PricingSection'; // Import the new PricingSection component
import { CTASection } from './sections/CTASection'; // Import the new PricingSection component
import HeroSection from './sections/HeroSection'; // Import the new HeroSection component
import FeaturesSection from './sections/FeaturesSection';
// import FeaturesSectionForBusiness from './sections/FeaturesSectionForBusiness';
import ForStylistsSection from './sections/ForStylistsSection';
import ForClientsSection from './sections/ForClientsSection';
import Header from './sections/Header';
import Footer from './sections/Footer';

export default function LandingPage() {
  return (

    <div className="font-sans text-gray-100 bg-black min-h-screen">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection profileImage={profileImage} />

      {/* Features Section */}
      <FeaturesSection />


      {/* For Stylists Section */}
      <ForStylistsSection galatsyForStylists={galatsyForStylists}/>

      {/* Features Section */}
      {/* <FeaturesSectionForBusiness /> */}

      {/* For Clients Section */}
      <ForClientsSection galatsyForCustomers={galatsyForCustomers}/>


      {/* Pricing Section */}
      <PricingSection />


      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />


    </div>
  );
}

