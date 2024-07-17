import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center p-4 overflow-x-hidden font-sans">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-4xl">
        <header className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-center" style={{ fontFamily: 'Mont-ExtraLightDEMO, sans-serif' }}>galatsy</h1>
        </header>
        
        <main>
          <section className="mb-8 sm:mb-12 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Elevate Your Professional Presence</h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-300">Be Productive. Be Professional. Differentiate yourself from the crowd.</p>
          </section>
          
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Personalize Your Service</h3>
              <p className="text-sm sm:text-base font-medium text-gray-300">Tailor your offerings to meet your clients' unique needs and stand out in your industry.</p>
            </div>
            <div className="bg-gray-900 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Showcase Your Work</h3>
              <p className="text-sm sm:text-base font-medium text-gray-300">Create stunning portfolios and share your achievements with potential clients effortlessly.</p>
            </div>
          </section>
          
          <section className="bg-gray-900 p-4 sm:p-6 rounded-lg mb-8 sm:mb-12">
            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Collaborate with Your Clients</h3>
            <p className="text-sm sm:text-base font-medium text-gray-300">Create a workspace to collaborate seamlessly with your customers. Share ideas, and feedback in real-time.</p>
          </section>
          
          {/* <section className="mb-8 sm:mb-12">
            <div className="bg-gray-800 p-2 sm:p-4 rounded-lg flex justify-center items-center">
              <img src="/api/placeholder/800/450" alt="Galatsy App Screens" className="max-w-full h-auto rounded" />
            </div>
          </section> */}
          
          <section className="text-center mb-8">
            <button className="bg-white text-black py-2 px-4 sm:py-3 sm:px-6 rounded-full text-base sm:text-lg font-bold flex items-center justify-center mx-auto hover:bg-gray-200 transition-colors duration-300 mb-4">
              Join galatsy
              <ChevronRight className="ml-2" size={20} />
            </button>
            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4">
              <button className="bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-bold hover:bg-gray-700">
                Get it on Google Play
              </button>
              <button className="bg-gray-800 text-white py-2 px-4 rounded-lg text-sm font-bold hover:bg-gray-700">
                Download on App Store
              </button>
            </div>
          </section>
        </main>
        
        <footer className="mt-8 sm:mt-12 text-center text-gray-400">
          <p className="text-sm font-medium">&copy; 2024 galatsy. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}



// import React from 'react';
// import galatsyForStylists from './assets/galatsy-for-stylists.jpeg';
// import galatsyForCustomers from './assets/img-customer-woman-salon.jpeg';
// import profileImage from './assets/profile-message.jpg';

// import { PricingSection } from './sections/PricingSection';
// import { CTASection } from './sections/CTASection';
// import HeroSection from './sections/HeroSection';
// import FeaturesSection from './sections/FeaturesSection';
// import ForStylistsSection from './sections/ForStylistsSection';
// import ForClientsSection from './sections/ForClientsSection';
// import Header from './sections/Header';
// import Footer from './sections/Footer';

// export default function LandingPage() {
//   return (
//     <div className="font-sans text-gray-100 bg-black min-h-screen">
//       <Header />
//       <HeroSection profileImage={profileImage} />
//       <FeaturesSection />
//       <ForStylistsSection galatsyForStylists={galatsyForStylists}/>
//       <ForClientsSection galatsyForCustomers={galatsyForCustomers}/>
//       <PricingSection />
//       <CTASection />
//       <Footer />
//     </div>
//   );
// }
