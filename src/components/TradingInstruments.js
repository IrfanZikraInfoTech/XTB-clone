import React, { useState } from 'react';

const TradingInstruments = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Data for different instrument categories
  const instrumentsData = {
    All: [
      {
        id: 1,
        name: 'Apple Inc.',
        symbol: 'AAPL.US',
        type: 'CFD',
        icon: '🍎',
        iconBg: 'bg-gray-800',
        change: '0%',
        changeColor: 'text-gray-600',
        sell: '228.71 USD',
        buy: '227.98 USD'
      },
      {
        id: 2,
        name: 'Tesla Motors Inc.',
        symbol: 'TSLA.US',
        type: 'CFD',
        icon: 'T',
        iconBg: 'bg-red-600',
        change: '0%',
        changeColor: 'text-gray-600',
        sell: '350 USD',
        buy: '348.69 USD'
      },
      {
        id: 3,
        name: 'GOLD',
        symbol: 'Au',
        type: 'CFD',
        icon: 'Au',
        iconBg: 'bg-yellow-500',
        change: '-0.51%',
        changeColor: 'text-red-600',
        sell: '3376.62 USD',
        buy: '3376.29 USD'
      },
      {
        id: 4,
        name: 'OIL',
        symbol: 'OIL',
        type: 'CFD',
        icon: '🛢️',
        iconBg: 'bg-gray-600',
        change: '-0.32%',
        changeColor: 'text-red-600',
        sell: '66.56 USD',
        buy: '66.52 USD'
      },
      {
        id: 5,
        name: 'NATGAS',
        symbol: 'NATGAS',
        type: 'CFD',
        icon: '🔥',
        iconBg: 'bg-blue-400',
        change: '-1.58%',
        changeColor: 'text-red-600',
        sell: '2.781 USD',
        buy: '2.777 USD'
      },
      {
        id: 6,
        name: 'US100',
        symbol: 'US100',
        type: 'CFD',
        icon: '🇺🇸',
        iconBg: 'bg-blue-600',
        change: '-0.01%',
        changeColor: 'text-red-600',
        sell: '23605.5 USD',
        buy: '23604.46 USD'
      }
    ],
    Stocks: [
      {
        id: 1,
        name: 'Apple Inc.',
        symbol: 'AAPL.US',
        type: 'Stock',
        icon: '🍎',
        iconBg: 'bg-gray-800',
        change: '+1.2%',
        changeColor: 'text-green-600',
        sell: '228.71 USD',
        buy: '227.98 USD'
      },
      {
        id: 2,
        name: 'Tesla Motors Inc.',
        symbol: 'TSLA.US',
        type: 'Stock',
        icon: 'T',
        iconBg: 'bg-red-600',
        change: '-0.8%',
        changeColor: 'text-red-600',
        sell: '350 USD',
        buy: '348.69 USD'
      }
    ],
    ETFs: [
      {
        id: 1,
        name: 'SPDR S&P 500 ETF',
        symbol: 'SPY.US',
        type: 'ETF',
        icon: '📈',
        iconBg: 'bg-green-600',
        change: '+0.5%',
        changeColor: 'text-green-600',
        sell: '450.25 USD',
        buy: '449.80 USD'
      },
      {
        id: 2,
        name: 'Invesco QQQ Trust',
        symbol: 'QQQ.US',
        type: 'ETF',
        icon: '📊',
        iconBg: 'bg-blue-600',
        change: '+0.7%',
        changeColor: 'text-green-600',
        sell: '380.15 USD',
        buy: '379.90 USD'
      }
    ],
    CFD: [
      {
        id: 1,
        name: 'GOLD',
        symbol: 'Au',
        type: 'CFD',
        icon: 'Au',
        iconBg: 'bg-yellow-500',
        change: '-0.45%',
        changeColor: 'text-red-600',
        sell: '3378.74 USD',
        buy: '3378.41 USD'
      },
      {
        id: 2,
        name: 'OIL',
        symbol: 'OIL',
        type: 'CFD',
        icon: '🛢️',
        iconBg: 'bg-gray-600',
        change: '-0.32%',
        changeColor: 'text-red-600',
        sell: '66.57 USD',
        buy: '66.52 USD'
      },
      {
        id: 3,
        name: 'NATGAS',
        symbol: 'NATGAS',
        type: 'CFD',
        icon: '🔥',
        iconBg: 'bg-blue-400',
        change: '-0.89%',
        changeColor: 'text-red-600',
        sell: '2.8 USD',
        buy: '2.796 USD'
      }
    ]
  };

  const tabs = ['All', 'Stocks', 'ETFs', 'CFD'];
  const currentInstruments = instrumentsData[activeTab] || [];

  const filteredInstruments = currentInstruments.filter(instrument =>
    instrument.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    instrument.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block bg-gray-100 text-black text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-4">Instruments</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-8 px-2">Discover over 10100 trading possibilities</h2>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 sm:mb-8">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
              Create account
            </button>
            <button className="text-green-600 font-semibold text-sm sm:text-base lg:text-lg hover:text-green-700 flex items-center justify-center group transition-colors duration-300">
              Full instruments list
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Card with Search, Tabs, and Instruments */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border overflow-hidden">
          {/* Search Bar */}
          <div className="p-2 sm:p-4 border-b border-gray-100">
            <div className="relative w-full">
              <svg className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search through 10100+ instruments"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm text-sm sm:text-base"
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="px-4 sm:px-8 py-4 sm:py-6 border-b border-gray-100">
            <div className="flex flex-wrap justify-start sm:justify-left space-x-4 sm:space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm sm:text-lg font-semibold pb-2 transition-all duration-300 ${activeTab === tab
                    ? 'text-gray-900 border-b-2 border-gray-900'
                    : 'text-gray-600 hover:text-gray-900 hover:border-b-2 hover:border-gray-300'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Instruments List */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 sm:px-8 py-4 sm:py-6 text-left text-xs sm:text-sm font-semibold text-gray-900"></th>
                  <th className="px-2 sm:px-8 py-4 sm:py-6 text-right text-xs sm:text-sm font-semibold text-gray-900">Change</th>
                  <th className="px-2 sm:px-8 py-4 sm:py-6 text-right text-xs sm:text-sm font-semibold text-gray-900">Sell</th>
                  <th className="px-2 sm:px-8 py-4 sm:py-6 text-right text-xs sm:text-sm font-semibold text-gray-900">Buy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredInstruments.map((instrument) => (
                  <tr key={instrument.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-4 sm:px-8 py-4 sm:py-6">
                      <div className="flex items-center space-x-3 sm:space-x-4">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 ${instrument.iconBg} rounded-lg flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md`}>
                          {instrument.icon}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-gray-900 text-sm sm:text-base truncate">{instrument.name}</div>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{instrument.type}</span>
                            <span className="text-xs sm:text-sm text-gray-500 truncate">({instrument.symbol})</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className={`px-2 sm:px-8 py-4 sm:py-6 text-right font-semibold text-xs sm:text-sm ${instrument.changeColor}`}>
                      {instrument.change}
                    </td>
                    <td className="px-2 sm:px-8 py-4 sm:py-6 text-right font-semibold text-gray-900 text-xs sm:text-sm">
                      {instrument.sell}
                    </td>
                    <td className="px-2 sm:px-8 py-4 sm:py-6 text-right font-semibold text-gray-900 text-xs sm:text-sm">
                      {instrument.buy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingInstruments;
