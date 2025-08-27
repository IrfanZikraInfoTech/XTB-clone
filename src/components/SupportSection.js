import React from 'react';

const SupportSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Section - Contact Information */}
            <div className="text-center lg:text-left">
              <span className="inline-block text-gray-100 border border-gray-100 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-4 sm:mb-6">Dedicated support</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2">
                Yes, we speak<br />English!
              </h2>
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed px-2">In case of any concerns or questions, you can easily contact us in the most convenient way for you</p>

              {/* Contact Options */}
              <div className="flex justify-center lg:justify-start gap-4 sm:gap-6">
                <div className="flex items-center flex-col-reverse gap-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-lg font-semibold">Phone</span>
                </div>

                <div className="flex items-center flex-col-reverse gap-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-lg font-semibold">Email</span>
                </div>

                <div className="flex items-center flex-col-reverse gap-2">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-lg flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-lg font-semibold">Chat</span>
                </div>
              </div>
            </div>

            {/* Right Section - Chat Interface with Image */}
            <div className="relative order-first lg:order-last">
              {/* Main Image */}
              <div className="flex justify-center">
                <img
                  src="/kv-s4-dekstop-support-new.png"
                  alt="Support Chat Interface"
                  className="w-full h-auto object-contain max-w-sm lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
