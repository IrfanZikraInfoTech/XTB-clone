import React, { useState } from 'react';

const ContactUs = () => {
  const [expandedCountries, setExpandedCountries] = useState(['czech', 'hungary']);

  const toggleCountry = (countryKey) => {
    setExpandedCountries(prev => 
      prev.includes(countryKey) 
        ? prev.filter(key => key !== countryKey)
        : [...prev, countryKey]
    );
  };

  const countriesData = [
    {
      key: 'czech',
      name: 'Česká republika',
      flag: '🇨🇿',
      expanded: expandedCountries.includes('czech'),
      contactInfo: {
        branch: {
          company: 'XTB S.A. ORGANIZAČNÍ SLOŽKA',
          address: 'Boudníkova 2506/3',
          city: '180 00 Praha 8-Libeň'
        },
        accountOpening: '+420 800 900 110',
        office: ['+420 226 259 902', '+420 226 259 990'],
        marketing: '+420 736 224 319',
        chatSupport: '+420 228 884 063'
      }
    },
    {
      key: 'hungary',
      name: 'Magyarország',
      flag: '🇭🇺',
      expanded: expandedCountries.includes('hungary'),
      contactInfo: {
        branch: {
          company: 'XTB S.A.',
          address: 'Prosta 67',
          city: '00-838 Varsó'
        },
        accountOpening: '+36 1 700 8713',
        office: '+48 22 201 95 50',
        chatSupport: '+36 1 700 8349'
      }
    },
    {
      key: 'italy',
      name: 'Italia',
      flag: '🇮🇹',
      expanded: expandedCountries.includes('italy'),
      contactInfo: {
        branch: {
          company: 'XTB S.A.',
          address: 'ul. Prosta 67',
          city: '00-838 Warszawa'
        },
        accountOpening: '+48 228738854',
        office: '+48 22 2019550',
        chatSupport: '+39 0684009647',
        additionalInfo: 'XTB clients will be contacted only and exclusively via email and telephone. We do not use any other means of communication with our clients. We invite you to contact sales.it@xtb.it in case of doubts or for further information.'
      }
    },
    {
      key: 'latinAmerica',
      name: 'América Latina',
      flag: '🌍',
      expanded: expandedCountries.includes('latinAmerica'),
      contactInfo: {
        branch: {
          company: 'XTB INTERNATIONAL LIMITED (FSC)',
          address: 'Av. Apoquindo 4501, Of 1604 - Las Condes',
          city: 'Santiago, Chile'
        },
        countries: {
          mexico: '+52 5541708767',
          colombia: '+57 6015800534',
          brazil: '+55 1142103750',
          argentina: '+54 1151685731',
          chile: '+56 232629600',
          peru: '+51 80056360'
        }
      }
    },
    {
      key: 'arabic',
      name: 'Arabic / عربي',
      flag: '🌍',
      expanded: expandedCountries.includes('arabic'),
      contactInfo: {
        branch: {
          company: 'XTB INTERNATIONAL LIMITED (FSC)',
          address: '35 Barrack Road, 3rd Floor',
          city: 'Belize City, Belize, C.A'
        },
        accountOpening: '+357 257 25356',
        chatSupport: '+48 222 739 976'
      }
    },
    {
      key: 'cyprus',
      name: 'Cyprus',
      flag: '🇨🇾',
      expanded: expandedCountries.includes('cyprus'),
      contactInfo: {
        branch: {
          company: 'XTB LIMITED',
          address: 'Pikioni 10, Building: Highsight Rentals Ltd',
          city: '3075, Limassol, Cyprus'
        },
        accountOpening: '+357 25725351',
        office: '+357 25724350',
        chatSupport: '+357 25725352'
      }
    },
    {
      key: 'poland',
      name: 'Polska',
      flag: '🇵🇱',
      expanded: expandedCountries.includes('poland'),
      contactInfo: {
        branch: {
          company: 'XTB S.A.',
          address: 'ul. Prosta 67',
          city: '00-838 Warszawa'
        },
        accountOpening: '+48 22 201 95 70',
        office: '+48 22 201 95 50',
        chatSupport: '+48 22 273 99 60',
        chatSupportText: 'Chat',
        marketing: 'marketing@xtb.pl',
        mediaContact: '+48 666 891 149'
      }
    },
    {
      key: 'finvest',
      name: 'XTB International em colaboração com Finvest DTVM',
      flag: '🌍',
      expanded: expandedCountries.includes('finvest'),
      contactInfo: {
        branch: {
          company: 'XTB International em colaboração com Finvest DTVM',
          address: '35 Barrack Road',
          city: 'Belize City, C.A.'
        },
        finvestAddress: 'Av. Brigadeiro Faria Lima, 2355 e 2369 - 15º andar, São Paulo/SP - Brasil',
        accountOpening: '+55 1142103750'
      }
    },
    {
      key: 'portugal',
      name: 'Portugal',
      flag: '🇵🇹',
      expanded: expandedCountries.includes('portugal'),
      contactInfo: {
        branch: {
          company: 'XTB S.A. SUCURSAL EM PORTUGAL',
          address: 'Praça Duque de Saldanha, Edifício Atrium Saldanha, Piso 9 Fração A',
          city: '1050-094 Lisboa'
        },
        accountOpening: '+351 211 222 980',
        office: '+351 211 222 980'
      }
    },
    {
      key: 'germany',
      name: 'Deutschland',
      flag: '🇩🇪',
      expanded: expandedCountries.includes('germany'),
      contactInfo: {
        branch: {
          company: 'XTB S.A. GERMAN BRANCH',
          address: 'Joachimsthaler Straße 10',
          city: '10719 Berlin'
        },
        accountOpening: '+49 (0) 30 3149 4490',
        chatSupport: '+49 (0) 30 3149 4490',
        marketing: 'Montag bis Freitag 9 bis 18 Uhr (Monday to Friday 9 AM to 6 PM)',
        chatSupportText: '24/5'
      }
    },
    {
      key: 'slovakia',
      name: 'Slovensko',
      flag: '🇸🇰',
      expanded: expandedCountries.includes('slovakia'),
      contactInfo: {
        branch: {
          company: 'XTB S.A. ORGANIZAČNÁ ZLOŽKA',
          address: 'Mlynské Nivy 5',
          city: '821 09 Bratislava'
        },
        accountOpening: '+421 800 900 110',
        office: ['+421 220 512 540', '+421 220 512 550'],
        marketing: '+420 226 259 975',
        chatSupport: '+421 233 006 951'
      }
    },
    {
      key: 'romania',
      name: 'România',
      flag: '🇷🇴',
      expanded: expandedCountries.includes('romania'),
      contactInfo: {
        branch: {
          company: 'XTB S.A. VARSOVIA SUCURSALA BUCURESTI',
          address: 'Sucursala Bucuresti Bulevardul Eroilor, nr. 18, sector 5',
          city: 'Bucuresti, Romania'
        },
        accountOpening: '+40 31 425 54 92',
        office: '+40 31 425 54 90 (office@xtb.ro)',
        chatSupport: '+40 31 425 54 93',
        marketing: '+40 749 103 000'
      }
    },
    {
      key: 'france',
      name: 'France',
      flag: '🇫🇷',
      expanded: expandedCountries.includes('france'),
      contactInfo: {
        branch: {
          company: 'XTB S.A. SUCCURSALE FRANÇAISE',
          address: '20 avenue André Prothin',
          city: '92927 Paris La Défense Cedex, France'
        },
        office: '+33 1 53 89 20 10',
        marketing: '+33 1 53 89 60 30',
        chatSupport: '+33 1 53 89 63 30',
        accountOpening: '+33 1 53 89 60 30'
      }
    },
    {
      key: 'spain',
      name: 'España',
      flag: '🇪🇸',
      expanded: expandedCountries.includes('spain'),
      contactInfo: {
        branch: {
          company: 'XTB S.A. SUCURSAL EN ESPAÑA',
          address: 'Edificio Iberia Mart I Calle Pedro Teixeira 8, 6ª Planta',
          city: '28020-Madrid'
        },
        office: '+34 915 706 705',
        marketing: '+34 915 706 705 (marketing@xtb.es, Extensión 3)',
        chatSupport: '+34 915 706 705 (support@xtb.es, Extensión 2)',
        accountOpening: '+34 915 706 705 (sales@xtb.es, Extensión 1)',
        mediaContact: 'comunicacion@xtb.es',
        legal: 'compliance@xtb.es'
      }
    },
    {
      key: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      expanded: expandedCountries.includes('uk'),
      contactInfo: {
        branch: {
          company: 'XTB LIMITED',
          address: 'Level 9, One Canada Square Canary Wharf',
          city: 'E14 5AA, London United Kingdom'
        },
        accountOpening: '+44 2036953085',
        marketing: '+44 2036953087',
        office: '+44 2036953085',
        chatSupport: '+44 2036953086'
      }
    },
    {
      key: 'thailand',
      name: 'Thailand',
      flag: '🇹🇭',
      expanded: expandedCountries.includes('thailand'),
      contactInfo: {
        branch: {
          company: 'XTB INTERNATIONAL LIMITED (FSC)',
          address: '35 Barrack Road, 3rd Floor',
          city: 'Belize City, Belize, C.A'
        },
        accountOpening: '+66 6 0002 4059',
        chatSupport: '+66 2 026 1622'
      }
    },
    {
      key: 'vietnam',
      name: 'Vietnam',
      flag: '🇻🇳',
      expanded: expandedCountries.includes('vietnam'),
      contactInfo: {
        branch: {
          company: 'XTB INTERNATIONAL LIMITED (FSC)',
          address: '35 Barrack Road, 3rd Floor',
          city: 'Belize City, Belize, C.A'
        },
        accountOpening: '+84 2873067998',
        chatSupport: '+84 2873003301'
      }
    },
    {
      key: 'uae1',
      name: 'United Arab Emirates (English)',
      flag: '🇦🇪',
      expanded: expandedCountries.includes('uae1'),
      contactInfo: {
        branch: {
          company: 'XTB MENA Limited (DFSA)',
          address: 'Office 613, Level 6, Liberty House Building, DIFC',
          city: 'Dubai, UAE 482081'
        },
        office: '+971 43768200',
        marketing: '+971 43768201',
        chatSupport: '+971 43768202'
      }
    },
    {
      key: 'indonesia',
      name: 'Indonesia',
      flag: '🇮🇩',
      expanded: expandedCountries.includes('indonesia'),
      contactInfo: {
        branch: {
          company: 'XTB Indonesia',
          address: 'Treasury Tower, Lantai 09 Unit N, District 8 SCBD Lot 28, Jl. Jenderal Sudirman Kav. 52-53, Kelurahan Senayan, Kecamatan Kebayoran Baru',
          city: 'Jakarta Selatan 12190'
        },
        chatSupport: '021-50151888, support@xtb.id',
        complaints: '021 5032 3718, compliance@xtb.id, pengaduan.bappebti.go.id'
      }
    },
    {
      key: 'uae2',
      name: 'United Arab Emirates (English)',
      flag: '🇦🇪',
      expanded: expandedCountries.includes('uae2'),
      contactInfo: {
        branch: {
          company: 'XTB Financial Consultation LLC (SCA)',
          address: 'Unit 104, The Offices 5, One central, DWTC',
          city: 'Dubai, United Arab Emirates'
        },
        chatSupport: '+971 44905000',
        tollFree: '800 XTB UAE (800 983 823)'
      }
    },
    {
      key: 'chile',
      name: 'Chile',
      flag: '🇨🇱',
      expanded: expandedCountries.includes('chile'),
      contactInfo: {
        branch: {
          company: 'XTB Agente de Valores SpA (CMF)',
          address: 'Av. Apoquindo 4501, Of 1604 - Las Condes',
          city: 'Santiago, Chile'
        },
        chile: '+56 232629600',
        chatSupport: '+56 229141064'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Contact Card - Always Visible (like Image 1) */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Address & Map */}
            <div className="relative">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Contact us</h1>
                  <p className="text-gray-600 text-sm">Based on the branch that provides you with services</p>
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">XTB INTERNATIONAL LIMITED (FSC)</h2>
                <div className="text-gray-700 space-y-1">
                  <p>35 Barrack Road, 3rd Floor</p>
                  <p>Belize City, Belize, C.A</p>
                </div>
              </div>

              <div className="flex items-center text-green-600 hover:text-green-700 cursor-pointer">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="font-medium">Check how to get there</span>
              </div>

              {/* Background Map */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="w-full h-full bg-gray-200 rounded-lg"></div>
              </div>
            </div>

            {/* Right Column - Email & Phone Numbers */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-green-600 font-medium">sales_int@xtb.com</span>
              </div>

              <div>
                <h3 className="text-gray-700 font-medium mb-2">Account Opening</h3>
                <p className="text-gray-900 font-semibold">+357 257 25356</p>
              </div>

              <div>
                <h3 className="text-gray-700 font-medium mb-2">24/5 Chat Support</h3>
                <p className="text-gray-900 font-semibold">+48 222 739 976</p>
              </div>
            </div>
          </div>
        </div>

        {/* Countries Section */}
        <div className="p-2">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            As a Group, we are present in over a dozen countries around the world
          </h2>

          <div className="space-y-2">
            {countriesData.map((country) => (
              <div key={country.key} className="border-b border-gray-200">
                <button
                  onClick={() => toggleCountry(country.key)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">{country.flag}</span>
                    <span className="font-semibold text-gray-900">{country.name}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform ${
                      country.expanded ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {country.expanded && country.contactInfo && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <div className="grid md:grid-cols-2 gap-6 pt-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Branch:</h4>
                        <div className="text-gray-700 space-y-1">
                          <p>{country.contactInfo.branch.company}</p>
                          <p>{country.contactInfo.branch.address}</p>
                          <p>{country.contactInfo.branch.city}</p>
                        </div>
                        {country.contactInfo.finvestAddress && (
                          <div className="mt-3">
                            <h5 className="font-semibold text-gray-900 mb-1">FINVEST DTVM Address:</h5>
                            <p className="text-gray-700">{country.contactInfo.finvestAddress}</p>
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-3">
                        {country.contactInfo.accountOpening && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Account Opening:</h4>
                            <p className="text-gray-700">{country.contactInfo.accountOpening}</p>
                          </div>
                        )}
                        
                        {country.contactInfo.office && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Office:</h4>
                            {Array.isArray(country.contactInfo.office) ? (
                              country.contactInfo.office.map((phone, index) => (
                                <p key={index} className="text-gray-700">{phone}</p>
                              ))
                            ) : (
                              <p className="text-gray-700">{country.contactInfo.office}</p>
                            )}
                          </div>
                        )}
                        
                        {country.contactInfo.marketing && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Marketing:</h4>
                            <p className="text-gray-700">{country.contactInfo.marketing}</p>
                          </div>
                        )}
                        
                        {country.contactInfo.chatSupport && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">24/5 Chat Support:</h4>
                            <p className="text-gray-700">{country.contactInfo.chatSupport}</p>
                            {country.contactInfo.chatSupportText && (
                              <p className="text-gray-700">{country.contactInfo.chatSupportText}</p>
                            )}
                          </div>
                        )}

                        {country.contactInfo.mediaContact && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Contact for media:</h4>
                            <p className="text-gray-700">{country.contactInfo.mediaContact}</p>
                          </div>
                        )}

                        {country.contactInfo.legal && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Legal:</h4>
                            <p className="text-gray-700">{country.contactInfo.legal}</p>
                          </div>
                        )}

                        {country.contactInfo.complaints && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Customer complaints:</h4>
                            <p className="text-gray-700">{country.contactInfo.complaints}</p>
                          </div>
                        )}

                        {country.contactInfo.tollFree && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Toll free number:</h4>
                            <p className="text-gray-700">{country.contactInfo.tollFree}</p>
                          </div>
                        )}

                        {country.contactInfo.chile && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Chile:</h4>
                            <p className="text-gray-700">{country.contactInfo.chile}</p>
                          </div>
                        )}

                        {country.contactInfo.countries && (
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Contact by Country:</h4>
                            <div className="space-y-1">
                              <p className="text-gray-700"><strong>Mexico:</strong> {country.contactInfo.countries.mexico}</p>
                              <p className="text-gray-700"><strong>Colombia:</strong> {country.contactInfo.countries.colombia}</p>
                              <p className="text-gray-700"><strong>Brasil:</strong> {country.contactInfo.countries.brazil}</p>
                              <p className="text-gray-700"><strong>Argentina:</strong> {country.contactInfo.countries.argentina}</p>
                              <p className="text-gray-700"><strong>Chile:</strong> {country.contactInfo.countries.chile}</p>
                              <p className="text-gray-700"><strong>Peru:</strong> {country.contactInfo.countries.peru}</p>
                            </div>
                          </div>
                        )}

                        {country.contactInfo.additionalInfo && (
                          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                            <p className="text-gray-700 text-sm">{country.contactInfo.additionalInfo}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
