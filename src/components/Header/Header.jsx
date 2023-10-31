'use client'
import React from "react";

import style from './Header.module.css' // Para hacer el Logo con ::afet y ::Before
import { HambBtn } from './HambBtn/HambBtn'
//import "font-awesome/css/font-awesome.min.css";



const Header = () => {

  const menuLink = 'text-lg md:text-base font-bold  px-3 py-4';
  const menuItem = [
    {
      name: 'Blog',
      route: '/blog'
    },
    {
      name: 'Experience',
      route: '/experiencia'
    },
    {
      name: 'Chat',
      route: '/chatPage'
    },
  ]

  

  return (
    <>
  

      <header className="flex flex-wrap flex-row justify-between items-center md:flex-row ">
        {/* LOGO */}
        <a
          href="/"
          className={`${style.logo} ${style.navLink} `}> 
            Doplax.Dev 
        </a>

        {/* Mobile Menu */}
        <nav className="md:hidden">
          <HambBtn menuItem={menuItem}/>
        </nav>

        {/* Desktop Menu */}
        <nav className="hidden md:block">
          {/* Menú */}
          <ul className={"flex flex-row text-center"}>

            {menuItem.map((element,index) => (
              <li key={index}>
                <a
                  href={element.route}
                  className={menuLink}
                >
                  {element.name}
                </a>
              </li>
            ))}

          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
