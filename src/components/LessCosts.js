import React from 'react';

const LessCosts = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-4">Fees</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Less costs, more investments</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* 0% Commission Card */}
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            {/* Visual Elements */}
            <div className="relative mb-8">
              {/* Company Logos Platform */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  {/* Apple Logo */}
                  <div className="bg-gray-800 rounded-xl p-3 flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  </div>
                  {/* Amazon Logo */}
                  <div className="bg-orange-500 rounded-xl p-3 flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15.93 12.86c-.28-1.21-1.03-2.11-2.24-2.11-1.21 0-2.24.9-2.24 2.11 0 1.21 1.03 2.11 2.24 2.11 1.21 0 2.24-.9 2.24-2.11zm-2.24-3.11c-1.72 0-3.24 1.28-3.24 3.11 0 1.83 1.52 3.11 3.24 3.11 1.72 0 3.24-1.28 3.24-3.11 0-1.83-1.52-3.11-3.24-3.11z" />
                    </svg>
                  </div>
                  {/* Nike Logo */}
                  <div className="bg-red-600 rounded-xl p-3 flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.5 3.5L3.5 21.5M3.5 3.5L21.5 21.5" />
                    </svg>
                  </div>
                  {/* McDonald's Logo */}
                  <div className="bg-yellow-400 rounded-xl p-3 flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Large 0% Display */}
              <div className="relative">
                <div className="text-8xl font-bold text-green-600 text-center">0</div>
                <div className="absolute bottom-0 right-0 bg-black text-white text-lg font-bold px-2 py-1 rounded">%</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">0% commission*</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Enjoy no commission on stocks and ETFs up to EUR 100 000 of monthly turnover, above this amount the commission is only 0.2% (min. EUR 10). Remember that 0.5% currency conversion cost may apply.</p>
          </div>

          {/* Free Deposits Card */}
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            {/* Visual Elements */}
            <div className="mb-8">
              {/* Wallet and Cards */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 mb-6">
                <div className="flex items-center justify-center space-x-4">
                  {/* Wallet */}
                  <div className="relative">
                    <div className="w-16 h-12 bg-white border-2 border-gray-300 rounded-lg shadow-md"></div>
                    <div className="absolute -top-1 -right-1 w-4 h-6 bg-gray-800 rounded-sm"></div>
                  </div>

                  {/* Credit Card */}
                  <div className="w-12 h-8 bg-gray-800 rounded-lg shadow-md"></div>

                  {/* Bank Building Icon */}
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" />
                      <path d="M2 17L12 22L22 17" />
                      <path d="M2 12L12 17L22 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Free deposits and withdrawals</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Manage funds without costs using selected payment methods.</p>
          </div>

          {/* Free Account Opening Card */}
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            {/* Visual Elements */}
            <div className="mb-8">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 mb-6">
                <div className="flex items-center justify-center space-x-4">
                  {/* Shield with Checkmark */}
                  <div className="relative">
                    <div className="w-12 h-14 bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" />
                        <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="2" fill="none" />
                      </svg>
                    </div>
                  </div>

                  {/* Stars Rating */}
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Mobile Phone with Profile */}
                  <div className="relative">
                    <div className="w-10 h-16 bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
                      <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-bold">FREE</div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Free account opening</h3>
            <p className="text-gray-600 text-sm leading-relaxed">Complete the process in 15 minutes without unnecessary formalities.</p>
          </div>
        </div>

        <div className="text-center">
          <button className="text-green-600 font-semibold text-lg hover:text-green-700 flex items-center mx-auto group">
            View our full fees table
            <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LessCosts;
