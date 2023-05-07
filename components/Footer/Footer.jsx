import React from "react";
import styles from "./Footer.module.css";

const githubIcon = "/img/icon/github-blanco.png";
const linkedinIcon = "/img/icon/linkedin-blanco.png";
const eMailIcon = "/img/icon/eMail-blanco.png";


//const linkedinIcon = "/img/";


const Footer = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();


    return (
            <footer className={styles.footer}>
                {/* SITE MAP */}
                <div>
                <h3 className="global_bottom_line_animation">SITE MAP</h3>
                
                </div>
                <ul></ul>
                
                {/* Iconos */}
                <div className="flex">
                    <a
                    href="https://github.com/Doplax"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <img src={githubIcon} alt="eMail"/>
                    </a>
                    <a
                    href="https://www.linkedin.com/in/pol-valle-montes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <img src={linkedinIcon} alt="LinkedIn"/>
                    </a> 
                    <a
                    href="mailto:doplax@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <img src={eMailIcon} alt="eMail"/>
                    </a>
                </div>  

                {/* Link */}
                <a
                    href="https://github.com/Doplax"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="text-center text-sm text-white hover:text-blue-500">© {new Date().getFullYear()}All rights reserved © Doplax.Dev {`${year}`}</p>
                </a>


            </footer>
    );
}

export { Footer };
