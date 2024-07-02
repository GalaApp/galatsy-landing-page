import React from 'react';
import { Download, Scissors, Users, BrainCircuit, Camera, TrendingUp, Star, ChevronDown, Mail } from 'lucide-react';
import galatsyForStylists from './assets/galatsy-for-stylists.jpeg';
import galatsyForCustomers from './assets/img-customer-woman-salon.jpeg';
import profileImage from './assets/profile-message.jpg';
import { PricingSection } from './sections/PricingSection'; // Import the new PricingSection component
import { ReactComponent as GalatsyLogo } from './galatsy-logo.svg';

export default function LandingPage() {
  return (
    <div className="font-sans text-gray-100 bg-black min-h-screen">
      {/* Header */}
      <header className="py-4 px-6 fixed w-full bg-black bg-opacity-90 z-50">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          {/* <h1 className="text-2xl font-bold">GALATSY</h1> */}
          <GalatsyLogo width="150" height="45" />
          <div className="space-x-6">
            <a href="#features" className="hover:text-purple-400">Features</a>
            <a href="#for-stylists" className="hover:text-purple-400">For Stylists</a>
            <a href="#for-clients" className="hover:text-purple-400">For Clients</a>
            <a href="#pricing" className="hover:text-purple-400">Pricing</a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-purple-500 transition duration-300">Get Started</button>
          </div>
        </nav>
      </header>


      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="w-1/2 pr-12">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Your perfect style, communicated effortlessly.
            </h2>
            <p className="text-xl mb-8 text-gray-400">
              Share your vision, eliminate miscommunication, and get the exact look you want.
            </p>
            <p className="text-3xl font-semibold mb-4">
              <span className="text-purple-400">Transform your salon experience</span>
              <br />
              with just a tap.
            </p>
            <div className="space-x-4">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-md font-semibold text-lg inline-flex items-center hover:bg-purple-500 transition duration-300">
                <Download className="mr-2" />
                Download Galatsy
              </button>
              {/* <button className="border border-purple-400 text-purple-400 px-6 py-3 rounded-md font-semibold text-lg inline-flex items-center hover:bg-purple-400 hover:text-white transition duration-300">
                Request Demo
              </button> */}
            </div>
          </div>

          <div className="w-1/2 p-20">
            <div className="bg-gray-900 rounded-lg p-8 shadow-2xl">
              <div className="flex items-center mb-4">
                {/* <img src="/api/placeholder/40/40" alt="User" className="rounded-full mr-3" /> */}
                <img src={profileImage} alt="User" className="rounded-full w-10 h-10 mr-3" />
                <div>
                  <p className="font-semibold">Alex</p>
                  <p className="text-sm text-gray-400">Client</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-900 bg-opacity-50 p-3 rounded-lg">
                  <p>Hey! I found this amazing hairstyle on TikTok. Can we try something similar? 💇‍♀️</p>
                  <div className="bg-gray-800 mt-2 p-2 rounded">
                    <p className="text-sm">TrendyWave_2024.jpg</p>
                    <p className="text-xs text-gray-400">Image</p>
                  </div>
                </div>
                <div className="bg-blue-900 bg-opacity-50 p-3 rounded-lg">
                  <p>Absolutely! I love it. Let's customize it to suit your face shape. How about we add some subtle highlights? ✨</p>
                </div>
                <div className="bg-purple-900 bg-opacity-50 p-3 rounded-lg">
                  <p>Sounds perfect! Can't wait for my appointment tomorrow! 🌟</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-gray-400">To: June</p>
                <div className="flex space-x-2">
                  <button className="p-1 rounded-full bg-gray-800 hover:bg-gray-700">
                    <Mail size={16} />
                  </button>
                  <button className="p-1 rounded-full bg-gray-800 hover:bg-gray-700">
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </section>


      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">Why Choose Galatsy?</h3>
          <div className="grid grid-cols-3 gap-8">
            <FeatureCard
              icon={<Camera className="text-purple-400" size={32} />}
              title="Visual Communication"
              description="Share images of your desired hairstyle directly with your stylist, ensuring perfect understanding."
            />
            <FeatureCard
              icon={<BrainCircuit className="text-purple-400" size={32} />}
              title="AI-Powered Suggestions"
              description="Get personalized style recommendations based on your preferences and face shape."
            />
            <FeatureCard
              icon={<TrendingUp className="text-purple-400" size={32} />}
              title="Trend Tracking"
              description="Stay up-to-date with the latest hairstyle trends from social media and fashion icons."
            />
          </div>
        </div>
      </section>

      {/* For Stylists Section */}
      <section id="for-stylists" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">For Hair Stylists</h3>
          <div className="flex items-center justify-between">
            <div className="w-1/2 pr-12">
              <h4 className="text-2xl font-semibold mb-4">Boost Your Business with Galatsy</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Scissors className="text-purple-400 mr-2" />
                  Improve client communication and satisfaction
                </li>
                <li className="flex items-center">
                  <Users className="text-purple-400 mr-2" />
                  Expand your client base with in-app promotions
                </li>
                <li className="flex items-center">
                  <Star className="text-purple-400 mr-2" />
                  Showcase your best work to attract new clients
                </li>
              </ul>
              <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-md font-semibold text-lg inline-flex items-center hover:bg-purple-500 transition duration-300">
                Join Galatsy Network
              </button>
            </div>
            <div className="w-1/2">
              <img src={galatsyForStylists} alt="Stylist using Galatsy" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* For Clients Section */}
      <section id="for-clients" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">For Style-Conscious Clients</h3>
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <img src={galatsyForCustomers} alt="Client using Galatsy" className="rounded-lg shadow-2xl" />
            </div>
            <div className="w-1/2 pl-12">
              <h4 className="text-2xl font-semibold mb-4">Express Your Style with Confidence</h4>
              <ul className="space-y-4">
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
              <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-md font-semibold text-lg inline-flex items-center hover:bg-purple-500 transition duration-300">
                Download Galatsy
              </button>
            </div>
          </div>
        </div>
      </section>


      <PricingSection />

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Revolutionize Your Hair Game?</h3>
          <p className="text-xl mb-8 text-gray-400">Join thousands of satisfied clients and stylists on Galatsy</p>
          <div className="space-x-4">
            <button className="bg-purple-600 text-white px-8 py-4 rounded-md font-semibold text-xl inline-flex items-center hover:bg-purple-500 transition duration-300">
              <Download className="mr-2" />
              Get Galatsy Now
            </button>
            <button className="border border-purple-400 text-purple-400 px-8 py-4 rounded-md font-semibold text-xl inline-flex items-center hover:bg-purple-400 hover:text-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p className="mb-4">&copy; 2024 Galatsy. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="hover:text-purple-400">Privacy Policy</a>
            <a href="#" className="hover:text-purple-400">Terms of Service</a>
            <a href="#" className="hover:text-purple-400">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
