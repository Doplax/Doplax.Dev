import React from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

const Contacto = () => {
  return (
   <>
   <Header/>
     <div className="mx-auto max-w-4xl py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <p className="text-lg mb-8">
        ¿Tienes alguna pregunta o comentario sobre mis proyectos? ¡Contáctame usando el formulario de abajo!
      </p>
      <div className="flex justify-center">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdSiAhhlDMLmciEZoc9BvrMgjaj0IUR6q4dxGlQEL14KDazKw/viewform?usp=sf_link"
          width="100%"
          height="600"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Cargando…
        </iframe>
      </div>
      <p className="text-lg mt-8">
        O si lo prefieres, puedes contactarme directamente en:
      </p>
      <ul className="text-lg">
        <li className="mb-2">Correo electrónico: ejemplo@ejemplo.com</li>
        <li>Teléfono: 555-555-5555</li>
      </ul>
    </div>
    <Footer/>
   </>
  );
};

export default Contacto;
