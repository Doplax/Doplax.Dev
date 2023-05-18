//import { HomeModernIcon, CalendarDaysIcon } from "@heroicons/react/20/solid";
import React from "react";
import { PageTitle } from "../PageTitle";
//import "./active.css";

function ExperienciaLaboral() {
  return (
    <>
      <PageTitle> Experiencia Laboral </PageTitle>

      {/* Tecsolda */}
      <div className="border drop-shadow-sm rounded-lg mb-10">
        <div className="divide-y-2">
          <div className="flex items-center px-6 py-4 text-xl">
            <p className="font-bold">Desarrollador Front End</p>
          </div>
          <div className="px-6 py-4 text-lg">
            <div className="flex place-items-center">
              {/*<HomeModernIcon className="h-7" />*/}
              <p className="font-semibold pl-2">Tecsolda, Esparreguera</p>
            </div>
            <div className="flex place-items-center mt-2">
              {/*<CalendarDaysIcon className="h-7" />*/}
              <p className="font-semibold pl-2">Mayo 2022 - Actualidad</p>
            </div>
            <div>
              <p>Funciones que desarrollo en esta empresa:</p>
              <ul>
                <li>Encargado de diseñar y desarrollar la estructura visual del e-commerce</li>
                <li>Análisis de estadísticas mediante Google Analytics.</li>
                <li>Gestión de la Red y Equipos de la empresa</li>
                <li>Rebranding de la marca personal de la empresa. Diseño de la web con Wordpress y Elementor.</li>
                <li>Migración y mantenimiento del programa de gestión empresarial a Ekon ERP (con SQL) para la exportación de datos (con Python) para la limpieza de los mismos</li>
              </ul> 
            </div>
          </div>
        </div>
      </div>

      {/* Help Desk Seat */}
      <div className="border drop-shadow-sm rounded-lg mb-10">
        <div className="divide-y-2">
          <div className="flex items-center px-6 py-4 text-xl">
            <p className="font-bold">Help Desk en SEAT</p>
          </div>
          <div className="px-6 py-4 text-lg">
            <div className="flex place-items-center">
              {/*<HomeModernIcon className="h-7" />*/}
              <p className="font-semibold pl-2">Tecsolda, Esparreguera</p>
            </div>
            <div className="flex place-items-center mt-2">
              {/*<CalendarDaysIcon className="h-7" />*/}
              <p className="font-semibold pl-2">2018 - 2019</p>
            </div>
            <div>
              <p>Funciones que desarrollo en esta empresa:</p>
              <ul>
                <li>Asistencia y atención al cliente para trabajadores internos</li>
                <li>Gestión del Stock</li>
                <li>Preparación, recepción y configuración de dispositivos para el personal de SEAT</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Cesicat */}
      <div className="border drop-shadow-sm rounded-lg mb-10">
        <div className="divide-y-2">
          <div className="flex items-center px-6 py-4 text-xl">
            <p className="font-bold">Help Desk en Cesicat (Ciber Segurdidad)</p>
          </div>
          <div className="px-6 py-4 text-lg">
            <div className="flex place-items-center">
              {/*<HomeModernIcon className="h-7" />*/}
              <p className="font-semibold pl-2">Barcelona</p>
            </div>
            <div className="flex place-items-center mt-2">
              {/*<CalendarDaysIcon className="h-7" />*/}
              <p className="font-semibold pl-2">2017 - 2018</p>
            </div>
            <div>
              <p>Funciones que desarrollé en esta empresa:</p>
              <ul>
                <li>Atención telefónica y virtual a clientes (administraciones públicas)</li>
                <li>Trámites con administraciones públicas para ejecutar escaneos de seguridad</li>
                <li>Recepción y derivación de incidencias de ciber seguridad a técnicos para su resolución</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      {/* Trancision */}
      <div className="hidden md:flex items-center ">
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
      </div>

      <PageTitle> Estudios </PageTitle>

      {/* Grado superior */}
      <div className="border drop-shadow-sm rounded-lg mb-10">
        <div className="divide-y-2">
          <div className="flex items-center px-6 py-4 text-xl">
            <p className="font-bold">DAW - Técnico Superior en Desarrollo de Aplicaciones Web</p>
          </div>
          <div className="px-6 py-4 text-lg">
            <div className="flex place-items-center">
              {/*<HomeModernIcon className="h-7" />*/}
              <p className="font-semibold pl-2">INS Milà i Fontanals, Igualada </p>
            </div>
            <div className="flex place-items-center mt-2">
              {/*<CalendarDaysIcon className="h-7" />*/}
              <p className="font-semibold pl-2">2020 - 2022</p>
            </div>
            <p className="mt-2">
              lo que aprendí
            </p>
          </div>
        </div>
      </div>

      {/* Formación SMX */}
      <div className="border drop-shadow-sm rounded-lg mb-10">
        <div className="divide-y-2">
          <div className="flex items-center px-6 py-4 text-xl">
            <p className="font-bold">Sistemas Microinformáticos y Redes</p>
          </div>
          <div className="px-6 py-4 text-lg">
            <div className="flex place-items-center">
              {/*<HomeModernIcon className="h-7" />*/}
              <p className="font-semibold pl-2">IES Daniel Blanxart, Olesa de Montserrat</p>
            </div>
            <div className="flex place-items-center mt-2">
              {/*<CalendarDaysIcon className="h-7" />*/}
              <p className="font-semibold pl-2">2015 - 2017</p>
            </div>
            <p className="mt-2">
              En esta formación de grado medio fue donde toqué por primera vez
              el desarrollo web, también aprendí sobre aplicaciones ofimáticas,
              redes y Linux.
            </p>
          </div>
        </div>
      </div>


    </>
  );
}

export { ExperienciaLaboral };