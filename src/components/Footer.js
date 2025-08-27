import React from 'react';

const Footer = () => {
  const handleInternalLink = (e, section) => {
    e.preventDefault();
    // For now, just scroll to top or show a message
    // In a real app, you'd use React Router for navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log(`Navigating to ${section} section`);
  };

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
              <li><button onClick={(e) => handleInternalLink(e, 'stocks')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Stocks</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'etfs')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">ETFs</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'forex')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">CFDs on Forex</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'indices')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">CFDs on Indices</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'commodities')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">CFDs on Commodities</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'investment-plans')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Investment Plans</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'account-fees')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Account and Fees</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'instrument-specification')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Instrument specification</button></li>
            </ul>
          </div>

          {/* Education Column */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Education</h3>
            <ul className="space-y-2">
              <li><button onClick={(e) => handleInternalLink(e, 'educational-articles')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Educational articles</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'market-analysis')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Market analysis</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'market-calendar')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Market calendar</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'help-center')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Help center</button></li>
            </ul>
          </div>

          {/* About us Column */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4">About us</h3>
            <ul className="space-y-2">
              <li><button onClick={(e) => handleInternalLink(e, 'company')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">The company</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'ambassador')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Ambassador</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'trading-platform')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Trading Platform</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'contact')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Contact</button></li>
            </ul>
          </div>

          {/* Investor relations Column */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4">Investor relations</h3>
            <ul className="space-y-2">
              <li><button onClick={(e) => handleInternalLink(e, 'news')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">News</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'reports')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Reports</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'share-price')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Share Price</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'esg')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">ESG</button></li>
            </ul>
          </div>

          {/* LEGAL Column */}
          <div>
            <h3 className="text-gray-900 font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><button onClick={(e) => handleInternalLink(e, 'legal-information')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Legal information</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'privacy-policy')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Privacy Policy</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'regulations')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Regulations</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'risk-disclaimer')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Risk Disclaimer</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'complaints-procedure')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Complaints procedure</button></li>
              <li><button onClick={(e) => handleInternalLink(e, 'company-news')} className="text-gray-600 hover:text-gray-900 transition text-left w-full">Company News</button></li>
            </ul>
          </div>
        </div>

        {/* Horizontal Links Section */}
        <div className="flex flex-wrap items-center justify-between mb-8 pb-8 border-b border-gray-200">
          <div className="flex flex-wrap items-center space-x-8">
            <button onClick={(e) => handleInternalLink(e, 'partnerships')} className="text-gray-600 hover:text-gray-900 transition flex items-center group">
              Partnerships
              <svg className="w-4 h-4 ml-1 text-green-600 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button onClick={(e) => handleInternalLink(e, 'xopenhub')} className="text-gray-600 hover:text-gray-900 transition flex items-center group">
              XOpenHub.pro
              <svg className="w-4 h-4 ml-1 text-green-600 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <button onClick={(e) => handleInternalLink(e, 'client-office')} className="text-gray-600 hover:text-gray-900 transition flex items-center group">
              Client office
              <svg className="w-4 h-4 ml-1 text-green-600 transform group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Web App Link */}
          <button onClick={(e) => handleInternalLink(e, 'web-app')} className="text-gray-600 hover:text-gray-900 transition flex items-center group">
            <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
            Web app
          </button>
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
            <button onClick={(e) => handleInternalLink(e, 'cookies-settings')} className="text-green-600 hover:text-green-700 transition-colors">• Cookies settings</button>
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
