import React from 'react';
import { Header } from '../components/Header/Header';
import { Formulario } from '../components/Formulario/Formulario';

import { Footer } from '../components/Footer/Footer';

const Contacto = () => {
  return (
   <>
   <Header/>
    <div className="mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
      <Formulario/>  
    </div>
  <Footer/>
   </>
  );
};

export default Contacto;
