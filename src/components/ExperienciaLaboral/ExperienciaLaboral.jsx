//import { HomeModernIcon, CalendarDaysIcon } from "@heroicons/react/20/solid";
import React from "react";
import { PageTitle } from "../PageTitle";
import { ExperienceCard } from "./ExperienceCard";

function ExperienciaLaboral() {
  const experiencias = [
    {
      titulo: "Front End",
      ubicacion: "Tecsolda, Esparreguera",
      fecha: "Mayo 2022 - Actualidad",
      tareas: [
        "Encargado de diseñar y desarrollar la web con Angular",
        "Desarrollo de aplicación de control horario usando Node.js.",
        "Implementación de metodologías Agile en el desarrollo de proyectos.",
        "Migración y mantenimiento del programa de gestión empresarial a Ekon ERP (con SQL) para la exportación de datos (con Python) para la limpieza de los mismos",
        "Gestión de la Red y Equipos de la empresa",
      ],
    },
    {
      titulo: "Help Desk en SEAT",
      ubicacion: "SEAT",
      fecha: "2018 - 2019",
      tareas: [
        "Asistencia y atención al cliente para trabajadores internos",
        "Gestión del Stock",
        "Preparación, recepción y configuración de dispositivos para el personal de SEAT",
      ],
    },
    {
      titulo: "Help Desk en Cesicat (Ciber Segurdidad)",
      ubicacion: "Cesicat",
      fecha: "2017 - 2018",
      tareas: [
        "Atención telefónica y virtual a clientes (administraciones públicas)",
        "Trámites con administraciones públicas para ejecutar escaneos de seguridad",
        "Recepción y derivación de incidencias de ciber seguridad a técnicos para su resolución",
      ],
    },
  ];

  const formacion = [
    {
      titulo: "Keep Coding Bootcamp - Full Stack Developer",
      ubicacion: "Online",
      fecha: "2023 - 2024",
      tareas: [
        "Programación: Aprendizaje de varios lenguajes de programación, incluyendo JavaScript, Python, y Java.",
        "Desarrollo web Full Stack: Formación en desarrollo de front-end y back-end para la creación de aplicaciones web completas.",
        "Bases de datos: Adquisición de habilidades en bases de datos relacionales y no relacionales como MySQL y MongoDB.",
        "Frameworks y librerías: Uso de frameworks y librerías modernos como React.js, Express.js, y Node.js.",
        "Desarrollo de API: Aprendizaje de diseño y desarrollo de APIs RESTful y GraphQL.",
        "Seguridad web: Enseñanza en criptografía, autenticación y autorización, y protección contra vulnerabilidades web comunes.",
        "Gestión de proyectos: Uso de metodologías ágiles y herramientas de control de versiones como Git.",
        "Pruebas y depuración: Aprendizaje de técnicas de prueba unitaria, de integración y de sistema para asegurar la calidad del software.",
        "Despliegue: Habilidades en contenedores, como Docker, y plataformas de despliegue como AWS y Heroku.",
      ],
    },
    {
      titulo: "DAW - Técnico Superior en Desarrollo de Aplicaciones Web",
      ubicacion: "INS Milà i Fontanals, Igualada",
      fecha: "2020 - 2022",
      tareas: [
        "Programación: Adquisición de habilidades en lenguajes de programación y conceptos de programación avanzados.",
        "Desarrollo de aplicaciones web: Aprendizaje de diseño y desarrollo de aplicaciones web, con un enfoque en interfaces de usuario y seguridad.",
        "Bases de datos: Estudio de los fundamentos, diseño, creación y gestión de bases de datos.",
        "Servidores web: Configuración y administración de servidores web y despliegue de aplicaciones.",
        "Frameworks y librerías: Exploración y uso de frameworks y librerías para el desarrollo web.",
        "Diseño y maquetación web: Adquisición de habilidades en diseño y maquetación web con diversas herramientas.",
        "Gestión de proyectos: Aprendizaje de técnicas de gestión de proyectos aplicadas al desarrollo web.",
        "Pruebas y depuración: Aprendizaje de técnicas para probar y depurar aplicaciones web.",
        "Desarrollo móvil: Posibilidad de aprender sobre desarrollo de aplicaciones móviles en algunos programas.",
      ],
    },
    {
      titulo: "Sistemas Microinformáticos y Redes",
      ubicacion: "IES Daniel Blanxart, Olesa de Montserrat",
      fecha: "2015 - 2017",
      tareas: [
        "Montaje y mantenimiento de hardware: Ensamblado y soporte técnico de componentes de hardware de un sistema informático.",
        "Sistemas operativos: Instalación, configuración y administración de sistemas operativos.",
        "Redes: Configuración y mantenimiento de redes informáticas, incluyendo solución de problemas y seguridad de red.",
        "Aplicaciones ofimáticas: Uso de aplicaciones de software de oficina, como procesadores de texto, hojas de cálculo, bases de datos y presentaciones.",
        "Servidores: Instalación y configuración de servidores, incluyendo servicios de red.",
        "Seguridad informática: Implementación de políticas y procedimientos de seguridad para proteger sistemas y datos.",
        "Soporte técnico: Ofrecer asistencia técnica para resolver problemas de hardware y software.",
        "Sistemas de almacenamiento: Administración de sistemas de almacenamiento de datos y copias de seguridad.",
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
