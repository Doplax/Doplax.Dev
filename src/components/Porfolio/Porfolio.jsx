'use client'
import React from "react";
import styles from "./Porfolio.module.css";
import { PageTitle } from "../PageTitle";
import { HomeSection } from "./HomeSection/HomeSection";
import { SkillSection } from "./SkillsSection/SkillSection";
import { ProyectosSection } from "./ProyectosSection/ProyectosSection";
import { ServiciosSection } from "./ServiciosSection/ServiciosSection";
import { Formulario } from "./Formulario/Formulario";


const Portfolio = () => {


    return (
        <>
            <HomeSection/>
            <SkillSection/>
            <ServiciosSection/>
            <ProyectosSection/>
            <Formulario/>
        </>
    );
};

export { Portfolio };
