import React from 'react';

const Company = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              XTB Group
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              XTB — Where your money works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Our mission is to provide solutions that allow our clients' money to work for them in many different ways. 
              We believe that all these possibilities can be accessible through one convenient app.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Open account
            </button>
          </div>
          
          {/* Mobile App Interface */}
          <div className="relative max-w-4xl mx-auto">
            <div className="flex items-center justify-center">
              <div className="relative">
                {/* Mobile Phone */}
                <div className="w-80 h-96 bg-gray-900 rounded-3xl p-4 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-sm">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-6 h-3 bg-gray-300 rounded"></div>
                        <div className="w-6 h-3 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-6">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-gray-900 mb-2">21 500.00 USD</div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <div>Free funds: 9 000.00</div>
                          <div className="text-green-600">Profit: +6 530.89</div>
                          <div>Margin: 0.00</div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-medium">
                          Add money
                        </button>
                        <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg text-sm font-medium">
                          Transfer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Investment Cards */}
                <div className="absolute -left-20 top-20 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="text-sm font-semibold text-gray-900 mb-2">ETFs</div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-xs font-bold">L</div>
                    <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-xs font-bold">A</div>
                    <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center text-xs font-bold">V</div>
                  </div>
                </div>
                
                <div className="absolute -bottom-10 -left-10 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Stocks</div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-xs text-white font-bold">U</div>
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-xs font-bold">P</div>
                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-xs text-white font-bold">M</div>
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center text-xs text-white font-bold">S</div>
                  </div>
                </div>
                
                <div className="absolute -right-20 top-32 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <div className="text-sm font-semibold text-gray-900 mb-2">Investment Plans</div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center text-xs">🔑</div>
                    <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center text-xs">☂️</div>
                  </div>
                </div>
              </div>
              
              {/* Woman Image Placeholder */}
              <div className="ml-8">
                <div className="w-32 h-40 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500">👩</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Trust
            </div>
            <div className="flex items-center justify-center mb-6">
              <svg className="w-12 h-12 text-yellow-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <h2 className="text-4xl font-bold text-gray-900">
                Brokerage of the year according to Invest Cuffs 2024
              </h2>
            </div>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Start investing
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">1.7 million+</div>
              <div className="text-gray-600">XTB Group Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Years of experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
              <div className="text-gray-600">Markets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600">Employees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">2FA</div>
              <div className="text-gray-600">Secure Two Factor Authentication login</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Foundations
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Discover our values</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                The continuous development of our proprietary technology is the key to providing our customers with high-quality services. 
                Whether it's investment or savings solutions, we are always at the forefront of global trends.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                In more than two decades of activity in the financial markets, we have earned the trust of more than 1.7 million customers worldwide. 
                Since 2016, we have been listed on Warsaw Stock Exchange.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our Customer Service team provides support in 18 languages and is available Monday through Friday via email, chat, or phone. 
                We continuously expand extensive library of educational materials and videos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Approach Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our way
            </div>
            <h2 className="text-4xl font-bold text-gray-900">Global approach with local presence</h2>
          </div>
          
          <div className="bg-gray-100 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Operating locally</h3>
                <p className="text-gray-600 mb-6">We are present in over 12 countries on 3 continents.</p>
                <button className="text-green-600 hover:text-green-700 font-medium flex items-center">
                  Create account
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div className="relative">
                <div className="w-64 h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-6xl">👨‍💼</span>
                </div>
                
                {/* Country Flags */}
                <div className="absolute -top-4 -left-4 w-12 h-8 bg-red-600 rounded shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-8 bg-blue-600 rounded shadow-lg"></div>
                <div className="absolute -top-4 -right-4 w-12 h-8 bg-yellow-500 rounded shadow-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-8 bg-red-500 rounded shadow-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">At XTB, your money can work in many ways</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Trading</h3>
              <p className="text-gray-600 mb-4">
                We enable our clients to actively trade thousands of CFDs on currencies, indices, commodities, stocks and ETFs
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium flex items-center">
                Find out more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Investing</h3>
              <p className="text-gray-600 mb-4">
                We offer access to stocks and ETFs listed on exchanges worldwide, including in Germany, the United States, and the United Kingdom
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium flex items-center">
                Find out more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Savings</h3>
              <p className="text-gray-600 mb-4">
                We also provide a smart way to invest your savings with our Investment Plans
              </p>
              <button className="text-green-600 hover:text-green-700 font-medium flex items-center">
                Find out more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              History
            </div>
            <h2 className="text-4xl font-bold text-white">XTB throughout the years</h2>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-green-500 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-3 gap-8 relative">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-4">2025</div>
                <div className="bg-gray-800 rounded-lg p-4 text-left">
                  <div className="flex items-start mb-2">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p className="text-gray-300 text-sm">
                      This year brings planned new products in our app and expansion into new markets. Stay tuned to keep up with the latest updates.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-4">2024</div>
                <div className="bg-gray-800 rounded-lg p-4 text-left">
                  <div className="flex items-start mb-2">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p className="text-gray-300 text-sm">
                      Zlatan Ibrahimović becomes our new ambassador. Now, money works for Zlatan, not Zlatan for money.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p className="text-gray-300 text-sm">
                      We open over 500 000 new accounts as a group, surpassing 1 350 000 clients in our database.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-400 mb-4">2023</div>
                <div className="bg-gray-800 rounded-lg p-4 text-left">
                  <div className="flex items-start mb-2">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p className="text-gray-400 text-sm">
                      In the first months we stocks as part of an ed at introducing investin
                    </p>
                  </div>
                  <div className="flex items-start mb-2">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p className="text-gray-400 text-sm">
                      This year we also intro interest rates on unive Plans - solution desigr
                    </p>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <p className="text-gray-400 text-sm">
                      We closed the year wit over 897 500 investors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Awards
            </div>
            <h2 className="text-4xl font-bold text-white">Our achievements and recognitions</h2>
          </div>
          
          <div className="flex space-x-6 overflow-x-auto pb-4">
            <div className="bg-gray-800 rounded-lg p-6 min-w-80">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Best CFD Broker of 2024</h3>
              <p className="text-gray-400">BROKERWAHL</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 min-w-80">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Highly Commended</h3>
              <p className="text-gray-400">FINDER AWARDS 2024</p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-6 min-w-80">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Best Forex Broker Proprietary Platform</h3>
              <p className="text-gray-400">FXSCOUTS 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Professional in business, responsible for tomorrow
            </h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
              At XTB, we understand that sustainability is an integral part of responsible business, which is why we care for the environment, 
              society, and responsible governance. Discover our vision and learn about the actions we are taking in the area of ESG.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-8">
              Read more
            </button>
            
            <div className="flex justify-center space-x-8">
              <div className="w-24 h-24 bg-gray-800 rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="w-24 h-24 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
