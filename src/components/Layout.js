import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingChatButton from './FloatingChatButton';
import ClientSection from './ClientSection';

const Layout = ({ children }) => {
  return (
    <div className="font-sans text-gray-900 bg-white">
      <Header />
      <main>
        {children}
      </main>
      <ClientSection />
      <Footer />
      <FloatingChatButton />
    </div>
  );
};

export default Layout;
