import React, { useState } from 'react';

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownData = {
    invest: [
      {
        icon: "📈",
        title: "Stocks",
        description: "Tesla, Amazon, Apple, Netflix"
      },
      {
        icon: "📄",
        title: "ETFs",
        description: "iShares, Vanguard, Lyxor, ARK"
      },
      {
        icon: "💱",
        title: "CFDs on Forex",
        description: "CFDs: AUD/USD, EUR/GBP, CHF/JPY"
      },
      {
        icon: "🌍",
        title: "CFDs on Indices",
        description: "CFDs: WIG20, S&P500, DAX, NIKKEI 225"
      },
      {
        icon: "📦",
        title: "CFDs on Commodities",
        description: "CFDs: Gold, Natural Gas, Coffee, Corn"
      },
      {
        icon: "📊",
        title: "Investment Plans",
        description: "Invest your savings in a smarter way"
      },
      {
        icon: "👤",
        title: "Account and Fees",
        description: "Learn about our fees, as well as deposits & withdrawals"
      }
    ],
    education: [
      {
        icon: "📚",
        title: "Trading Courses",
        description: "Learn from beginner to advanced levels"
      },
      {
        icon: "📰",
        title: "Market News",
        description: "Stay updated with latest market insights"
      },
      {
        icon: "📅",
        title: "Market Calendar",
        description: "Track important market events"
      },
      {
        icon: "❓",
        title: "Help Center",
        description: "Find answers to common questions"
      }
    ],
    about: [
      {
        icon: "🏢",
        title: "The Company",
        description: "Learn about XTB's history and mission"
      },
      {
        icon: "🌟",
        title: "Ambassador",
        description: "Meet our brand ambassadors"
      },
      {
        icon: "💻",
        title: "Trading Platform",
        description: "Explore our advanced trading tools"
      },
      {
        icon: "📞",
        title: "Contact",
        description: "Get in touch with our team"
      }
    ]
  };

  const navigationItems = [
    { key: 'invest', label: 'Invest' },
    { key: 'education', label: 'Education' },
    { key: 'about', label: 'About us' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-full  mx-auto px-48 py-1">
        <div className="flex justify-between ">
          {/* Logo */}
          <div className='flex items-center'>
            <div className="flex items-center">
              <img src="/logo_xtb.svg" alt="XTB Logo" className="h-6 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex ml-4 space-x-4">
              {navigationItems.map((item) => (
                <div
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={`px-2 py-2 rounded-lg transition-all duration-200 ${activeDropdown === item.key
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                  >
                    {item.label}
                  </button>

                  {/* Dropdown Menu */}
                  {activeDropdown === item.key && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-4 z-50">
                      <div className="space-y-1">
                        {dropdownData[item.key].map((dropdownItem, index) => (
                          <div
                            key={index}
                            className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors duration-200"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                                {dropdownItem.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 text-sm">
                                  {dropdownItem.title}
                                </h4>
                                <p className="text-gray-600 text-xs mt-1">
                                  {dropdownItem.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Desktop Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Globe Icon */}
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>

            {/* Login Text */}
            <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Login
            </button>

            {/* Vertical Separator */}
            <div className="w-px h-6 bg-gray-300"></div>

            {/* Try a demo Button */}
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium">
              Try a demo
            </button>

            {/* Create account Button */}
            <button className="px-6 py-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-200 shadow-sm">
              Create account
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Search Icon for Mobile */}
            <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={closeMobileMenu}
          />

          {/* Mobile Menu Panel */}
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation */}
              <div className="flex-1 overflow-y-auto py-4">
                {navigationItems.map((item) => (
                  <div key={item.key} className="border-b border-gray-100">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.key ? null : item.key)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium">{item.label}</span>
                      <svg
                        className={`w-5 h-5 transform transition-transform ${activeDropdown === item.key ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Mobile Dropdown Content */}
                    {activeDropdown === item.key && (
                      <div className="bg-gray-50 px-6 py-2">
                        {dropdownData[item.key].map((dropdownItem, index) => (
                          <div
                            key={index}
                            className="py-3 border-b border-gray-100 last:border-b-0"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-lg shadow-sm">
                                {dropdownItem.icon}
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 text-sm">
                                  {dropdownItem.title}
                                </h4>
                                <p className="text-gray-600 text-xs mt-1">
                                  {dropdownItem.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className="p-6 border-t border-gray-200 space-y-3">
                <button className="w-full px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium">
                  Login
                </button>
                <button className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-all duration-200 font-medium">
                  Try a demo
                </button>
                <button className="w-full px-6 py-2 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-all duration-200 shadow-sm">
                  Create account
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
