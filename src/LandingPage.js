import React from 'react';
import galatsyForStylists from './assets/galatsy-for-stylists.jpeg';
import galatsyForCustomers from './assets/img-customer-woman-salon.jpeg';
import profileImage from './assets/profile-message.jpg';

import { PricingSection } from './sections/PricingSection';
import { CTASection } from './sections/CTASection';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import ForStylistsSection from './sections/ForStylistsSection';
import ForClientsSection from './sections/ForClientsSection';
import Header from './sections/Header';
import Footer from './sections/Footer';

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-100 bg-black min-h-screen">
      <Header />
      <HeroSection profileImage={profileImage} />
      <FeaturesSection />
      <ForStylistsSection galatsyForStylists={galatsyForStylists}/>
      <ForClientsSection galatsyForCustomers={galatsyForCustomers}/>
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
