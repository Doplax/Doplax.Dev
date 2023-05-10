// components/Layout.js
import React from 'react';
import {Header} from './Header/Header';
import {Footer} from './Footer/Footer';


const Layout = ({ children }) => {
  return (
    <>
      <Header />
        {/* El hancho del contenedor */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      <Footer />
    </>
  );
};

export { Layout };


/** DOCUMENTACIÓN
 * Layout
 *
 * Este componente se encarga de cargar y organizar el contenido principal de la aplicación,
 * incluyendo encabezado (Header) y pie de página (Footer). Este archivo es utilizado
 * en la página `pages/[slug].js`.
 *
 * Uso:
 *
 * Importación del componente:
 *   import { Layout } from './components/Layout';
 *
 * Uso en la estructura de la aplicación:
 *   <Layout>
 *     <ComponentePrincipal />
 *   </Layout>
 *
 * Propiedades:
 *
 * - children (ReactNode): El contenido principal de la aplicación que será renderizado
 *                         entre el encabezado y el pie de página.
 */
