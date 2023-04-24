import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 py-6">
      <div className="container mx-auto flex justify-between items-center px-4">
            <a href="/" className="text-white hover:rounded-full hover:bg-gray-300 hover:text-gray-800 px-3 py-2 transition-all duration-300">
                <h1 className="text-white font-bold text-xl">Mi sitio web</h1>
            </a>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/sobreMi" className="text-white hover:rounded-full hover:bg-gray-300 hover:text-gray-800 px-3 py-2 transition-all duration-300">Sobre Mi</a>
            </li>
            <li>
              <a href="/habilidades" className="text-white hover:rounded-full hover:bg-gray-300 hover:text-gray-800 px-3 py-2 transition-all duration-300">Habilidades</a>
            </li>
            <li>
              <a href="/contacto" className="text-white hover:rounded-full hover:bg-gray-300 hover:text-gray-800 px-3 py-2 transition-all duration-300">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export { Header };
