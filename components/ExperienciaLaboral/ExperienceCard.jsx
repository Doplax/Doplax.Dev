import { faLocationDot, faCalendarDays} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function ExperienceCard(){
    const iconSice = "1x";
    const iconColor = {color: 'var(--yellow)'};

    return(
      <div className="border drop-shadow-sm rounded-lg mb-10">
        <div className="divide-y-2">
          <div className="flex items-center px-6 py-4 text-xl">
            <h2 className="font-bold">Desarrollador Front End</h2>
          </div>
          <div className="px-6 py-4 text-lg">
            <div className="flex place-items-center ">
              <FontAwesomeIcon icon={faLocationDot} size={iconSice} style={iconColor} />
              <p className="font-semibold pl-2 m-0">Tecsolda, Esparreguera</p>
            </div>
            <div className="flex place-items-center mt-2">
              <FontAwesomeIcon icon={faCalendarDays} size={iconSice} style={iconColor} />
              <p className="font-semibold pl-2">Mayo 2022 - Actualidad</p>
            </div>
            <div>
              <h3 className="font-bold mt-4 mb-2 text-2xl text-white">Funciones que desarrollo en esta empresa:</h3>
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
    )
}

export { ExperienceCard }