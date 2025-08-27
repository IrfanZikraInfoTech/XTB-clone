import React from 'react';

const InvestYourWay = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-4">Offer</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Invest your way</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Stocks Card */}
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Stocks</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">More than 6100 assets from Europe and the United States</p>
            <button className="text-green-600 font-semibold text-lg hover:text-green-700 mb-8 flex items-center group">
              Find out more
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Enhanced Visual Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 relative overflow-hidden">
              {/* Background Chart Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 30">
                  <path d="M0,20 L10,15 L20,18 L30,12 L40,16 L50,10 L60,14 L70,8 L80,12 L90,6 L100,10" stroke="currentColor" strokeWidth="1" fill="none" />
                  <path d="M0,25 L10,20 L20,23 L30,17 L40,21 L50,15 L60,19 L70,13 L80,17 L90,11 L100,15" stroke="currentColor" strokeWidth="1" fill="none" />
                </svg>
              </div>

              {/* Company Logos */}
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="bg-yellow-400 rounded-xl p-3 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <div className="bg-red-500 rounded-xl p-3 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div className="bg-blue-500 rounded-xl p-3 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl">G</span>
                </div>
                <div className="bg-orange-500 rounded-xl p-3 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl">a</span>
                </div>
              </div>
            </div>
          </div>

          {/* ETFs Card */}
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">ETFs</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">More than 1400 American and European</p>
            <button className="text-green-600 font-semibold text-lg hover:text-green-700 mb-8 flex items-center group">
              Find out more
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Enhanced Visual Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
              {/* Grid Interface */}
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`w-6 h-6 rounded flex items-center justify-center text-xs ${i === 3 ? 'bg-green-500 text-white' :
                      i === 7 ? 'bg-green-400 text-white' :
                        'bg-gray-200'
                    }`}>
                    {i === 3 ? '✓' : i === 7 ? '★' : ''}
                  </div>
                ))}
              </div>

              {/* ETF Provider Logos */}
              <div className="flex space-x-3">
                <div className="bg-blue-600 rounded-xl p-3 flex items-center justify-center shadow-md flex-1">
                  <div className="text-center">
                    <div className="w-6 h-6 bg-white rounded mb-1 mx-auto"></div>
                    <span className="text-white font-semibold text-xs">Invesco</span>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-xl p-3 flex items-center justify-center shadow-md flex-1">
                  <span className="text-white font-semibold text-xs">iShares</span>
                </div>
              </div>
            </div>
          </div>

          {/* CFDs Card */}
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">CFDs: Commodities, Indices</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">2500+ leveraged instruments</p>
            <button className="text-green-600 font-semibold text-lg hover:text-green-700 mb-8 flex items-center group">
              Find out more
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Enhanced Visual Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                {/* Gold Bar */}
                <div className="bg-yellow-500 rounded-xl p-3 flex items-center justify-center shadow-md">
                  <div className="text-center">
                    <div className="w-8 h-4 bg-yellow-400 rounded mb-1 mx-auto border border-yellow-600"></div>
                    <span className="text-white font-bold text-xs">GOLD</span>
                  </div>
                </div>

                {/* US/EU Flag */}
                <div className="bg-blue-600 rounded-xl p-3 flex items-center justify-center shadow-md">
                  <span className="text-white font-semibold text-xs">US/EU</span>
                </div>

                {/* S&P 500 */}
                <div className="bg-gray-800 rounded-xl p-3 flex items-center justify-center shadow-md col-span-2">
                  <div className="text-center">
                    <div className="w-6 h-4 bg-red-500 rounded mb-1 mx-auto"></div>
                    <span className="text-white font-bold text-xs">500</span>
                  </div>
                </div>
              </div>

              {/* Notification Bell */}
              <div className="absolute top-4 right-4">
                <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestYourWay;
