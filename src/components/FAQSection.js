import React from 'react';
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FAQSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* FAQ Section */}
          <div className="order-2 lg:order-1">
            <span className="text-sm bg-gray-100 rounded-full px-3 py-1 text-gray-700">FAQ</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-4 sm:mb-6 px-2">Do you have more questions?</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 px-2">Common topics are collected here. If your question isn't answered, please contact our Customer Support team.</p>
            <button className="text-green-600 font-semibold hover:text-green-700 mb-6 sm:mb-8 text-sm sm:text-base">Visit support →</button>

            <div className="space-y-3 sm:space-y-4">
              <div className="border-b border-gray-200 pb-3 sm:pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-semibold text-sm sm:text-base">Is it free to open an account?</span>
                  <ChevronDownIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0" />
                </button>
              </div>
              <div className="border-b border-gray-200 pb-3 sm:pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-semibold text-sm sm:text-base">Is account maintenance free?</span>
                  <ChevronDownIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0" />
                </button>
              </div>
              <div className="border-b border-gray-200 pb-3 sm:pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-semibold text-sm sm:text-base">Do you keep my money segregated?</span>
                  <ChevronDownIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0" />
                </button>
              </div>
              <div className="border-b border-gray-200 pb-3 sm:pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-semibold text-sm sm:text-base">Why do I have to upload documents during registration?</span>
                  <ChevronDownIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div className="order-1 lg:order-2">
            <span className="text-sm bg-gray-100 rounded-full px-3 py-1 text-gray-700">Information</span>
            <h2 className="text-2xl sm:text-3xl font-bold mt-4 mb-4 sm:mb-6 px-2">See our recent technical announcements</h2>
            <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 px-2">Dates and details on: rollovers, holidays, dividends, trade halts and more.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Technical maintenance 22.08.2025</h3>
                <button className="text-green-600 font-semibold hover:text-green-700 text-xs sm:text-sm">Read more →</button>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Rollovers, holidays and dividends in the following week:</h3>
                <button className="text-green-600 font-semibold hover:text-green-700 text-xs sm:text-sm">Read more →</button>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">MAKER close only</h3>
                <button className="text-green-600 font-semibold hover:text-green-700 text-xs sm:text-sm">Read more →</button>
              </div>
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition">
                <h3 className="font-semibold mb-2 text-sm sm:text-base">Rollover on LSGASOIL, NATGAS, OIL, VIET30, WHEAT</h3>
                <button className="text-green-600 font-semibold hover:text-green-700 text-xs sm:text-sm">Read more →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
