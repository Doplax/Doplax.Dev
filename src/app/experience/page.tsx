import { PageTitle } from "@/components/PageTitle/PageTitle";
import { ExperienceCard } from "./components/ExperienceCard";


export default function experiencie() {

  const experiencias = [
    {
      titulo: "Front-end",
      ubicacion: "Seat, Martorell",
      fecha: "2023 - Currently",
      tareas: [
        "UI layout design for Seat brand embedded car systems using Angular.",
        "Close collaboration with design and development teams to ensure a coherent and effective user experience.",
        "Implementation of optimized Angular-based front-end solutions for resource-limited devices.",
        "Angular codebase maintenance and updates for scalability and performance.",
        "Implementation of Agile methodologies in project development.",
      ],
    },
    {
      titulo: "Front-end",
      ubicacion: "Tecsolda, Esparreguera",
      fecha: "2022 - 2023",
      tareas: [
        "Development of time-tracking application using Angular on the front-end and Node.js on the back-end.",
        "Collaborating on the implementation of best practices for software development, including code reviews and testing.",
        "Migration and maintenance of A3 business management software to Ekon ERP (with SQL for data export and Python for data cleansing).",
        "Implementation of Agile methodologies in project development.",
        "Management of the company's Network and Equipment",
      ],
    },
    {
      titulo: "Help Desk en SEAT",
      ubicacion: "SEAT",
      fecha: "2018 - 2019",
      tareas: [
        "Assistance and customer service for internal workers",
        "Stock Management",
        "Preparation, reception and configuration of devices for SEAT personnel",
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
        "API Development: Learning how to design and develop RESTful APIs and GraphQL.",
        "Web Security: Teaching cryptography, authentication and authorization, and protection against common web vulnerabilities.",
        "Project management: Use of agile methodologies and version control tools such as Git.",
        "Testing and debugging: Learning unit, integration, and system testing techniques to ensure software quality.",
        "Deployment: Skills in containers, such as Docker, and deployment platforms such as AWS and Heroku.",
      ],
    },
    {
      titulo: "DAW - Advanced Technician in Web Applications Development",
      ubicacion: "INS Milà i Fontanals, Igualada",
      fecha: "2020 - 2022",
      tareas: [
        "Programming: Acquisition of skills in programming languages and advanced programming concepts.",
        "Web Application Development: Learning web application design and development, with a focus on user interfaces and security.",
        "Databases: Study of the fundamentals, design, creation and management of databases.",
        "Web servers: Configuration and administration of web servers and application deployment.",
        "Frameworks and libraries: Exploration and use of frameworks and libraries for web development.",
        "Web design and layout: Acquisition of skills in web design and layout with various tools.",
        "Project management: Learning project management techniques applied to web development.",
        "Testing and debugging: Learning techniques for testing and debugging web applications.",
        "Mobile development: Possibility to learn about mobile application development in some programs.",
      ],
    },
    {
      titulo: "SMX - Microcomputer Systems and Networks",
      ubicacion: "IES Daniel Blanxart, Olesa de Montserrat",
      fecha: "2015 - 2017",
      tareas: [
        "Hardware assembly and maintenance: Assembly and technical support of hardware components of a computer system.",
        "Operating systems: Installation, configuration and administration of operating systems.",
        "Hardware assembly and maintenance: Assembly and technical support of hardware components of a computer system.",
        "Networking: Configuration and maintenance of computer networks, including troubleshooting and network security.",
        "Office Applications: Use of office software applications, such as word processors, spreadsheets, databases, and presentations.",
        "Servers: Installation and configuration of servers, including network services.",
        "Computer security: Implementing security policies and procedures to protect systems and data.",
        "Technical Support: Providing technical assistance to resolve hardware and software problems.",
        "Storage systems: Administration of data storage systems and backups.",
      ],
    },
  ];

  return (
    <>
      <PageTitle>Work Experience</PageTitle>
      {experiencias.map((content, index) => (
        <ExperienceCard
          key={index}
          titulo={content.titulo}
          ubicacion={content.ubicacion}
          fecha={content.fecha}
          tareas={content.tareas}
        />
      ))}

      <PageTitle>Studies</PageTitle>
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
