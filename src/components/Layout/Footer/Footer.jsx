import { Circles } from "./Circles/Circles";
import Link from "next/link";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  // Datos de los enlaces
  const links = [
    {
      href: "https://github.com/Doplax",
      label: "Github",
      img: "/svg/github.svg",
    },
    {
      href: "https://www.linkedin.com/in/pol-valle-montes/",
      label: "Linkedin",
      img: "/svg/linkedin.svg",
    },
    {
      href: "mailto:doplax@gmail.com",
      label: "Mail",
      img: "/svg/mail.svg",
    },
  ];

  return (
    <footer className="relative min-h-screen bg-transparent">
      {/* RRHH */}
      <div className="flex flex-col justify-end items-center p-5 h-screen">
        <div className="flex gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              className="z-20 p-2 bg-black bg-opacity-70 rounded-lg backdrop-blur-lg backdrop-saturate-150 transition-transform transform hover:scale-130"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.img} className="h-8" alt={link.label}></img>
            </Link>
          ))}
        </div>
      </div>

      {/* CopyRight */}
      <div className="relative flex justify-center w-full p-2 bg-black bg-opacity-70 font-bold z-20">
        <Link
          href="https://github.com/Doplax"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-sm">All rights reserved © {year}</p>
        </Link>
      </div>

      {/* Circles */}
      <Circles />
    </footer>
  );
};

export { Footer };
