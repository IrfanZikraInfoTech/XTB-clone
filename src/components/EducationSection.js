import React from 'react';

const EducationSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-200 text-gray-600 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-4">Education</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Choose your way to understand the market</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Trading Courses Card */}
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trading courses</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">Explore the educational base containing video courses at all advancement levels, available directly in the app</p>
            <button className="text-green-600 font-semibold text-lg hover:text-green-700 mb-8 flex items-center group">
              Create account 
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Detailed Illustration */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                {/* User Icon with Green Line */}
                <div className="relative">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-green-500"></div>
                </div>
                
                {/* Folder with Green Tab */}
                <div className="relative">
                  <div className="w-12 h-8 bg-gray-700 rounded-t-lg flex items-center justify-center">
                    <div className="absolute -top-1 left-2 w-4 h-1 bg-green-500 rounded-sm"></div>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                    </svg>
                  </div>
                </div>
                
                {/* Screen with Play Button and Chart */}
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-12 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center shadow-md">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Bar Chart */}
                  <div className="flex items-end space-x-1">
                    <div className="w-2 h-4 bg-green-500 rounded-sm"></div>
                    <div className="w-2 h-6 bg-green-500 rounded-sm"></div>
                    <div className="w-2 h-3 bg-green-500 rounded-sm"></div>
                    <div className="w-2 h-5 bg-green-500 rounded-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Market News Card */}
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Market news</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">Stay up to date with our daily overview of the market insights brought to you by XTB research team</p>
            <button className="text-green-600 font-semibold text-lg hover:text-green-700 mb-8 flex items-center group">
              Find out more 
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Detailed Illustration */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                {/* Notification Bell */}
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                
                {/* iShares Screen */}
                <div className="w-16 h-12 bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-semibold text-xs">iShares</span>
                </div>
                
                {/* Progress Chart Screen */}
                <div className="w-16 h-12 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center shadow-md relative">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 flex space-x-1">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Free Training Account Card */}
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free training account</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">Test your trading strategies and experience the market without risking your own capital</p>
            <button className="text-green-600 font-semibold text-lg hover:text-green-700 mb-8 flex items-center group">
              Start trading 
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Detailed Illustration */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                {/* Bookmark/Flag Icon */}
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </div>
                
                {/* Checkmark Screen */}
                <div className="w-16 h-12 bg-gray-800 rounded-lg flex items-center justify-center shadow-md">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Golden Coin */}
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-sm">$</span>
                </div>
              </div>
            </div>
          </div>

          {/* Webinars Card */}
          <div className="bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Webinars</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">Join live sessions with market experts and learn advanced trading strategies</p>
            <button className="text-green-600 font-semibold text-lg hover:text-green-700 mb-8 flex items-center group">
              Register now 
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            
            {/* Detailed Illustration */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
              <div className="flex items-center space-x-4">
                {/* Document with Chart */}
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                
                {/* Line Graph */}
                <div className="w-16 h-12 bg-white border-2 border-gray-300 rounded-lg flex items-center justify-center shadow-md">
                  <svg className="w-12 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                
                {/* Expert Icon */}
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
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

export default EducationSection;
