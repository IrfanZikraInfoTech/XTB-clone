import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo Section */}
        <div className="mb-12">
          <div className="flex items-center">
            <img src="/logo_xtb.svg" alt="XTB Logo" className="h-8 w-auto" />
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Invest Column */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Invest</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Stocks</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">ETFs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">CFDs on Forex</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">CFDs on Indices</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">CFDs on Commodities</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Investment Plans</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Account and Fees</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Instrument specification</a></li>
            </ul>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Education</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Educational articles</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Market analysis</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Market calendar</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Help center</a></li>
            </ul>
          </div>

          {/* About us Column */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4">About us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">The company</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Ambassador</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Trading Platform</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Contact</a></li>
            </ul>
          </div>

          {/* Investor relations Column */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Investor relations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">News</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Reports</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Share Price</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">ESG</a></li>
            </ul>
          </div>

          {/* LEGAL Column */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Legal information</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Regulations</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Risk Disclaimer</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Complaints procedure</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Company News</a></li>
            </ul>
          </div>
        </div>

        {/* Horizontal Links Section */}
        <div className="flex flex-wrap items-center justify-between mb-8 pb-8 border-b border-gray-200">
          <div className="flex flex-wrap items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition flex items-center group">
              Partnerships
              <svg className="w-4 h-4 ml-1 text-green-600 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition flex items-center group">
              XOpenHub.pro
              <svg className="w-4 h-4 ml-1 text-green-600 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition flex items-center group">
              Client office
              <svg className="w-4 h-4 ml-1 text-green-600 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          {/* Web App Link */}
          <a href="#" className="text-gray-600 hover:text-gray-900 transition flex items-center group">
            <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
            Web app
          </a>
        </div>

        {/* Legal Disclaimers */}
        <div className="space-y-4 text-sm text-gray-600 mb-8">
          <p>
            CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage.
            Fractional Shares (FS) are not separate financial instruments and have limited corporate rights.
            You should consider whether you understand how CFDs and FS work and whether you can afford to take the high risk of losing your money.
          </p>
          <p>
            Before deciding to trade in financial instruments, you should be aware of the risks and costs associated with trading the financial markets,
            carefully consider your investment objectives, level of experience, and risk appetite, and seek professional advice where needed.
          </p>
          <p>
            Please consult our regulations and policies at{' '}
            <a href="https://www.xtb.com/int/legal-information" className="text-blue-600 underline hover:text-blue-800">
              https://www.xtb.com/int/legal-information
            </a>
          </p>
        </div>

        {/* Additional Legal Information */}
        <div className="space-y-4 text-sm text-gray-500 border-t border-gray-200 pt-8">
          <p>
            XTB International Limited is a limited liability company established in Belize under Registration No. 000000587 (formerly 153,939)
            and is authorized by the Financial Services Commission of Belize (FSC) under Registration No. 000302/35.
            Address: 35 Barrack Road, 2nd Floor, Belize City, Belize, C.A.
          </p>
          <p>
            "XTB" is a trademark of "XTB Group". XTB S.A. is authorized and regulated by the Komisja Nadzoru Finansowego (KNF) in Poland.
            XTB Limited is authorized and regulated by the Financial Conduct Authority in the United Kingdom.
            XTB Sucursal is authorized and regulated by the Comisión Nacional del Mercado de Valores in Spain.
          </p>
          <div className="flex items-center justify-between">
            <p>Copyright 2025 © XTB S.A.</p>
            <a href="#" className="text-green-600 hover:text-green-700 transition-colors">• Cookies settings</a>
          </div>
        </div>
      </div>

      {/* Chat Icon */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shadow-lg cursor-pointer hover:bg-green-600 transition-colors">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
