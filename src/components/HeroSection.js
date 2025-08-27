import React from 'react';
import { StarIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const HeroSection = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Trust Indicators */}
        <div className="flex justify-center space-x-4 mb-8">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
            <StarIcon className="h-4 w-4 text-yellow-500" />
            <span className="text-sm font-medium">1 million XTB Group Clients</span>
          </div>
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
            <ChatBubbleLeftRightIcon className="h-4 w-4 text-blue-500" />
            <span className="text-sm font-medium">24/5 Support</span>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">Where your money works</h1>
            <p className="text-gray-600 text-lg mb-8">Investing, market analysis, education</p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition">Create account</button>
              <button className="px-6 py-3 border border-gray-300 rounded-xl hover:border-red-600 hover:text-red-600 transition">Try a demo</button>
            </div>
          </div>

          {/* Right Column - Image and Floating Cards */}
          <div className="relative min-h-[400px] lg:min-h-[500px] flex justify-center items-center">
            {/* Red "7" shaped background graphic */}
            <div className="absolute inset-0 w-full h-full">
              <div className="absolute top-0 right-0 w-64 h-64 lg:w-96 lg:h-96 bg-red-600 transform rotate-12 opacity-20 rounded-full"></div>
              <div className="absolute top-16 right-8 w-56 h-56 lg:w-80 lg:h-80 bg-red-500 transform -rotate-6 opacity-30 rounded-full"></div>
              <div className="absolute top-32 right-16 w-48 h-48 lg:w-64 lg:h-64 bg-red-400 transform rotate-3 opacity-40 rounded-full"></div>
            </div>

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
              {/* Fallback placeholder if image fails to load */}
              <div className="hidden w-80 h-60 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-600 font-medium">Trading Platform</p>
                </div>
              </div>
            </div>

            {/* Floating Product Overlays */}
            <div className="absolute top-8 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg z-20">
              <h4 className="font-semibold text-sm mb-2">Stocks</h4>
              <div className="flex space-x-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Uber</span>
                <span className="text-xs bg-blue-100 px-2 py-1 rounded">PayPal</span>
                <span className="text-xs bg-orange-100 px-2 py-1 rounded">Spotify</span>
              </div>
            </div>

            <div className="absolute top-16 left-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg z-20">
              <h4 className="font-semibold text-sm mb-2">ETFs</h4>
              <div className="flex space-x-2">
                <span className="text-xs bg-blue-100 px-2 py-1 rounded">LYXOR</span>
                <span className="text-xs bg-blue-100 px-2 py-1 rounded">Amundi</span>
                <span className="text-xs bg-blue-100 px-2 py-1 rounded">Vanguard</span>
              </div>
            </div>

            <div className="absolute top-24 left-12 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg z-20">
              <h4 className="font-semibold text-sm mb-2">CFDs</h4>
              <div className="flex space-x-2">
                <span className="text-xs bg-yellow-100 px-2 py-1 rounded">Au</span>
                <span className="text-xs bg-blue-100 px-2 py-1 rounded">UK</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">500</span>
              </div>
            </div>

            <div className="absolute top-32 left-16 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg z-20">
              <h4 className="font-semibold text-sm mb-2">ETFs</h4>
              <div className="flex space-x-2">
                <span className="text-xs bg-blue-100 px-2 py-1 rounded">LYXOR</span>
                <span className="text-xs bg-red-100 px-2 py-1 rounded">Amundi</span>
                <span className="text-xs bg-green-100 px-2 py-1 rounded">Vanguard</span>
              </div>
            </div>

            <div className="absolute top-40 left-20 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg z-20">
              <h4 className="font-semibold text-sm mb-2">Investment Plans</h4>
              <div className="flex space-x-2">
                <span className="text-xs bg-green-100 px-2 py-1 rounded">Document</span>
                <span className="text-xs bg-blue-100 px-2 py-1 rounded">Key</span>
                <span className="text-xs bg-purple-100 px-2 py-1 rounded">Umbrella</span>
              </div>
            </div>

            <div className="absolute top-48 left-24 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg z-20">
              <h4 className="font-semibold text-sm mb-2">Stocks</h4>
              <div className="flex space-x-2">
                <span className="text-xs bg-yellow-100 px-2 py-1 rounded">Au</span>
                <span className="text-xs bg-blue-100 px-2 py-1 rounded">UK</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">500</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
