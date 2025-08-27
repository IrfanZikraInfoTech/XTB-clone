import React from 'react';

const InvestmentPlans = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-sm uppercase font-medium tracking-wide bg-gray-100 px-2 rounded-full">Solutions</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-gray-900 px-2">Learn of the newest possibilities</h2>
        </div>

        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-900">Investment plans</h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">Discover a smarter way of passive investing based on ETFs</p>
              <button className="text-green-600 font-semibold text-sm sm:text-base lg:text-lg hover:text-green-700 flex items-center justify-center lg:justify-start group">
                Learn more
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Right Side - Mobile Phone Interface */}
            <div className="flex justify-center">
              <img
                src="/mockup-ghost-desktop.png"
                alt="Investment plans mobile app"
                className="rounded-xl sm:rounded-2xl shadow-xl w-full max-w-sm lg:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
