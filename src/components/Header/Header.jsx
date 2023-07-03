import React  from "react";
import Head from "next/head";
import style from './Header.module.css' // Para hacer el Logo con ::afet y ::Before
import { HambBtn } from '@/components/UX/HambBtn/HambBtn'
//import "font-awesome/css/font-awesome.min.css";



const Header = () => {

  return (
    <>
      <Head>
        <title className= "logo">Doplax.Dev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/img/icon/site-icon.png"/>
      </Head>
      
      <header className="flex flex-wrap flex-row w-full justify-around items-center md:flex-row mx-0">
          {/* LOGO */}
          <a
            href="/"
            className={`${style.logo} ${style.navLink} `}
          > Doplax.Dev </a>
          
          <nav>
            <HambBtn/>
          </nav>
      </header>
    </>
  );
};

export { Header };
