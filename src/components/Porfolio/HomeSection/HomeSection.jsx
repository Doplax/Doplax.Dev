import React from 'react';
import { PageTitle } from '../../PageTitle';
//import styles from './styles.module.css'; // Asegúrate de importar los estilos adecuados

function HomeSection() {
    return (
        <section >
            {/* HOME */}

            {/* SOBRE MI */}
            <section className="py-10">
                
                    {/* Desktop Version */}
                    <PageTitle>Pol Valle</PageTitle>

                        <h1 className="hidden md:flex text-3xl font-bold mt-8">Sobre mi</h1>
                        <div className="hidden md:flex items-center">
                            <div className="flex-col">
                                <p className="text-lg  w-9/12 mb-5">
                                    Hola! Me llamo Pol, me considero un profesional muy versátil y multidisciplinar, con muchas ganas de
                                    aprender y de trabajar en un entorno dinámico y desafiante de desarrollo de software. <br />
                                    Poseo experiencia en el desarrollo de aplicaciones multiplataforma y web, y tengo conocimientos en la
                                    industria 4.0. <br />He participado en ferias, brindando apoyo al departamento comercial al presentar
                                    nuestros proyectos. <br />Estoy muy familiarizado con el trabajo en equipo y metodologías Agile,
                                    habiendo aplicado exitosamente esta metodología en proyectos anteriores y colaborando eficazmente en
                                    equipos.
                                </p>
                                <a
                                    href="/docs/CV-Pol-Valle.pdf"
                                    download="CV-Pol-Valle.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer" // Agrega esta línea para la seguridad del enlace
                                    type="button"
                                    className="inline-flex justify-center  rounded-full bg-orange-400 text-white px-6 py-3 text-xl font-bold text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Descargar CV
                                </a>
                            </div>
                            <img src="/img/pol-valle.webp"  alt="profile image" className="rounded-full h-80" />
                        </div>
                        {/* Mobile Version */}
                        <div className="flex md:hidden items-center p-8">
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold mt-8 text-center">Sobre mi</h1>
                                <img src="/img/pol-valle.webp" alt="profile image" className="rounded-full scale-75" />
                                <p className="text-lg  mb-5">
                                    Hola! Me llamo Pol, me considero un profesional muy versátil y multidisciplinar, con muchas ganas de
                                    aprender y de trabajar en un entorno dinámico y desafiante de desarrollo de software. <br />
                                    Poseo experiencia en el desarrollo de aplicaciones multiplataforma y web, y tengo conocimientos en la
                                    industria 4.0. <br />He participado en ferias, brindando apoyo al departamento comercial al presentar
                                    nuestros proyectos. <br />Estoy muy familiarizado con el trabajo en equipo y metodologías Agile,
                                    habiendo aplicado exitosamente esta metodología en proyectosanteriores y colaborando eficazmente en equipos.
                                </p>
                                <a
                                    href="/docs/CV-Pol-Valle.pdf"
                                    download="CV-Pol-Valle.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer" // Agrega esta línea para la seguridad del enlace
                                    type="button"
                                    className="inline-flex justify-center  rounded-full  bg-orange-400 px-6 py-3 text-xl font-bold text-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Descargar CV 
                                </a>
                            </div>
                        </div>
            </section>
        </section>
    );
}

export { HomeSection };
