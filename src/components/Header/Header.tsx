'use client'
import React, { useState } from 'react';
import style from "./Header.module.css"; // Asegúrate de tener este archivo CSS o ajustarlo según tu estructura de estilos
import { MenuButton } from './MenuButton/MenuButton'; // Asumiendo que tienes estos componentes en sus respectivos archivos
import { ModalMenu } from './ModalMenu/ModalMenu';
import Link from 'next/link';


// INTERFACES
interface MenuItem {
  name: string,
  route: string
}

const menuItems:MenuItem[] = [
  { name: "Home", route: "/" },
  { name: "Blog", route: "/blog" },
  { name: "Chat", route: "/chatPage" },
  { name: "Work Experience", route: "/experience"},
];

// MAIN COMPONENT
interface HeaderProps {
  className: string;
}
export const Header: React.FC<HeaderProps>  = ({className}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <header className={`flex flex-wrap sticky flex-row justify-between items-center p-5 md:flex-row ${className}`}>
      <Logo />
      <DesktopMenu menuItems={menuItems} />
      <MobileMenu 
        isModalOpen={isModalOpen} 
        toggleModal={toggleModal} 
        menuItems={menuItems} />
    </header>
  );
};

// DesktopMenu
interface DesktopMenuProps {
  menuItems: MenuItem[]
}

const DesktopMenu: React.FC<DesktopMenuProps>= ({ menuItems }) => (
  <nav className="hidden md:block">
    <ul className="flex flex-row text-center">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link href={item.route} className="text-lg md:text-base font-bold px-3">
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);


// MobileMenu
interface MobileMenuProps {
  isModalOpen: boolean;
  toggleModal: () => void;
  menuItems: MenuItem[];
}

const MobileMenu:  React.FC<MobileMenuProps> = ({ isModalOpen, toggleModal, menuItems }) => (
  <nav className="md:hidden flex justify-center" >
    <MenuButton isOpen={isModalOpen} toggle={toggleModal} />
    <ModalMenu isOpen={isModalOpen} menuItems={menuItems} closeModal={toggleModal} />
  </nav>
);

// Componente para el Logo
const Logo = () => (
  <a href="/" className={`${style.logo} ${style.navLink}`}>
    Doplax.Dev
  </a>
);