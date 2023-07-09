import React from 'react'
import { PageTitle } from '../../PageTitle'

function ProyectosSection() {
    const projects = [
        {
            name: "Pokedex - Angular",
            description:
                "Aplicación web de una pokédex hecha en Angular",
            role: "Angular",
            imageUrl: "/img/pokedex.webp",
            netlify: "https://doplaxpokeangular.netlify.app/",
            github: "https://github.com/Doplax/Pokedex-Angular",
        },
        {
            name: "Cuphead CV",
            description:
                "Porfolio de Cuphead",
            role: "HTML, CSS, JS",
            imageUrl: "/img/cuphead.webp",
            netlify: "https://doplax.dev/chatPage",
            github: "https://github.com/Doplax/Doplax.Dev/blob/main/src/app/api/chat/route.js",
        },
        {
            name: "BC Personel Group",
            description:
                "Web para una empresa de contratación de trabajo",
            role: "HTML, CSS, JS",
            imageUrl: "/img/bc-personel.webp",
            netlify: "http://bcpersonnelgroup.surge.sh/",
            github: "https://github.com/Doplax/bcpersonnelgroup.com",
        },
        {
            name: "ChatGPT Web Integration",
            description:
                "integración del SDK de Vercel AI con la API de Chat de GPT",
            role: "HTML, CSS, JS",
            imageUrl: "/img/vercel-sdk.webp",
            netlify: "https://doplax.dev/chatPage",
            github: "https://github.com/Doplax/Doplax.Dev/blob/main/src/app/api/chat/route.js",
        },
        {
            name: "Reproductor de música",
            description:
                "Ejemplo de una interfaz web de un Reproductor de música",
            role: "HTML, CSS, JS",
            imageUrl: "/img/mp3-easy-player.webp",
            netlify: "https://doplax.github.io/MP3-Easy-Player/",
            github: "https://github.com/Doplax/MP3-Easy-Player",
        },

        {
            name: "Buscador de Centradores y Electrodos",
            description:
                "Este proyecto es una herramienta web diseñada para la empresa Tecsolda que permite a los usuarios seleccionar componentes de maquinaria de acuerdo a sus necesidades específicas.",
            role: "HTML, CSS, JS",
            imageUrl: "/img/centradores.webp",
            netlify: "https://doplax.github.io/TSD-Centradores-Electrodos/",
            github: "https://github.com/Doplax/TSD-Centradores-Electrodos",
        },
        {
            name: "Tecsolda.es/carroceria",
            description:
                "Una tienda online de productos de soldadura para carroceria",
            role: "Woordpres, Woocommerce",
            imageUrl:
                "/img/tsd-car.webp",
            netlify: "https://tecsolda.com/carroceria/",
            github: "https://tecsolda.com/carroceria/",
        },
        {
            name: "Tecsolda/Resistencia",
            description: "Una web en producción sobre Equilibradores Industriales.",
            role: "Woordpress, Woocomerce",
            imageUrl:
                "/img/tsd-res.webp",
            netlify: "https://www.equilibradores.es/",
            github: "https://www.equilibradores.es/",
        },

    ];


    return (
        <section className="mx-auto max-w-6xl sm:px-6 py-28">
            <PageTitle>Proyectos</PageTitle>

            
            <ul
                role="list"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
            >
                {projects.map((project) => (
                    <li
                        key={project.name}
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-slate-100 text-center shadow"
                    >
                        <div className="flex flex-1 flex-col rounded-lg overflow-hidden">
                            <a
                                href={project.netlify}
                                target={"_blank"}>
                                <img
                                    className="mx-auto flex-shrink-0  w-full object-fit h-50 w-50"
                                    src={project.imageUrl}
                                    alt=""
                                />
                            </a>
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
        </section>
    )

}


export { ProyectosSection }