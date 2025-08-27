import React from 'react';

const ClientSection = () => {
    return (
        <section className="bg-white py-12 sm:py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="bg-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                        {/* Left Section - Text Content */}
                        <div className="text-center lg:text-left order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 leading-tight px-2">
                                Join over 1 700 000 XTB Group Clients from around the world
                            </h2>
                            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                                Start trading
                            </button>
                        </div>

                        {/* Right Section - Image */}
                        <div className="flex justify-center order-1 lg:order-2">
                            <img
                                src="/kv-banner-logo-desktop.jpeg"
                                alt="XTB Group Clients and Brand Icons"
                                className="w-full h-auto object-contain max-w-sm lg:max-w-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientSection;
