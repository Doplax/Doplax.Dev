import React from 'react';
import { PageTitle } from '../../PageTitle';
import styles from './Button.module.css'; // Asegúrate de importar los estilos adecuados
import {Image} from "@nextui-org/react";

function HomeSection() {
    return (
        <section >
            {/* HOME */}

            {/* SOBRE MI */}
            <section className="py-10 md:py-28">
                
                    {/* Desktop Version */}
                    <PageTitle>About Me</PageTitle>

                        <div className="hidden md:flex items-start">
                            <div className="flex-col">
                            <p className="text-lg w-9/12 mb-5">As a <strong>frontend and backend developer</strong>, I aim to design <strong>fluid and enjoyable user experiences</strong> by creating <strong>attractive, functional applications</strong> that are centered on the user.</p>
                            <p className="text-lg w-9/12 mb-5">I am particularly drawn to developing applications that are not only functional but also visually appealing and easy to use. I accomplish this by implementing <strong>SOLID principles</strong> and <strong>clean architecture</strong>, and applying <strong>testing</strong> to ensure quality.</p>
                            <p className="text-lg w-9/12 mb-5">I also use <strong>agile methodologies</strong> for adaptability and continuous improvement.</p>

                                <a
                                    href="/docs/CV-Pol-Valle.pdf"
                                    download="CV-Pol-Valle.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer" // Agrega esta línea para la seguridad del enlace
                                    type="button"
                                    className={`${styles.btnHover} ${styles.color2}  px-6 py-3 text-white hover:text-white text-xl font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2`}
                                >
                                    Download CV
                                </a>
                            </div>
                            <Image
                                width={500}
                                src="/img/pol-valle.webp"  
                                alt="profile image" 
                                className="rounded-full" />
                        </div>
                        {/* Mobile Version */}
                        <div className="flex md:hidden items-center p-8">
                            <div className="flex flex-col">
                                <Image 
                                    src="/img/pol-valle.webp" 
                                    alt="profile image" 
                                    className="rounded-full scale-75" />
                                <p className="text-lg  mb-5">As a <strong>frontend and backend developer</strong>, I aim to design <strong>fluid and enjoyable user experiences</strong> by creating <strong>attractive, functional applications</strong> that are centered on the user.</p>
                                <p className="text-lg  mb-5">I am particularly drawn to developing applications that are not only functional but also visually appealing and easy to use. I accomplish this by implementing <strong>SOLID principles</strong> and <strong>clean architecture</strong>, and applying <strong>testing</strong> to ensure quality.</p>
                                <p className="text-lg  mb-5">I also use <strong>agile methodologies</strong> for adaptability and continuous improvement.</p>
                                
                                <div className='flex justify-center'>
                                    <a
                                        href="/docs/CV-Pol-Valle.pdf"
                                        download="CV-Pol-Valle.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer block" // Agrega esta línea para la seguridad del enlace
                                        type="button"
                                        className={`${styles.btnHover} ${styles.color2}  px-6 py-3  text-xl font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2`}
                                    >
                                     Download CV
                                    </a>
                                </div>

                            </div>
                        </div>
            </section>
        </section>
    );
}

export { HomeSection };
