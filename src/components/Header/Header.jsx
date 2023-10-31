"use client";
import React from "react";
import Head from "next/head";
import style from './Header.module.css' // Para hacer el Logo con ::afet y ::Before
import { HambBtn } from './HambBtn/HambBtn'
//import "font-awesome/css/font-awesome.min.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";

const Header = () => {
  const menuLink = "text-lg md:text-base font-bold  px-3 py-4";
  const menuItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Blog",
      route: "/blog",
    },
    {
      name: "Experience",
      route: "/experiencia",
    },
    {
      name: "Chat",
      route: "/chatPage",
    },
  ];

  return (
    <>
      {/* Desktop Menu */}
      <header className="hidden md:flex flex-wrap flex-row justify-between items-center md:flex-row ">
        {/* LOGO */}
        <a href="/" className={`${style.logo} ${style.navLink} `}>
         
          Doplax.Dev
        </a>

        {/* Mobile Menu */}
        <nav className="md:hidden">
          <HambBtn />
        </nav>

        {/* Desktop Menu */}
        <nav className="">
          
          {/* Menú */}
          <ul className={"flex flex-row text-center"}>
            {menuItems.map((element, index) => (
              <li key={index}>
                
                <a href={element.route} className={menuLink}>
                  
                  {element.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      
      {/* Mobile Menu */}
      <div className="md:hidden">
      <Navbar
        shouldHideOnScroll
        >
        <NavbarContent justify="start">
          <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent className=" pr-3" justify="center">
          <NavbarBrand>
            {/* LOGO */}
            <a href="/" className={`${style.logo} ${style.navLink} `}>
              Doplax.Dev
            </a>
          </NavbarBrand>
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "warning"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href={item.route}
                size="lg"
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      </div>
      
    </>
  );
};

export { Header };


