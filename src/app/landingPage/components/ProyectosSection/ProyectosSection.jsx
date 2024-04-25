import Image from "next/image";
import { PageTitle } from "@/components";
import css from "./ProyectosSection.module.css";

function ProyectosSection() {
  const projects = [
    {
      name: "Tesla",
      description: "Tesla Landing Page",
      role: [{ name: "Astro", img: "/svg/astro.svg" }],
      imageUrl: "/img/tesla-cover.webp",
      netlify: "https://tesla-astro.netlify.app/",
      github: "https://github.com/Doplax/Tesla-Astro",
    },
    //{
    //  name: "Pokedex - Angular",
    //  description: "Web application of a pokédex made in Angular",
    //  role: [{ name: "Angular", img: "/svg/angular.svg" }],
    //  imageUrl: "/img/pokedex.webp",
    //  netlify: "https://doplaxpokeangular.netlify.app/",
    //  github: "https://github.com/Doplax/Pokedex-Angular",
    //},
    {
      name: "ToDo App",
      description: "Task App with React and storage in LocalStorage",
      role: [{ name: "React", img: "/svg/react.svg" }],
      imageUrl: "/img/todo-react.webp",
      netlify:
        "https://64abbad54dd25f31dbc77026--todoreactdoplaxdev.netlify.app/",
      github: "https://github.com/Doplax/ToDo-React",
    },
    {
      name: "Cuphead CV",
      description: "Cuphead porfolio",
      role: [
        { name: "HTML", img: "/svg/html.svg" },
        { name: "CSS", img: "/svg/css.svg" },
      ],
      imageUrl: "/img/cuphead.webp",
      netlify: "https://cupheadcv.netlify.app/",
      github: "https://github.com/Doplax/CupHead",
    },
    {
      name: "BC Personel Group",
      description: "Web for a recruitment company",
      role: [
        { name: "HTML", img: "/svg/html.svg" },
        { name: "CSS", img: "/svg/css.svg" },
        { name: "JavaScript", img: "/svg/javascript.svg" },
      ],
      imageUrl: "/img/bc-personel.webp",
      netlify: "http://bcpersonnelgroup.surge.sh/",
      github: "https://github.com/Doplax/bcpersonnelgroup.com",
    },
    {
      name: "ChatGPT Web Integration",
      description: "Integration of Vercel AI SDK with GPT Chat API",
      role: [
        { name: "HTML", img: "/svg/html.svg" },
        { name: "CSS", img: "/svg/css.svg" },
        { name: "JavaScript", img: "/svg/javascript.svg" },
      ],
      imageUrl: "/img/vercel-sdk.webp",
      netlify: "https://doplax.dev/chatPage",
      github:
        "https://github.com/Doplax/Doplax.Dev/blob/main/src/app/api/chat/route.js",
    },
    //{
    //  name: "TheMovieDB",
    //  description:
    //    "NOTICE: For this app to work, it must be downloaded from the repository and use the API Key.",
    //  role: [
    //    { name: "HTML", img: "/svg/html.svg" },
    //    { name: "CSS", img: "/svg/css.svg" },
    //    { name: "JavaScript", img: "/svg/javascript.svg" },
    //  ],
    //  imageUrl: "/img/themoviedb.webp",
    //  netlify: "https://moviedb-doplax.surge.sh/",
    //  github: "https://github.com/Doplax/TheMovieDB-Api",
    //},
    {
      name: "Reproductor de música",
      description: "Example of a web interface of a Music Player",
      role: [
        { name: "HTML", img: "/svg/html.svg" },
        { name: "CSS", img: "/svg/css.svg" },
        { name: "JavaScript", img: "/svg/javascript.svg" },
      ],
      imageUrl: "/img/mp3-easy-player.webp",
      netlify: "https://doplax.github.io/MP3-Easy-Player/",
      github: "https://github.com/Doplax/MP3-Easy-Player",
    },
    {
      name: "Buscador de Centradores",
      description:
        "This project is a web tool designed for the company Tecsolda, which allows users to select machinery components according to their specific needs.",
      role: [
        { name: "HTML", img: "/svg/html.svg" },
        { name: "CSS", img: "/svg/css.svg" },
        { name: "JavaScript", img: "/svg/javascript.svg" },
      ],
      imageUrl: "/img/centradores.webp",
      netlify: "https://doplax.github.io/TSD-Centradores-Electrodos/",
      github: "https://github.com/Doplax/TSD-Centradores-Electrodos",
    },
    //{
    //  name: "Tecsolda.es/carroceria",
    //  description: "An online store for body shop welding products.",
    //  role: [{ name: "WordPress", img: "/svg/wordpress.svg" }],
    //  imageUrl: "/img/tsd-car.webp",
    //  netlify: "https://tecsolda.com/carroceria/",
    //  github: "https://tecsolda.com/carroceria/",
    //},
    //{
    //  name: "Tecsolda/Resistencia",
    //  description: "A website in production on Industrial Balancers.",
    //  role: [{ name: "WordPress", img: "/svg/wordpress.svg" }],
    //  imageUrl: "/img/tsd-res.webp",
    //  netlify: "https://www.equilibradores.es/",
    //  github: "https://www.equilibradores.es/",
    //},
  ];

  return (
    <section className=" py-10">
      <PageTitle>Projects</PageTitle>

      <div
        role="list"
        className=" grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
      >
        {projects.map((project) => (
          <div
            key={project.name}
            className="flex flex-col divide-y divide-gray-200 rounded-lg bg-slate-100 text-center shadow"
          >
            <div className="relative flex flex-col rounded-t-lg overflow-hidden">
              <a href={project.netlify} target="_blank">
                <Image
                  width="500"
                  height="500"
                  className="mx-auto flex-shrink-0 w-full object-fit"
                  src={project.imageUrl}
                  alt={project.name}
                />
              </a>

              <div className={`${css.card}`}>
                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {" "}
                  {project.name}{" "}
                </h3>
                <div className="flex flex-col">
                  <h4 className=" :text-xl text-gray-900 px-4 py-10">
                    {project.description}
                  </h4>
                  <div className="flex flex-row justify-center space-x-4">
                    {project.role.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex flex-col items-center justify-around"
                      >
                        <Image
                          width="40"
                          height="40"
                          className="py-1"
                          src={tech.img}
                          alt={tech.name}
                        />
                        <span className="text-black bg-opacity-40 backdrop-blur-md rounded-full py-1 px-2 text-xs">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons */}
            <div className="flex divide-x divide-gray-200">
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
