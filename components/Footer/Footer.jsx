import React from "react";
import styles from "./Footer.module.css";
import circles from "./Circles.module.css";


const githubIcon = "/img/icon/github-blanco.png";
const linkedinIcon = "/img/icon/linkedin-blanco.png";
const eMailIcon = "/img/icon/eMail-blanco.png";

//const linkedinIcon = "/img/";

const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const menuLink =
        "global_bottom_line_animation text-gray-300 hover:text-white text-base font-bold px-2  py-2";

    return (
        <footer className={styles.footer}>
            {/* CONTAINER */}
            <div className="flex justify-around items-center h-screen">

                {/* Sobre mi */}
                <div className="">
                    <h3>Pol Valle</h3>
                    <p className=" italic">"Programming isn't about what you know;</p>
                    <p className=" italic"> it's about what you can figure out"</p>
                    <div className="flex">
                        <a
                            href="https://github.com/Doplax"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={githubIcon} alt="eMail" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pol-valle-montes/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a
                            href="mailto:doplax@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={eMailIcon} alt="eMail" />
                        </a>
                    </div>
                    <p className="allura__typography text-4xl"> Doplax Dev </p>
                </div>

                {/* SITE MAP */}
                <div className="">
                    <h3 className="text-lg">Sitemap</h3>
                    <ul className="justify-start">
                        <li >
                            <a href="/" className={menuLink}>  Home</a>
                        </li>
                        <li>
                            <a href="/sobreMi" className={menuLink}> Sobre Mi </a>
                        </li>
                        <li>
                            <a href="/habilidades" className={menuLink}> Habilidades </a>
                        </li>
                        <li>
                            <a href="/contacto" className={menuLink}> Contacto </a>
                        </li>
                        <li>
                            <a href="/pruebas" className={menuLink}> Pruebas </a>
                        </li>
                    </ul>
                </div>

                {/* GENERAL */}
                <div className="">
                    <h3 className="text-lg">Sitemap</h3>
                    <ul className="justify-start">
                        <li>
                            <a href="/" className={menuLink}>Home</a>
                        </li>
                        <li>
                            <a href="/my-mission" className={menuLink}>My Mission</a>
                        </li>
                        <li>
                            <a href="/privacy-policy" className={menuLink}>Privacy policy</a>
                        </li>
                        <li>
                            <a href="/terms-of-use" className={menuLink}>Terms of use</a>
                        </li>
                        <li>
                            <a href="/code-of-conduct" className={menuLink}>Code of conduct</a>
                        </li>
                    </ul>
                </div>
            </div>


            {/* CopyRight */}
            <a
                href="https://github.com/Doplax"
                target="_blank"
                rel="noopener noreferrer"
                className=""
            >
                <p className="flex justify-center w-full text-sm text-white hover:text-blue-500">
                    © {new Date().getFullYear()}All rights reserved © Doplax.Dev{" "}
                    {`${year}`}
                </p>
            </a>


            {/* Circles */}
            <div className="position-relative bg-pattern pattern-2 pt-15 area">
                <ul className={circles.circles}>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </footer>
    );
};

export { Footer };
