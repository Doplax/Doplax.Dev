import React from "react";
import styles from "./Porfolio.module.css";
import { PageTitle } from "../PageTitle";
import SkillSection from "../Porfolio/Skills/SkillSection";
import Skill from "../Porfolio/Skills/Skill";

const Portfolio = () => {
    const projects = [
        {
            name: "Login/Register1",
            description:
                "Una aplicación que te permite registrarte y acceder a tu cuenta.",
            role: "PHP, CSS",
            imageUrl:
                "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/Acceder.png?raw=true",
            netlify: "https://github.com/jmontes33/php-login",
            github: "https://github.com/jmontes33/php-login",
        },
        {
            name: "Tecsolda.es/carroceria",
            description:
                "Una tienda online de productos de soldadura para carroceria",
            role: "Woordpres, Woocommerce",
            imageUrl:
                "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/Acceder.png?raw=true",
            netlify: "https://tecsolda.com/carroceria/",
            github: "https://tecsolda.com/carroceria/",
        },
        {
            name: "Equilibradores.es",
            description: "Una web en producción sobre Equilibradores Industriales.",
            role: "Next, React, Bootstrap",
            imageUrl:
                "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/Acceder.png?raw=true",
            netlify: "https://www.equilibradores.es/",
            github: "https://www.equilibradores.es/",
        },
        {
            name: "Reproductor de música",
            description:
                "Una aplicación To-Do con D&D, en ella puedes crear tareas, marcarlas, moverlas a diferentes estados e incluso eliminarlas.",
            role: "HTML, CSS, JS",
            imageUrl: "/img/projects/mp3-easy-player.png",
            netlify: "https://doplax.github.io/MP3-Easy-Player/",
            github: "https://github.com/Doplax/MP3-Easy-Player",
        },
        {
            name: "Mr Cripto",
            description: "Consumo de una API",
            role: "HTML, CSS, JS, API REST",
            imageUrl: "",
            netlify: "https://doplax.github.io/Mr.Crypto-API-REST/",
            github: "https://github.com/Doplax/Mr.Crypto-API-REST",
        },
        {
            name: "Buscador de Centradores y Electrodos",
            description:
                "Este proyecto es una herramienta web diseñada para la empresa Tecsolda que permite a los usuarios seleccionar componentes de maquinaria de acuerdo a sus necesidades específicas.",
            role: "HTML, CSS, JS",
            imageUrl: "/img/projects/centradores.png",
            netlify: "https://doplax.github.io/TSD-Centradores-Electrodos/",
            github: "https://github.com/Doplax/TSD-Centradores-Electrodos",
        },
        {
            name: "Login/Register2",
            description:
                "Una aplicación que te permite registrarte y acceder a tu cuenta.",
            role: "PHP, CSS",
            imageUrl:
                "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/Acceder.png?raw=true",
            netlify: "https://github.com/jmontes33/php-login",
            github: "https://github.com/jmontes33/php-login",
        },
    ];

    const frontEndSkills = [
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/html5.png?raw=true",
            alt: "html",
            label: "HTML",
        },
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/css3.png?raw=true",
            alt: "css",
            label: "CSS",
        },
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/javascript.png?raw=true",
            alt: "javascript",
            label: "JavaScript",
        },
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/react.png?raw=true",
            alt: "react",
            label: "React",
        },
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/tailwind.png?raw=true",
            alt: "Tailwind",
            label: "Tailwind",
        },
    ];

    const backEndSkills = [
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/postgresql.png?raw=true",
            alt: "postgresql",
            label: "PostgreSQL",
        },
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/php.png?raw=true",
            alt: "php",
            label: "PHP",
        },
    ];

    const toolsSkills = [
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/git.png?raw=true",
            alt: "git",
            label: "Git",
        },
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/github.png?raw=true",
            alt: "github",
            label: "GitHub",
        },
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/npm.png?raw=true",
            alt: "npm",
            label: "Npm",
        },
        {
            src: "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/netlify.png?raw=true",
            alt: "netlify",
            label: "Netlify",
        },
    ];

    return (
        <>
            <main id={styles.main}>
                {/* HOME */}
                <section id={styles.home__section} className={styles.section}>
                    <video
                        className={styles.home__videoBackground}
                        preload="auto"
                        autoPlay
                        loop
                        muted
                    >
                        <source
                            src="https://raw.githubusercontent.com/Doplax/doplax/main/img/video-bg.mp4"
                            type="video/mp4"
                        />
                    </video>
                    <div className={styles.home__description}></div>
                </section>

                <section id={styles.servicios__section} className={styles.section}>
                    <PageTitle>SERVICIOS</PageTitle>
                </section>
            </main>
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

                        {/* Proyectos */}
                        <div className="px-4 py-8 sm:px-0">
                            <h1 className="text-3xl font-bold mb-10">Proyectos</h1>
                            <ul
                                role="list"
                                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
                            >
                                {projects.map((project) => (
                                    <li
                                        key={project.name}
                                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-slate-100 text-center shadow"
                                    >
                                        <div className="flex flex-1 flex-col p-8">
                                            <img
                                                className="mx-auto flex-shrink-0 max-h-56"
                                                src={project.imageUrl}
                                                alt=""
                                            />
                                            <h3 className="mt-6 mb-4 text-xl font-bold text-gray-900">
                                                {project.name}
                                            </h3>
                                            <dl className="flex flex-grow flex-col justify-between">
                                                <dd className="text-sm text-gray-500">
                                                    {project.description}
                                                </dd>
                                                <dd className="mt-3">
                                                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                                                        {project.role}
                                                    </span>
                                                </dd>
                                            </dl>
                                        </div>
                                        <div>
                                            <div className="-mt-px flex divide-x divide-gray-200">
                                                <div className="flex w-0 flex-1">
                                                    <a
                                                        href={project.github}
                                                        target={"_blank"}
                                                        className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                    >
                                                        <img
                                                            src="https://raw.githubusercontent.com/jmontes33/React-Portfolio/20d9cedab15245df7dbed1c63ebc814c6d655c57/src/assets/github-logo.svg"
                                                            alt="github"
                                                            className="h-5 w-5 text-gray-400"
                                                            aria-hidden="true"
                                                        />
                                                        <span className="ml-3">Github</span>
                                                    </a>
                                                </div>
                                                <div className="-ml-px flex w-0 flex-1">
                                                    <a
                                                        target={"_blank"}
                                                        href={project.netlify}
                                                        className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                                    >
                                                        {/*<ComputerDesktopIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />*/}
                                                        <span className="ml-3">Probar</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
            <div className="mx-auto max-w-6xl sm:px-6 lg:px-8 py-10">
                <PageTitle>Skills</PageTitle>
                <SkillSection
                    title="Front End"
                    skills={frontEndSkills.map((skill) => (
                        <Skill
                            key={skill.alt}
                            src={skill.src}
                            alt={skill.alt}
                            label={skill.label}
                        />
                    ))}
                />
                <SkillSection
                    title="Back End"
                    skills={backEndSkills.map((skill) => (
                        <Skill
                            key={skill.alt}
                            src={skill.src}
                            alt={skill.alt}
                            label={skill.label}
                        />
                    ))}
                />
                <SkillSection
                    title="Herramientas"
                    skills={toolsSkills.map((skill) => (
                        <Skill
                            key={skill.alt}
                            src={skill.src}
                            alt={skill.alt}
                            label={skill.label}
                        />
                    ))}
                />
            </div>
        </>
    );
};

export { Portfolio };
