import React from 'react';

const InvestYourWay = () => {
  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block border text-gray-600 text-xs font-medium px-3 py-2 rounded-full uppercase tracking-wide mb-4">Offer</span>
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900">Invest your way</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 p-4">
          {/* Stocks Card */}
          <div className="bg-white rounded-3xl border shadow-xl flex flex-col h-full">
            <div className="px-12 py-4 flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Stocks</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">More than 6100 assets from Europe and the United States</p>
              <button className="text-green-600 font-semibold text-lg hover:text-green-700 flex items-center group">
                Find out more
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Enhanced Visual Card */}
            <div className="rounded-b-3xl overflow-hidden">
              <img src="/kv-stocks.png" alt="Stocks" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* ETFs Card */}
          <div className="bg-white rounded-3xl border shadow-xl flex flex-col h-full">
            <div className="px-12 py-4 flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">ETFs</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">More than 1400 American and European</p>
              <button className="text-green-600 font-semibold text-lg hover:text-green-700 flex items-center group">
                Find out more
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Enhanced Visual Card */}
            <div className="rounded-b-3xl overflow-hidden">
              <img src="/kv-es-s1-dekstop-investingplans-es.png" alt="ETFs" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* CFDs Card */}
          <div className="bg-white rounded-3xl border shadow-xl flex flex-col h-full">
            <div className="px-12 py-4 flex-1">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">CFDs: Commodities, Indices</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">2500+ leveraged instruments</p>
              <button className="text-green-600 font-semibold text-lg hover:text-green-700 flex items-center group">
                Find out more
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Enhanced Visual Card */}
            <div className="rounded-b-3xl overflow-hidden">
              <img src="/kv-forex.png" alt="CFDs" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default InvestYourWay;
