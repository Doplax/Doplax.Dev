'use client'
import React from "react";
import styles from "./Porfolio.module.css";
import { PageTitle } from "../PageTitle";
import { HomeSection } from "./HomeSection/HomeSection";
import { SkillSection } from "./SkillsSection/SkillSection";
import { ProyectosSection } from "./ProyectosSection/ProyectosSection";
import { ServiciosSection } from "./ServiciosSection/ServiciosSection";
 

const Portfolio = () => {


    return (
        <>
            <HomeSection/>
            <SkillSection/>
            <ProyectosSection/>
            <ServiciosSection/>
        </>
    );
};

export { Portfolio };
