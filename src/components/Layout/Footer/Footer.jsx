import styles from "./Footer.module.css";
import { Circles } from "./Circles/Circles";



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
      <div className="flex flex-col justify-end items-center p-5 h-screen">
        {/* Sobre mi */}
        {/* RRHH */}

        <div className="flex gap-4">
          <Link
            className={styles.rrhh__img}
            href="https://github.com/Doplax"
            target="_blank"
            rel="noopener noreferrer"
          >
              {/* github */}
            
          </Link>
          <Link
            className={styles.rrhh__img}
            href="https://www.linkedin.com/in/pol-valle-montes/"
            target="_blank"
            rel="noopener noreferrer"
          >
              {/* Linkedin */}
          </Link>
          <Link
            className={styles.rrhh__img}
            href="mailto:doplax@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Mail */}
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
