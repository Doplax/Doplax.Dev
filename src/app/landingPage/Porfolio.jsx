"use client";
import { HomeSection } from "./components/HomeSection/HomeSection";
import { SkillSection } from "./components/SkillsSection/SkillSection";
import { ProyectosSection } from "./components/ProyectosSection/ProyectosSection";
import { ServiciosSection } from "./components/ServiciosSection/ServiciosSection";

const Portfolio = () => {
  return (
    <>
      <HomeSection />
      <SkillSection />
      <ProyectosSection />
      <ServiciosSection />
    </>
  );
};

export { Portfolio };
