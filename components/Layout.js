// components/Layout.js
import React from 'react';
import {Header} from './Header/Header';
import {Footer} from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  );
};

export { Layout };


//const Layout = ({ children }) => {
//  return (
//    <div className="flex flex-col min-h-screen"> {/* Añade las clases CSS aquí */}
//      <Header />
//      <main className="flex-grow">{children}</main> {/* Añade la clase CSS aquí */}
//      <Footer />
//    </div>
//  );
//};

//export { Layout };