import React from "react";
import styles from "./Porfolio.module.css";
import { PageTitle } from "../PageTitle";
//import { HomeSection } from "./HomeSection/HomeSection";
import { SkillSection } from "./SkillsSection/SkillSection";
import { ProyectosSection } from "./ProyectosSection/ProyectosSection";
import { ServiciosSection } from "./ServiciosSection/ServiciosSection";


const Portfolio = () => {


    return (
        <>
            {/*<HomeSection/>*/}
            <main id={styles.main}>
                {/* HOME */}
                
                {/* SOBRE MI */}
                <div className="py-10">
                <div>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <PageTitle>Pol Valle</PageTitle>
                    </div>
                </div>
                <main>
                    {/* Desktop Version */}
                    <div className="mx-auto sm:px-6 lg:px-8">
                        <h1 className="hidden md:flex text-3xl font-bold mt-8">Sobre mi</h1>
                        <div className="hidden md:flex items-center">
                            <div className="flex-col">
                                <p className="text-lg  w-9/12 mb-5">
                                Hola! Me llamo Pol, me considero un profesional muy versátil y multidisciplinar, con muchas ganas de aprender y de trabajar en un entorno dinámico y desafiante de desarrollo de software. 
                                <br/>Poseo experiencia en el desarrollo de aplicaciones multiplataforma y web, y tengo conocimientos en la industria 4.0. 
                                <br/>He participado en ferias, brindando apoyo al departamento comercial al presentar nuestros proyectos. 
                                <br/>Estoy muy familiarizado con el trabajo en equipo y metodolgías Agile, habiendo aplicado exitosamente esta metodología en proyectos anteriores y colaborando eficazmente en equipos."
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/pol-valle-montes/"
                                    target="_blank"
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-xl font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Descargar CV
                                </a>
                            </div>
                            <img
                                src="/img/foto-pol.png"
                                alt="profile image"
                                className="rounded-full"
                            />
                        </div>
                        {/* Mobile Version */}
                        <div className="flex md:hidden items-center p-8">
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold mt-8 text-center">
                                    Sobre mi
                                </h1>
                                <img
                                    src="/img/foto-pol.png"
                                    alt="profile image"
                                    className="rounded-full scale-75"
                                />
                                <p className="text-lg  w-9/12 mb-5">
                                Hola! Me llamo Pol, me considero un profesional muy versátil y multidisciplinar, con muchas ganas de aprender y de trabajar en un entorno dinámico y desafiante de desarrollo de software. 
                                <br/>Poseo experiencia en el desarrollo de aplicaciones multiplataforma y web, y tengo conocimientos en la industria 4.0. 
                                <br/>He participado en ferias, brindando apoyo al departamento comercial al presentar nuestros proyectos. 
                                <br/>Estoy muy familiarizado con el trabajo en equipo y metodolgías Agile, habiendo aplicado exitosamente esta metodología en proyectos anteriores y colaborando eficazmente en equipos."
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/pol-valle-montes/"
                                    target={"_blank"}
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Linkedin
                                </a>
                            </div>
                        </div>   
                    </div>
                </main>
                </div>


                <ProyectosSection/>
                <SkillSection/>
                <ServiciosSection/>
                

            </main>
        </>
    );
};

export { Portfolio };
