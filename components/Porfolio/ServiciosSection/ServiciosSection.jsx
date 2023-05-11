import React from 'react'
import { PageTitle } from '../../PageTitle'
import { faMobile, faPenRuler, faCode, faThumbsUp, faBatteryFull, faCrosshairs} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function ServiciosSection() {

    const serviceContainerStyle = "flex flex-col justify-start align-middle"
    const iconColor =  {color: 'var(--yellow)'};
    const iconSice = "3x"
    const positionText_h4 =  'text-center text-gray-100' 
    const positionText_p =  'text-center text-gray-300' 

    {/* SERVCICIOS */ }
    return (
        <section className='my-10'>
            <PageTitle>SERVICIOS</PageTitle>
            <h2 className='underLine_gAnimation font-bold text-3xl text-gray-300 hover:text-gray-200 my-5'>Servicios que ofrezco a mis clientes</h2>
            <div className="grid grid-cols-3 gap-4">
                <div className={serviceContainerStyle}>
                    <FontAwesomeIcon icon={faMobile} size={iconSice} style={iconColor} />                    
                    <h4 className={positionText_h4}>Sitios Responsive</h4>
                    <p className={positionText_p}>Tu sitio se verá correctamente en cualquier dispositivo, ya sea en ordenadores, Tablets y móviles</p>
                </div>
                <div className={serviceContainerStyle}>
                    <FontAwesomeIcon icon={faPenRuler} size={iconSice} style={iconColor} />                    
                    <h4 className={positionText_h4}>Diseños creativos</h4>
                    <p className={positionText_p}>El diseño es algo fundamental, por ello debe ser atractivo para ayuda a retener clientes potenciales en tu web</p>
                </div>
                <div className={serviceContainerStyle}>
                    <FontAwesomeIcon icon={faCode} size={iconSice} style={iconColor} />                    
                    <h4 className={positionText_h4}>Desarrollo</h4>
                    <p className={positionText_p}>La escalabilidad del proyecto es fundamental para hacer crecer negocios pensando en el largo plazo.</p>
                </div>
                <div className={serviceContainerStyle}>
                    <FontAwesomeIcon icon={faThumbsUp} size={iconSice} style={iconColor} />                    
                    <h4 className={positionText_h4}>Integración de redes sociales</h4>
                    <p className={positionText_p}>Las redes sociales son una herramienta imprescindible para cualquier negocio. Me aseguraré de tenerlas actualizadas y optimizadas.</p>
                </div>
                <div className={serviceContainerStyle}>
                    <FontAwesomeIcon icon={faBatteryFull} size={iconSice} style={iconColor} />                    
                    <h4 className={positionText_h4}>Rendimiento</h4>
                    <p className={positionText_p}>La experiencia de navegación debe ser fluida y eficiente, imprescindible para ofrecer el mejor servicio</p>
                </div>
                <div className={serviceContainerStyle}>
                    <FontAwesomeIcon icon={faCrosshairs} size={iconSice} style={iconColor} />                    
                    <h4 className={positionText_h4}>SEO</h4>
                    <p className={positionText_p}>En internet si no apareces en google no existes, por ello se requiere de buenas prácticas para posicionar tu negocio en internet.</p>
                </div>
            </div>
        </section>

    )
}

export { ServiciosSection }