import React from 'react';

const LessCosts = () => {
  return (
    <section className="bg-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-block border text-gray-600 text-xs font-medium px-3 py-2 rounded-full uppercase tracking-wide mb-4">Fees</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 px-2">Less costs, more investments</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {/* 0% Commission Card - Wider */}
          <div className="sm:col-span-2 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
            <div className="flex justify-center mb-4 sm:mb-6">
              {/* Visual Elements */}
              <img src="/kv-s1-dekstop-a-0-commision.png" alt="0% commission" className="w-full h-auto max-w-xs" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">0% commission*</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">Enjoy no commission on stocks and ETFs up to EUR 100 000 of monthly turnover, above this amount the commission is only 0.2% (min. EUR 10). Remember that 0.5% currency conversion cost may apply.</p>
          </div>

          {/* Free Deposits Card - Smaller */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
            {/* Visual Elements */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <img src="/kv-s1-dekstop-b-withdrawals.png" alt="Free deposits and withdrawals" className="w-full h-auto max-w-xs" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Free deposits and withdrawals</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">Manage funds without costs using selected payment methods.</p>
          </div>

          {/* Free Account Opening Card - Smaller */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
            {/* Visual Elements */}
            <div className="flex justify-center mb-4 sm:mb-6">
              <img src="/kv-s1-dekstop-c-account.png" alt="Free account opening" className="w-full h-auto max-w-xs" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Free account opening</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center">Complete the process in 15 minutes without unnecessary formalities.</p>
          </div>
        </div>

        <div className="text-center">
          <button className="text-green-600 font-semibold text-sm sm:text-base lg:text-lg hover:text-green-700 flex items-center mx-auto group">
            View our full fees table
            <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LessCosts;
