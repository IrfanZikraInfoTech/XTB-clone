import React from 'react';
import { StarIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  return (
    <div className="bg-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-2 mt-2 sm:mt-4">
          <div className="flex items-center space-x-2 bg-gray-100 border rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm">
            <StarIcon className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
            <span className="font-medium">1 million XTB Group Clients</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 border rounded-full px-3 sm:px-4 py-2 text-xs sm:text-sm">
            <ChatBubbleLeftRightIcon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
            <span className="font-medium">24/5 Support</span>
          </div>
        </div>
        
        <div className="flex flex-col justify-center text-center flex-1">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">Where your money works</h1>
          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 px-2">Investing, market analysis, education</p>
        </div>
        
        {/* Main Hero Content */}
        <div className="flex items-center min-h-[150px] sm:min-h-[200px]">
          {/* Right Column - Image and Floating Cards */}
          <div className="relative flex justify-center items-center flex-1">
            {/* Zlatan Image */}
            <div className="relative z-10 w-full max-w-4xl">
              <img
                src="/mena-en-kv-hp-desktop-zi-wymw-2024-1140x320.png"
                alt="Zlatan Ibrahimović with trading app"
                className="rounded-xl sm:rounded-2xl shadow-xl w-full h-auto"
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
