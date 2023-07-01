import React  from "react";
import Head from "next/head";
import style from './Header.module.css' // Para hacer el Logo con ::afet y ::Before
import { HambBtn } from '@/components/UX/HambBtn/HambBtn'
//import "font-awesome/css/font-awesome.min.css";



const Header = () => {

  const menuLink = 'underLine_gAnimation hover:text-white text-gray-400 text-sm md:text-base font-bold  px-3 py-2'
  return (
    <>
      <Head>
        <title className= "logo">Doplax.Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/icon/site-icon.png"/>
      </Head>
      
      <header className="flex flex-wrap flex-col w-full justify-around items-center md:flex-row mx-0">
          {/* LOGO */}
          <a
            href="/"
            className={`${style.logo} ${style.navLink} `}
          > Doplax.Dev </a>
          <HambBtn/>
          <nav>
            {/* Botón hamburguesa */}
            {/*<button
              className="block lg:hidden text-white focus:outline-none"
              onClick={toggleMenu}
            >
              BURGUER
            </button>*/}

            {/* Menú */}
            <ul
              //className={`${isMenuOpen ? "block" : "hidden"} lg:flex lg:space-x-4 space-y-2 lg:space-y-0`}
              className={"flex "}
            >

            {/* Home */}
              {/*<li>
                <a
                  href="/"
                  className={menuLink}
                >
                  Home
                </a>
              </li>*/}
              
              <li>
                <a
                  href="/blog"
                  className={menuLink}
                  
                >
                  Blog
                </a>
              </li>

              <li>
                <a
                  href="/experiencia"
                  className={menuLink}
                >
                  Experiencia
                </a>
              </li>
              <li>
                <a href="/chatPage"
                  className={menuLink}
                > Chat </a>
              </li>

            </ul>
          </nav>
      </header>
    </>
  );
};

export { Header };
