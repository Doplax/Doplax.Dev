import React from "react";
import styles from "./Footer.module.css";
import { Circles } from "./Circles/Circles";
import "../../styles/globalTypography.css";
import { Hub } from "../Hub/Hub";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

//const linkedinIcon = "/img/";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  // FontAwesomeIcon
  const iconColor = { color: "var(--yellow)" };
  const iconSice = "2x";

  return (
    <footer className={styles.footer}>
      {/* CONTAINER */}
      <div className="flex flex-col justify-end items-center h-screen sm:flex md:flex-row sm:justify-around sm:items-end sm:pb-4">
        {/* Sobre mi */}
        {/* RRHH */}

        <div className="flex gap-4">
          <Link
            className={styles.rrhh__img}
            href="https://github.com/Doplax"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size={iconSice}
              style={iconColor}
            />
          </Link>
          <Link
            className={styles.rrhh__img}
            href="https://www.linkedin.com/in/pol-valle-montes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size={iconSice}
              style={iconColor}
            />
          </Link>
          <Link
            className={styles.rrhh__img}
            href="mailto:doplax@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size={iconSice}
              style={iconColor}
            />
          </Link>
        </div>
      </div>

      {/* CopyRight */}
      <div className={styles.copyRight}>
        <Link
          href="https://github.com/Doplax"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.copyRight__link}
        >
          <p>All rights reserved © {`${year}`}</p>
        </Link>
      </div>

      {/* Circles */}
      <Circles />
    </footer>
  );
};

export { Footer };
