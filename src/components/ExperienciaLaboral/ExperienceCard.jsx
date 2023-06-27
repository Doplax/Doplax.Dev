'use client'
import { faLocationDot, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function ExperienceCard({ titulo, ubicacion, fecha, tareas }) {
  const iconSice = "1x";
  const iconColor = { color: 'var(--yellow)' };

  return (
    
    <div className="border drop-shadow-sm rounded-lg mb-10">
      <div className="divide-y-2">
        <div className="flex items-center px-6 py-4 text-xl">
          <h2 className="font-bold">{titulo}</h2>
        </div>
        <div className="px-6 py-4 text-lg">
          <div className="flex place-items-center ">
            <FontAwesomeIcon
              icon={faLocationDot}
              size={iconSice}
              style={iconColor} />
            <p className="font-semibold pl-2 m-0">
              {ubicacion}
            </p>
          </div>
          <div className="flex place-items-center mt-2">
            <FontAwesomeIcon
              icon={faCalendarDays}
              size={iconSice}
              style={iconColor} />
            <p className="font-semibold pl-2">
              {fecha}
            </p>
          </div>

          <div>
            <h3 className="font-bold mt-4 mb-2 text-2xl text-white">
              Aquí aprendí a...
            </h3>
            <ul>
              {tareas.map((tarea) => <li key={tarea.id}>{tarea}</li>)}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        ul {
          list-style: none; 
        }

        ul li:before {
          content: "•";
          color: var(--yellow);
          display: inline-block; 
          width:20px; 
          margin-left: -10px;
        }
      `}</style>

    </div>

  )

}

export { ExperienceCard }