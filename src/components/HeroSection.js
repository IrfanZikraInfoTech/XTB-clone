import React from 'react';
import { StarIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  return (
    <div className="bg-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Trust Indicators */}
        <div className="flex justify-center space-x-4 mb-2 mt-4">
          <div className="flex items-center space-x-2 bg-gray-100 border rounded-full px-4 py-2">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">1 million XTB Group Clients</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 border rounded-full px-4 py-2">
            <ChatBubbleLeftRightIcon className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">24/5 Support</span>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center flex-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">Where your money works</h1>
          <p className="text-gray-600 text-lg mb-8">Investing, market analysis, education</p>
        </div>
        {/* Main Hero Content */}
        <div className="flex items-center min-h-[200px]">
          {/* Right Column - Image and Floating Cards */}
          <div className="relative flex justify-center items-center flex-1">
            {/* Zlatan Image */}
            <div className="relative z-10">
              <img
                src="/mena-en-kv-hp-desktop-zi-wymw-2024-1140x320.png"
                alt="Zlatan Ibrahimović with trading app"
                className="rounded-2xl shadow-xl max-w-full h-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
