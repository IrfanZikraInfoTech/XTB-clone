import React from 'react';

const TrustSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-center">
            {/* Left Column - Award and Call to Action (Wider) */}
            <div className="lg:col-span-2 text-center lg:text-left">
              {/* Trust Tag */}
              <span className="inline-block text-gray-400 border-gray-400 border text-xs font-medium px-2 py-1 rounded-full uppercase tracking-wide mb-4 sm:mb-6">Trust</span>

              {/* Award Title with Trophy */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
                {/* Golden Trophy Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                      <path d="M8 14L10 16L14 12" stroke="white" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                </div>

                {/* Award Title */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight px-2">
                  Brokerage of the year according to Invest Cuffs 2024
                </h2>
              </div>

              {/* Call to Action Button */}
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
                Start trading
              </button>
            </div>

            {/* Right Column - Statistics and Features */}
            <div className="space-y-6 sm:space-y-8">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                <div className="relative">
                  {/* Green accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-full"></div>
                  <div className="pl-4 sm:pl-6">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">1.7 million+</div>
                    <div className="text-gray-300 text-xs sm:text-sm">XTB Group Clients</div>
                  </div>
                </div>

                <div className="relative">
                  {/* Green accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-full"></div>
                  <div className="pl-4 sm:pl-6">
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">5 million+</div>
                    <div className="text-gray-300 text-xs sm:text-sm">App downloads</div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4 sm:gap-8">
                <div className="relative">
                  {/* Green accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-full"></div>
                  <div className="pl-4 sm:pl-6">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">20+</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Years on the market with XTB Group</div>
                  </div>
                </div>

                <div className="relative">
                  {/* Green accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-full"></div>
                  <div className="pl-4 sm:pl-6">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">FSC</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Regulated by authorities</div>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="space-y-3 sm:space-y-4">
                <div className="relative">
                  {/* Green accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-full"></div>
                  <div className="pl-4 sm:pl-6">
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">2FA</div>
                    <div className="text-gray-300 text-xs sm:text-sm">Secure Two Factor Authentication login</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
