import React from 'react';
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FAQSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <span className="text-sm bg-gray-100 rounded-full px-3 py-1 text-gray-700">FAQ</span>
            <h2 className="text-3xl font-bold mt-4 mb-6">Do you have more questions?</h2>
            <p className="text-gray-600 mb-8">Common topics are collected here. If your question isn't answered, please contact our Customer Support team.</p>
            <button className="text-green-600 font-semibold hover:text-green-700 mb-8">Visit support →</button>

            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-semibold">Is it free to open an account?</span>
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-semibold">Is account maintenance free?</span>
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-semibold">Do you keep my money segregated?</span>
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <button className="flex justify-between items-center w-full text-left">
                  <span className="font-semibold">Why do I have to upload documents during registration?</span>
                  <ChevronDownIcon className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>
          </div>

          {/* Information Section */}
          <div>
            <span className="text-sm bg-gray-100 rounded-full px-3 py-1 text-gray-700">Information</span>
            <h2 className="text-3xl font-bold mt-4 mb-6">See our recent technical announcements</h2>
            <p className="text-gray-600 mb-8">Dates and details on: rollovers, holidays, dividends, trade halts and more.</p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <h3 className="font-semibold mb-2">Technical maintenance 22.08.2025</h3>
                <button className="text-green-600 font-semibold hover:text-green-700 text-sm">Read more →</button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <h3 className="font-semibold mb-2">Rollovers, holidays and dividends in the following week:</h3>
                <button className="text-green-600 font-semibold hover:text-green-700 text-sm">Read more →</button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <h3 className="font-semibold mb-2">MAKER close only</h3>
                <button className="text-green-600 font-semibold hover:text-green-700 text-sm">Read more →</button>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
                <h3 className="font-semibold mb-2">Rollover on LSGASOIL, NATGAS, OIL, VIET30, WHEAT</h3>
                <button className="text-green-600 font-semibold hover:text-green-700 text-sm">Read more →</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
