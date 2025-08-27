import React from 'react';

const InvestmentPlans = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-sm text-gray-500 uppercase tracking-wide">Solutions</span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 text-gray-900">Learn of the newest possibilities</h2>
        </div>

        <div className="bg-gray-50 rounded-3xl p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Investment plans</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">Discover a smarter way of passive investing based on ETFs</p>
              <button className="text-green-600 font-semibold text-lg hover:text-green-700 flex items-center group">
                Learn more
                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>

            {/* Right Side - Mobile Phone Interface */}
            <div className="flex justify-center">
              <img
                src="/mockup-ghost-desktop.png"
                alt="Investment plans mobile app"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPlans;
