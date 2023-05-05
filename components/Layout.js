/*
Se encarga de cargar el contenido de los ficheros del blog, este fichero se carga en pages/[slug].js
 */
// components/Layout.js
import React from 'react';
import {Header} from './Header/Header';
import {Footer} from './Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      <Footer />
    </>
  );
};

export { Layout };


