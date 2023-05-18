//import { HomeModernIcon, CalendarDaysIcon } from "@heroicons/react/20/solid";
import React from "react";
import { PageTitle } from "../PageTitle";
import { ExperienceCard } from "./ExperienceCard";

function ExperienciaLaboral() {
  const experiencias =[
    {
      titulo: 'Front End',
      ubicacion: 'Tecsolda, Esparreguera',
      fecha: 'Mayo 2022 - Actualidad',
      tareas: [
        'Encargado de diseñar y desarrollar la estructura visual del e-commerce',
        'Análisis de estadísticas mediante Google Analytics.',
        'Gestión de la Red y Equipos de la empresa',
        'Rebranding de la marca personal de la empresa. Diseño de la web con Wordpress y Elementor.',
        'Migración y mantenimiento del programa de gestión empresarial a Ekon ERP (con SQL) para la exportación de datos (con Python) para la limpieza de los mismos',
        'Despliegue de aplicaciónes web'
      ]
    },
    {
      titulo: 'Help Desk en SEAT',
      ubicacion: 'SEAT',
      fecha: '2018 - 2019',
      tareas: [
        'Asistencia y atención al cliente para trabajadores internos',
        'Gestión del Stock',
        'Preparación, recepción y configuración de dispositivos para el personal de SEAT',
      ]
    },
    {
      titulo: 'Help Desk en Cesicat (Ciber Segurdidad)',
      ubicacion: 'Cesicat',
      fecha: '2017 - 2018',
      tareas: [
        'Atención telefónica y virtual a clientes (administraciones públicas)',
        'Trámites con administraciones públicas para ejecutar escaneos de seguridad',
        'Recepción y derivación de incidencias de ciber seguridad a técnicos para su resolución',
      ]
    }
  ]

  const formacion = [
    {
      titulo: 'DAW - Técnico Superior en Desarrollo de Aplicaciones Web',
      ubicacion: 'INS Milà i Fontanals, Igualada',
      fecha: '2020 - 2022',
      tareas: [
        'Programación: Adquisición de habilidades en lenguajes de programación y conceptos de programación avanzados.',
        'Desarrollo de aplicaciones web: Aprendizaje de diseño y desarrollo de aplicaciones web, con un enfoque en interfaces de usuario y seguridad.',
        'Bases de datos: Estudio de los fundamentos, diseño, creación y gestión de bases de datos.',
        'Servidores web: Configuración y administración de servidores web y despliegue de aplicaciones.',
        'Frameworks y librerías: Exploración y uso de frameworks y librerías para el desarrollo web.',
        'Diseño y maquetación web: Adquisición de habilidades en diseño y maquetación web con diversas herramientas.',
        'Gestión de proyectos: Aprendizaje de técnicas de gestión de proyectos aplicadas al desarrollo web.',
        'Pruebas y depuración: Aprendizaje de técnicas para probar y depurar aplicaciones web.',
        'Desarrollo móvil: Posibilidad de aprender sobre desarrollo de aplicaciones móviles en algunos programas.'
]
      
    },
    {
      titulo: 'Sistemas Microinformáticos y Redes',
      ubicacion: 'IES Daniel Blanxart, Olesa de Montserrat',
      fecha: '2015 - 2017',
      tareas: [
        'Montaje y mantenimiento de hardware: Ensamblado y soporte técnico de componentes de hardware de un sistema informático.',
        'Sistemas operativos: Instalación, configuración y administración de sistemas operativos.',
        'Redes: Configuración y mantenimiento de redes informáticas, incluyendo solución de problemas y seguridad de red.',
        'Aplicaciones ofimáticas: Uso de aplicaciones de software de oficina, como procesadores de texto, hojas de cálculo, bases de datos y presentaciones.',
        'Servidores: Instalación y configuración de servidores, incluyendo servicios de red.',
        'Seguridad informática: Implementación de políticas y procedimientos de seguridad para proteger sistemas y datos.',
        'Soporte técnico: Ofrecer asistencia técnica para resolver problemas de hardware y software.',
        'Sistemas de almacenamiento: Administración de sistemas de almacenamiento de datos y copias de seguridad.'
    ]
    
    }
  ]
  

  return (
    <>
      <PageTitle> Experiencia Laboral </PageTitle>
      {experiencias.map((content, index)=>(
        <ExperienceCard 
          key= {index}
          titulo = {content.titulo}
          ubicacion = {content.ubicacion}
          fecha = {content.fecha}
          tareas = {content.tareas}
        />))
      }
  

      {/* Trancision */}
      {/*<div className="hidden md:flex items-center ">
        <div className="flex-col">
          <h2 className="hidden md:flex text-3xl font-bold mb-8">
            Sin embargo...
          </h2>
          <p className="text-lg w-9/12 mb-5">
            hablar aquí de cesicat
          </p>
        </div>
        <img
          src="/img/flecha-blanca.png"
          alt="flecha"
          className="h-40 mr-20"
        />
      </div>*/}

      <PageTitle> Estudios </PageTitle>
      {formacion.map((content, index)=>(
        <ExperienceCard 
          key= {index}
          titulo = {content.titulo}
          ubicacion = {content.ubicacion}
          fecha = {content.fecha}
          tareas = {content.tareas}
        />))
      }


    </>
  );
}

export { ExperienciaLaboral };