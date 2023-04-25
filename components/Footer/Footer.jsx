import React from "react";
import styles from "../../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="text-center text-white">© {new Date().getFullYear()} By Doplax.Dev </p>


                </a>
                <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />

            </footer>
        </>
    );
}

export { Footer };
