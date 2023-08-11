import React from "react";
import Image from "next/image";
import { PageTitle } from "../../PageTitle";
//import skillsData from '../skills.json'


function ProyectosSection() {
    const projects = [
        {
            name: "Tesla - Astro",
            description: "Tesla Landing Page",
            role: ['Astro'],
            imageUrl: "/img/tesla-cover.webp",
            netlify: "https://tesla-astro.netlify.app/",
            github: "https://github.com/Doplax/Tesla-Astro",
        },
        {
            name: "Pokedex - Angular",
            description: "Web application of a pokédex made in Angular",
            role: 'Angular',
            imageUrl: "/img/pokedex.webp",
            netlify: "https://doplaxpokeangular.netlify.app/",
            github: "https://github.com/Doplax/Pokedex-Angular",
        },
        {
            name: "ToDo App - React",
            description: "Task App with React and storage in LocalStorage",
            role: "HTML, CSS",
            imageUrl: "/img/todo-react.webp",
            netlify:
                "https://64abbad54dd25f31dbc77026--todoreactdoplaxdev.netlify.app/",
            github: "https://github.com/Doplax/ToDo-React",
        },
        {
            name: "Cuphead CV",
            description: "Cuphead porfolio",
            role: "HTML, CSS",
            imageUrl: "/img/cuphead.webp",
            netlify: "https://cupheadcv.netlify.app/",
            github: "https://github.com/Doplax/CupHead",
        },
        {
            name: "BC Personel Group",
            description: "Web for a recruitment company",
            role: "HTML, CSS, JS",
            imageUrl: "/img/bc-personel.webp",
            netlify: "http://bcpersonnelgroup.surge.sh/",
            github: "https://github.com/Doplax/bcpersonnelgroup.com",
        },
        {
            name: "ChatGPT Web Integration",
            description: "integration of Vercel AI SDK with GPT Chat API",
            role: "HTML, CSS, JS",
            imageUrl: "/img/vercel-sdk.webp",
            netlify: "https://doplax.dev/chatPage",
            github:
                "https://github.com/Doplax/Doplax.Dev/blob/main/src/app/api/chat/route.js",
        },
        {
            name: "TheMovieDB",
            description:
            "NOTICE: For this app to work, it must be downloaded from the repository and use the API Key.",
            role: "HTML, CSS, JS",
            imageUrl: "/img/themoviedb.webp",
            netlify: "https://moviedb-doplax.surge.sh/",
            github: "https://github.com/Doplax/TheMovieDB-Api",
        },
        {
            name: "Reproductor de música",
            description: "Example of a web interface of a Music Player",
            role: "HTML, CSS, JS",
            imageUrl: "/img/mp3-easy-player.webp",
            netlify: "https://doplax.github.io/MP3-Easy-Player/",
            github: "https://github.com/Doplax/MP3-Easy-Player",
        },

        {
            name: "Buscador de Centradores ",
            description:
            "This project is a web tool designed for the company Tecsolda, which allows users to select machinery components according to their specific needs.",
            role: "HTML, CSS, JS",
            imageUrl: "/img/centradores.webp",
            netlify: "https://doplax.github.io/TSD-Centradores-Electrodos/",
            github: "https://github.com/Doplax/TSD-Centradores-Electrodos",
        },
        {
            name: "Tecsolda.es/carroceria",
            description:
            "An online store for body shop welding products.",
            role: "Woordpres, Woocommerce",
            imageUrl: "/img/tsd-car.webp",
            netlify: "https://tecsolda.com/carroceria/",
            github: "https://tecsolda.com/carroceria/",
        },
        {
            name: "Tecsolda/Resistencia",
            description: "A website in production on Industrial Balancers.",
            role: "Woordpress, Woocomerce",
            imageUrl: "/img/tsd-res.webp",
            netlify: "https://www.equilibradores.es/",
            github: "https://www.equilibradores.es/",
        },
    ];



    return (
        <section className=" py-28">
            <PageTitle>Projects</PageTitle>

            <div
                role="list"
                className=" grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">


                {projects.map((project) => (
                    <div
                        key={project.name}
                        className=" flex flex-col divide-y divide-gray-200 rounded-lg bg-slate-100 text-center shadow"
                    >
                        <div className="relative flex  flex-col rounded-lg overflow-hidden">

                            {/* Imagen */}
                            <a href={project.netlify} target="_blank">
                                <Image
                                    width="500"
                                    height="500"
                                    className="mx-auto flex-shrink-0  w-full object-fit "
                                    src={project.imageUrl}
                                    alt={project.name}
                                />
                            </a>
                            {/* Nombre  y descripción*/}
                            <div className=" bg-slate-200 absolute flex flex-col justify-start items-center inset-0 rounded-lg translate-y-80 transition-all duration-500 hover:translate-y-0" >
                                <h3 className="mt-6 text-xl font-bold text-gray-900"> {project.name} </h3>
                                <div className="flex flex-col ">
                                    <h4 className="text-xl text-gray-900 px-4 py-10" >{project.description}</h4>
                                    {/* Aqui van los iconos */} 
                                    <p className="text-lg text-black font-bold px-4 " >{project.role}</p>
                                </div>

                            </div>
                        </div>

                        {/* BOTONES*/}
                        <div className="-mt-px flex divide-x divide-gray-200">
                            {/* Github */}
                            <div className="flex w-0 flex-1">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                >
                                    <Image
                                        height="50"
                                        width="50"
                                        src="/svg/github.svg"
                                        alt="github"
                                        className="h-5 w-5 text-gray-400"
                                    />
                                    <span className="ml-3">Github</span>
                                </a>
                            </div>

                            {/* Live */}
                            <div className="flex w-0 flex-1">
                                <a
                                    href={project.netlify}
                                    target="_blank"
                                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                                >
                                    <Image
                                        height="50"
                                        width="50"
                                        src="/svg/paper-plane.svg"
                                        alt="github"
                                        className="h-5 w-5 text-gray-400"
                                    />
                                    <span className="ml-3">Live</span>
                                </a>
                            </div>
                            
                        </div>
                    </div>
                    
                ))}
            </div>
        </section>
    );
}

export { ProyectosSection };
