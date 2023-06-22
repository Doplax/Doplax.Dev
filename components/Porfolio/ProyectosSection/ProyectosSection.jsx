import React from 'react'
import { PageTitle } from '../../PageTitle'
import  jsonData  from '../skills.json'

function ProyectosSection() {
    const projects = [
        {
            name:
                "Login/Register1",
            description:
                "Una aplicación que te permite registrarte y acceder a tu cuenta.",
            role:
                "PHP, CSS",
            imageUrl:
                "https://github.com/jmontes33/React-Portfolio/blob/main/src/assets/Acceder.png?raw=true",
            netlify:
                "https://github.com/jmontes33/php-login",
            github:
                "https://github.com/jmontes33/php-login",
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


    return (
        <section className="mx-auto max-w-6xl sm:px-6 lg:px-8 py-10">
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
        </section>
    )

}


export { ProyectosSection }