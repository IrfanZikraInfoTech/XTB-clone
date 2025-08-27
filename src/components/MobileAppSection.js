import React from 'react';
import { StarIcon, ChatBubbleLeftRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const MobileAppSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            <span className="inline-block bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-4">App</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">Everything you need - in one app</h2>
            
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">All markets in one place</h3>
                  <p className="text-gray-600 leading-relaxed">Get the most out of global markets thanks to access to 10100 instruments.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive solution</h3>
                  <p className="text-gray-600 leading-relaxed">Make informed trading decisions with latest news push notifications, educational courses and market research tools.</p>
                  <div className="w-16 h-0.5 bg-green-400 mt-3"></div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shadow-sm">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Intuitive interface</h3>
                  <p className="text-gray-600 leading-relaxed">Easy-to-use design for both beginners and experienced traders.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Mobile Phone Interface */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-96 bg-white border-2 border-gray-300 rounded-3xl p-4 shadow-xl">
                {/* Mobile App Interface */}
                <div className="text-xs text-gray-500 mb-2">9:41</div>
                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold">123 456.78 USD</div>
                      <div className="text-xs text-gray-600">Profit: 0.00 ML: 300.00%</div>
                    </div>
                    <MagnifyingGlassIcon className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <StarIcon className="h-5 w-5 text-yellow-500 mx-auto mb-1" />
                      <div className="text-xs">Favourites</div>
                    </div>
                    <div className="text-center">
                      <div className="h-5 w-5 bg-orange-500 rounded mx-auto mb-1"></div>
                      <div className="text-xs">Hot</div>
                    </div>
                    <div className="text-center">
                      <ChatBubbleLeftRightIcon className="h-5 w-5 mx-auto mb-1" />
                      <div className="text-xs">Sentiment</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gray-800 rounded"></div>
                      <div>
                        <div className="text-sm font-semibold">Apple Stock</div>
                        <div className="text-xs text-green-600">+24.40%</div>
                      </div>
                    </div>
                    <div className="text-sm font-semibold">128.56</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-orange-500 rounded"></div>
                      <div>
                        <div className="text-sm font-semibold">Tesla Stock</div>
                        <div className="text-xs text-red-600">-2.45%</div>
                      </div>
                    </div>
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

export default MobileAppSection;
