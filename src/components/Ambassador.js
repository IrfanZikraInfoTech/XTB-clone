import React, { useState } from 'react';

const Ambassador = () => {
  const [hoveredImage, setHoveredImage] = useState(null);

  const galleryImages = [
    {
      id: 1,
      src: '/zlatan-gallery-1.jpg',
      alt: 'Zlatan with phone',
      description: 'Zlatan holding white smartphone'
    },
    {
      id: 2,
      src: '/zlatan-gallery-2.jpg',
      alt: 'Zlatan with XTB app',
      description: 'Zlatan showing XTB app on phone'
    },
    {
      id: 3,
      src: '/zlatan-gallery-3.jpg',
      alt: 'Zlatan portrait',
      description: 'Zlatan portrait with phone'
    },
    {
      id: 4,
      src: '/zlatan-gallery-4.jpg',
      alt: 'Zlatan pointing',
      description: 'Zlatan pointing gesture'
    },
    {
      id: 5,
      src: '/zlatan-gallery-5.jpg',
      alt: 'Zlatan close up',
      description: 'Zlatan close up portrait'
    },
    {
      id: 6,
      src: '/zlatan-gallery-6.jpg',
      alt: 'Zlatan full body',
      description: 'Zlatan full body shot'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            XTB Brand Ambassador
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Now money works for Zlatan,<br />
            not Zlatan for money
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Persistence, perseverance, the desire to constantly develop and achieve
            the best possible results - these are qualities that should characterize
            both a good athlete and a good investor.
          </p>
          <div className="mt-12">
            <img 
              src="/zlatan-hero.jpg" 
              alt="Zlatan Ibrahimović" 
              className="w-64 h-64 mx-auto rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Press Release Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Press release
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome Zlatan!
              </h2>
            </div>
            <div className="md:col-span-2">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Zlatan Ibrahimović is one of the world's best strikers, known for his unique technique and acrobatic volleys. 
                  He has scored over 570 goals and has over 120 million social media followers globally.
                </p>
                <p>
                  The cooperation with Zlatan Ibrahimović is a natural extension of XTB's marketing strategy, 
                  aiming to bridge the world of professional athletes with investing and finance.
                </p>
                <p>
                  "We are excited to welcome Zlatan as our global brand ambassador," says Omar Arnaout, CEO of XTB. 
                  "His charisma, discipline, and energy perfectly align with our values. Like Zlatan, XTB has been 
                  working hard and devoted to excellence for the last 20 years."
                </p>
                <p>
                  Zlatan will be the face of XTB's marketing campaigns, endorsing investment products on their online 
                  platform and mobile app. In the fall of 2024, Zlatan will appear in advertisements introducing 
                  a new positioning: "Where your money works".
                </p>
              </div>
              <button className="mt-8 text-gray-600 hover:text-gray-900 font-medium flex items-center">
                Show more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Promo Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  At XTB money works<br />
                  for Zlatan
                </h3>
                <button className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
              <div className="relative">
                <img 
                  src="/zlatan-video.jpg" 
                  alt="Zlatan Ibrahimović" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Hover Animation */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`relative overflow-hidden rounded-lg transition-all duration-500 ${
                  hoveredImage === image.id 
                    ? 'col-span-2 row-span-2 z-10 scale-110' 
                    : hoveredImage && hoveredImage !== image.id 
                      ? 'opacity-30 scale-95' 
                      : 'opacity-100 scale-100'
                }`}
                onMouseEnter={() => setHoveredImage(image.id)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                {hoveredImage === image.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-end p-4">
                    <p className="text-white text-sm font-medium">{image.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Q&A
              </div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Zlatan Ibrahimović<br />
                talks about football<br />
                and business
              </h2>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">
                  Do you see any similarities between football, business, and investment?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Regardless if it's about business or football, you should have one goal - be the best at what you do. 
                  This approach works in football and can be applied to any aspect of your life.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">
                  You are a role model not only as an athlete but also as a businessman and investor. 
                  What do you think determines business success? Do you see any similarities between sports and doing business?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Success results from hard work. There are no shortcuts. Hard work pays off in sports and business. 
                  Make sure to surround yourself with good people who bring positive energy.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">
                  Your sports career demonstrates that you mentally won many matches even before entering the pitch. 
                  Do you agree that success depends on attitude?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  I 100% agree. Your mindset and attitude are the foundation of your success. Every person needs to 
                  find the key to unlocking this attitude to perform their absolute best.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">
                  Many individuals are hesitant to discuss finances openly. Do you believe there is still a taboo 
                  around discussing money matters?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Money should not be a taboo subject. Financial education is crucial for everyone. 
                  The more we talk about it openly, the more people can make informed decisions about their future.
                </p>
              </div>
              <button className="text-gray-600 hover:text-gray-900 font-medium flex items-center">
                Show more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-16">
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
              Open account
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">1.7 million+</div>
              <div className="text-gray-600">XTB Group Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">5 million+</div>
              <div className="text-gray-600">App downloads</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Years on the market with XTB Group</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">FSC</div>
              <div className="text-gray-600 underline decoration-dotted">Regulated by authorities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">2FA</div>
              <div className="text-gray-600">Secure Two Factor Authentication login</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ambassador;
