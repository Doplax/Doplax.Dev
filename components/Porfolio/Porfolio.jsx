import React from "react";
import styles from "./Porfolio.module.css";
import { PageTitle } from "../PageTitle";
import { HomeSection } from "./HomeSection/HomeSection";
import { SkillSection } from "./SkillsSection/SkillSection";
import { ProyectosSection } from "./ProyectosSection/ProyectosSection";


const Portfolio = () => {
  

    return (
        <>
            <HomeSection/>
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
                    <div className="mx-auto max-w-6xl sm:px-6 lg:px-8">
                        <h1 className="hidden md:flex text-3xl font-bold mt-8">Sobre mi</h1>
                        <div className="hidden md:flex items-center">
                            <div className="flex-col">
                                <p className="text-lg  w-9/12 mb-5">
                                    Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                                    relleno estándar de las industrias desde el año 1500, cuando
                                    un impresor (N. del T. persona que se dedica a la imprenta)
                                    desconocido usó una galería de textos y los mezcló de tal
                                    manera que logró hacer un libro de textos especimen. No sólo
                                    sobrevivió 500 años, sino que tambien ingresó como texto de
                                    relleno en documentos electrónicos, quedando esencialmente
                                    igual al original. Fue popularizado en los 60s con la creación
                                    de las hojas "Letraset", las cuales contenian pasajes de Lorem
                                    Ipsum, y más recientemente con software de autoedición, como
                                    por ejemplo Aldus PageMaker, el cual incluye versiones de
                                    Lorem Ipsum.
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/pol-valle-montes/"
                                    target="_blank"
                                    type="button"
                                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Linkedin
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
                                <p className="flex items-center pt-6 pb-4 text-lg">
                                    Lorem Ipsum es simplemente el texto de relleno de las
                                    imprentas y archivos de texto. Lorem Ipsum ha sido el texto de
                                    relleno estándar de las industrias desde el año 1500, cuando
                                    un impresor (N. del T. persona que se dedica a la imprenta)
                                    desconocido usó una galería de textos y los mezcló de tal
                                    manera que logró hacer un libro de textos especimen. No sólo
                                    sobrevivió 500 años, sino que tambien ingresó como texto de
                                    relleno en documentos electrónicos, quedando esencialmente
                                    igual al original. Fue popularizado en los 60s con la creación
                                    de las hojas "Letraset", las cuales contenian pasajes de Lorem
                                    Ipsum, y más recientemente con software de autoedición, como
                                    por ejemplo Aldus PageMaker, el cual incluye versiones de
                                    Lorem Ipsum.
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/jose-ram%C3%B3n-montes-hermida-a8a635193/"
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

                {/* SERVCICIOS */}
                <section id={styles.servicios__section} className={styles.section}>
            <PageTitle>SERVICIOS</PageTitle>
            <div className="services__grid">
            <div className="services__item">
                <i className="fa-solid fa-mobile-screen-button"></i>
                <h3>Sitios Responsive</h3>
                <p>Su sitio se mostrará correctamente en cualquier dispositivo, computadoras, tabletas y teléfonos móviles.</p>
            </div>
            <div className="services__item">
                <i className="fa-solid fa-pen-ruler"></i>
                <h3>Diseños creativos</h3>
                <p>Un buen y atractivo diseño web lo ayuda a mantener potenciales clientes en su sitio, que es la cara digital de su negocio.</p>
            </div>
            <div className="services__item">
                <i className="fa-solid fa-code"></i>
                <h3>Desarrollo</h3>
                <p>Conozco la importancia del diseño web y puedo ayudarte a crear un sitio web que te encantará.</p>
            </div>
            <div className="services__item">
                <i className="fa-solid fa-thumbs-up"></i>
                <h3>Integración de redes sociales</h3>
                <p>Existen muchas plataformas sociales, y debe promover su presencia en el sitio web.</p>
            </div>
            <div className="services__item">
                <i className="fa-solid fa-gauge-high"></i>
                <h3>Rendimiento</h3>
                <p>Retener a los usuarios es crucial para un sitio web. Los sitios de alto rendimiento atraen y retienen a los usuarios.</p>
            </div>
            <div className="services__item">
                <i className="fa-solid fa-crosshairs"></i>
                <h3>SEO</h3>
                <p>Optimizaré su sitio con una estrategia inteligente de optimización de motores de búsqueda para generar clientes potenciales.</p>
            </div>
            </div>  
                </section>  

            </main>
        </>
    );
};

export { Portfolio };
