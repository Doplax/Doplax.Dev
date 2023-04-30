import React from "react";
import styles from "../../styles/Home.module.css";

const githubIcon = "/img/icon/github-blanco.png";
const linkedinIcon = "/img/icon/linkedin-blanco.png";
const eMailIcon = "/img/icon/eMail-blanco.png";


//const linkedinIcon = "/img/";


const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="text-center font-bold text-xl text-white hover:text-blue-500">© {new Date().getFullYear()} By Doplax.Dev </p>


                </a>
                
                {/* Iconos */}
                <div 
                    className="flex"
                >
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

                    
            </footer>
        </>
    );
}

export { Footer };
