import React from 'react';

const ClientSection = () => {
    return (
        <section className="bg-white py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="bg-black rounded-3xl p-12 text-white shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Section - Text Content */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                Join over 1 700 000 XTB Group Clients from around the world
                            </h2>
                            <button className="px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                Start trading
                            </button>
                        </div>

                        {/* Right Section - Image */}
                        <div className="flex justify-center">
                            <img
                                src="/kv-banner-logo-desktop.jpeg"
                                alt="XTB Group Clients and Brand Icons"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientSection;
