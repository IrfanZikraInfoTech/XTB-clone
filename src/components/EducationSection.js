import React from 'react';

const EducationSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block bg-gray-100 text-black text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-4">Education</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 px-2">Choose your way to understand the market</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Trading Courses Card - Full Width */}
          <div className="lg:col-span-2 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Trading courses</h3>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">Explore the educational base containing video courses at all advancement levels, available directly in the app</p>
            <button className="text-green-600 font-semibold text-sm sm:text-base lg:text-lg hover:text-green-700 mb-6 sm:mb-8 flex items-center group">
              Create account
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Image */}
            <div className="flex justify-center">
              <img
                src="/kv-s3-dekstop-a-education.png"
                alt="Trading courses"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Column - Two Cards Stacked */}
          <div className="lg:col-span-1 flex flex-col gap-6 sm:gap-8">
            {/* Market News Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Market news</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">Stay up to date with our daily overview of the market insights brought to you by XTB research team</p>
              <button className="text-green-600 font-semibold text-sm sm:text-base hover:text-green-700 mb-4 sm:mb-6 flex items-center group">
                Find out more
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src="/kv-s3-dekstop-b-news.png"
                  alt="Market news"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Free Training Account Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Free training account</h3>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">Test your trading strategies and experience the market without risking your own capital</p>
              <button className="text-green-600 font-semibold text-sm sm:text-base hover:text-green-700 mb-4 sm:mb-6 flex items-center group">
                Start trading
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {/* Image */}
              <div className="flex justify-center">
                <img
                  src="/kv-s3-desktop-d-money-new.png"
                  alt="Free training account"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
