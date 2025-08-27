import React from 'react';

const SupportSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gray-800 rounded-3xl p-12 text-white shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section - Contact Information */}
            <div>
              <span className="inline-block bg-gray-300 text-gray-800 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-6">Dedicated support</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Yes, we speak<br />English!
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">In case of any concerns or questions, you can easily contact us in the most convenient way for you</p>

              {/* Contact Options */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">Phone</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">Email</span>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">Chat</span>
                </div>
              </div>
            </div>

            {/* Right Section - Chat Interface */}
            <div className="relative">
              {/* Profile Picture */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 z-10">
                <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-800">
                  <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Chat Bubbles */}
              <div className="space-y-6 ml-20">
                {/* Top Chat Bubble */}
                <div className="bg-gray-700 rounded-2xl p-4 shadow-lg max-w-xs">
                  <p className="text-white text-sm">Hello! 👋</p>
                  <p className="text-white text-sm">How can I help you?</p>
                </div>

                {/* Bottom Chat Bubble with Language Flags */}
                <div className="bg-gray-700 rounded-2xl p-4 shadow-lg max-w-xs">
                  <div className="flex items-center space-x-2">
                    {/* Language Flags */}
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">PL</span>
                    </div>
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">FR</span>
                    </div>
                    <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">DE</span>
                    </div>
                    <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">UK</span>
                    </div>
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">IT</span>
                    </div>

                    {/* Plus Icon */}
                    <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
