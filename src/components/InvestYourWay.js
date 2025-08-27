import React from 'react';

const InvestYourWay = () => {
  return (
    <section className="py-6 sm:py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block border text-gray-600 text-xs font-medium px-3 py-2 rounded-full uppercase tracking-wide mb-4">Offer</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 px-2">Invest your way</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 p-2 sm:p-4">
          {/* Stocks Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border shadow-xl flex flex-col h-full">
            <div className="px-6 sm:px-8 lg:px-12 py-4 flex-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Stocks</h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">More than 6100 assets from Europe and the United States</p>
              <button className="text-green-600 font-semibold text-sm sm:text-base lg:text-lg hover:text-green-700 flex items-center group">
                Find out more
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Enhanced Visual Card */}
            <div className="rounded-b-2xl sm:rounded-b-3xl overflow-hidden">
              <img src="/kv-stocks.png" alt="Stocks" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* ETFs Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border shadow-xl flex flex-col h-full">
            <div className="px-6 sm:px-8 lg:px-12 py-4 flex-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">ETFs</h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">More than 1400 American and European</p>
              <button className="text-green-600 font-semibold text-sm sm:text-base lg:text-lg hover:text-green-700 flex items-center group">
                Find out more
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Enhanced Visual Card */}
            <div className="rounded-b-2xl sm:rounded-b-3xl overflow-hidden">
              <img src="/kv-es-s1-dekstop-investingplans-es.png" alt="ETFs" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* CFDs Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border shadow-xl flex flex-col h-full sm:col-span-2 lg:col-span-1">
            <div className="px-6 sm:px-8 lg:px-12 py-4 flex-1">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">CFDs: Commodities, Indices</h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">2500+ leveraged instruments</p>
              <button className="text-green-600 font-semibold text-sm sm:text-base lg:text-lg hover:text-green-700 flex items-center group">
                Find out more
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Enhanced Visual Card */}
            <div className="rounded-b-2xl sm:rounded-b-3xl overflow-hidden">
              <img src="/kv-forex.png" alt="CFDs" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default InvestYourWay;
