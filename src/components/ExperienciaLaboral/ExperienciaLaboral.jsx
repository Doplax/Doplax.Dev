//import { HomeModernIcon, CalendarDaysIcon } from "@heroicons/react/20/solid";
import React from "react";
import { PageTitle } from "../PageTitle";
import { ExperienceCard } from "./ExperienceCard";

function ExperienciaLaboral() {
  const experiencias = [
    {
      titulo: "Front-end",
      ubicacion: "Tecsolda, Esparreguera",
      fecha: "Mayo 2022 - Currently",
      tareas: [
        "Development of time-tracking application using Angular on the front-end and Node.js on the back-end.",
        "Collaborating on the implementation of best practices for software development, including code reviews and testing.",
        "Migration and maintenance of A3 business management software to Ekon ERP (with SQL for data export and Python for data cleansing).",
        "Implementation of Agile methodologies in project development.",
        "Migration and maintenance of business management software to Ekon ERP (with SQL) for data export (with Python) for data cleansing",
        "Management of the company's Network and Equipment"
      ],
    },
    {
      titulo: "Help Desk en SEAT",
      ubicacion: "SEAT",
      fecha: "2018 - 2019",
      tareas: [
        "Assistance and customer service for internal workers",
        "Stock Management",
        "Preparation, reception and configuration of devices for SEAT personnel"
      ],
    },
    {
      titulo: "Help Desk en Cesicat (Ciber Segurdidad)",
      ubicacion: "Cesicat",
      fecha: "2017 - 2018",
      tareas: [
        "Telephone and virtual customer service (public administrations)",
        "Proceedings with public administrations to execute security scans",
        "Reception and referral of cybersecurity incidents to technicians for resolution",
      ],
    },
  ];

  const formacion = [
    {
      titulo: "Keep Coding Bootcamp - Full Stack Developer",
      ubicacion: "Online",
      fecha: "2023 - 2024",
      tareas: [
        "Programming: learning various programming languages, including JavaScript, Python, and Java.",
        "Full Stack Web Development: Training in front-end and back-end development for the creation of complete web applications.",
        "Databases: Acquisition of skills in relational and non-relational databases such as MySQL and MongoDB.",
        "Frameworks and Libraries: Using modern frameworks and libraries such as React.js, Express.js, and Node.js.",
        "API Development: Learning how to design and develop RESTful APIs and GraphQL.", "API Development: Learning how to design and develop RESTful APIs and GraphQL.",
        "Web Security: Teaching cryptography, authentication and authorization, and protection against common web vulnerabilities.", 
        "Web Security.",
        "Project management: Use of agile methodologies and version control tools such as Git.",
        "Testing and debugging: Learning unit, integration, and system testing techniques to ensure software quality.", "Testing and debugging: Learning unit, integration, and system testing techniques to ensure software quality.",
        "Deployment: Skills in containers, such as Docker, and deployment platforms such as AWS and Heroku.", "Deployment: Skills in containers, such as Docker, and deployment platforms such as AWS and Heroku.",
      ],
    },
    {
      titulo: "DAW - Técnico Superior en Desarrollo de Aplicaciones Web",
      ubicacion: "INS Milà i Fontanals, Igualada",
      fecha: "2020 - 2022",
      tareas: [
        "Programming: Acquisition of skills in programming languages and advanced programming concepts.",
        "Web Application Development: Learning web application design and development, with a focus on user interfaces and security.",
        "Databases: Study of the fundamentals, design, creation and management of databases.",
        "Web servers: Configuration and administration of web servers and application deployment.",
        "Frameworks and libraries: Exploration and use of frameworks and libraries for web development.", "Frameworks and libraries: Exploration and use of frameworks and libraries for web development.",
        "Web design and layout: Acquisition of skills in web design and layout with various tools.",
        "Project management: Learning project management techniques applied to web development.",
        "Testing and debugging: Learning techniques for testing and debugging web applications.", "Testing and debugging: Learning techniques for testing and debugging web applications.",
        "Mobile development: Possibility to learn about mobile application development in some programs.", "Mobile development: Possibility to learn about mobile application development in some programs.",
      ],
    },
    {
      titulo: "Sistemas Microinformáticos y Redes",
      ubicacion: "IES Daniel Blanxart, Olesa de Montserrat",
      fecha: "2015 - 2017",
      tareas: [
        "Hardware assembly and maintenance: Assembly and technical support of hardware components of a computer system.", "Operating systems: Installation, configuration and administration of operating systems.", "Hardware assembly and maintenance: Assembly and technical support of hardware components of a computer system.",
        "Operating Systems: Installation, configuration, and administration of operating systems.",
        "Networking: Configuration and maintenance of computer networks, including troubleshooting and network security.", "Networking: Configuration and maintenance of computer networks, including troubleshooting and network security.",
        "Office Applications: Use of office software applications, such as word processors, spreadsheets, databases, and presentations.",
        "Servers: Installation and configuration of servers, including network services.",
        "Computer security: Implementing security policies and procedures to protect systems and data.", "Computer security: Implementing security policies and procedures to protect systems and data.",
        "Technical Support: Providing technical assistance to resolve hardware and software problems.", "Technical Support: Providing technical assistance to resolve hardware and software problems.",
        "Storage systems: Administration of data storage systems and backups.", "Storage systems: Administration of data storage systems and backups.",
      ],
    },
  ];

  return (
    <>

<PageTitle> Experiencia Laboral </PageTitle>
      {experiencias.map((content, index) => (
        <ExperienceCard
          key={index}
          titulo={content.titulo}
          ubicacion={content.ubicacion}
          fecha={content.fecha}
          tareas={content.tareas}
        />
      ))}

      
      <PageTitle> Estudios </PageTitle>
      {formacion.map((content, index) => (
        <ExperienceCard
          key={index}
          titulo={content.titulo}
          ubicacion={content.ubicacion}
          fecha={content.fecha}
          tareas={content.tareas}
        />
      ))}

      
    </>
  );
}

export { ExperienciaLaboral };
