import React from 'react';
import { Download, Mail, ChevronDown } from 'lucide-react';

const HeroSection = ({ profileImage }) => {
  return (
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
          </div>
        </div>

        <div className="w-1/2 p-20">
          <div className="bg-gray-900 rounded-lg p-8 shadow-2xl">
            <div className="flex items-center mb-4">
              <img src={profileImage} alt="User" className="rounded-full w-10 h-10 mr-3" />
              <div>
                <p className="font-semibold">Alex</p>
                <p className="text-sm text-gray-400">Client</p>
              </div>
            </div>
            <div className="space-y-4">
              <ChatBubble 
                text="Hey! I found this amazing hairstyle on TikTok. Can we try something similar? 💇‍♀️"
                bgColor="bg-purple-900"
                attachment={{name: "TrendyWave_2024.jpg", type: "Image"}}
              />
              <ChatBubble 
                text="Absolutely! I love it. Let's customize it to suit your face shape. How about we add some subtle highlights? ✨"
                bgColor="bg-blue-900"
              />
              <ChatBubble 
                text="Sounds perfect! Can't wait for my appointment tomorrow! 🌟"
                bgColor="bg-purple-900"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <p className="text-sm text-gray-400">To: June</p>
              <div className="flex space-x-2">
                <IconButton Icon={Mail} />
                <IconButton Icon={ChevronDown} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ChatBubble = ({ text, bgColor, attachment }) => (
  <div className={`${bgColor} bg-opacity-50 p-3 rounded-lg`}>
    <p>{text}</p>
    {attachment && (
      <div className="bg-gray-800 mt-2 p-2 rounded">
        <p className="text-sm">{attachment.name}</p>
        <p className="text-xs text-gray-400">{attachment.type}</p>
      </div>
    )}
  </div>
);

const IconButton = ({ Icon }) => (
  <button className="p-1 rounded-full bg-gray-800 hover:bg-gray-700">
    <Icon size={16} />
  </button>
);

export default HeroSection;