'use client'
import React, { useState } from 'react';
import style from "./Header.module.css"; // Asegúrate de tener este archivo CSS o ajustarlo según tu estructura de estilos
import { MenuButton } from './MenuButton/MenuButton'; // Asumiendo que tienes estos componentes en sus respectivos archivos
import { ModalMenu } from './ModalMenu/ModalMenu';

// Definición del menú
const menuItems = [
  { name: "Home", route: "/" },
  { name: "Blog", route: "/blog" },
  { name: "Chat", route: "/chatPage" },
  { name: "Work Experience", route: "/experience"},

];

// Componente Header principal
export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <header className="flex flex-wrap flex-row justify-between items-center p-5 md:flex-row">
      <Logo />
      <DesktopMenu menuItems={menuItems} />
      <MobileMenu 
        isModalOpen={isModalOpen} 
        toggleModal={toggleModal} 
        menuItems={menuItems} />
    </header>
  );
};

// Componente para el Logo
const Logo = () => (
  <a href="/" className={`${style.logo} ${style.navLink}`}>
    Doplax.Dev
  </a>
);

// Componente para el menú de escritorio
const DesktopMenu = ({ menuItems }) => (
  <nav className="hidden md:block">
    <ul className="flex flex-row text-center">
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href={item.route} className="text-lg md:text-base font-bold px-3">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

// Componente para el menú móvil
const MobileMenu = ({ isModalOpen, toggleModal, menuItems }) => (
  <nav className="md:hidden flex justify-center" >
    <MenuButton isOpen={isModalOpen} toggle={toggleModal} />
    <ModalMenu isOpen={isModalOpen} menuItems={menuItems} closeModal={toggleModal} />
  </nav>
);

