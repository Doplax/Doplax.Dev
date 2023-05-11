import React from 'react' 
import { PageTitle } from '../../PageTitle'

function ServiciosSection() {

    {/* SERVCICIOS */}
    return (
    <section>
    <PageTitle>SERVICIOS</PageTitle>
    <div className="services__grid">
    <div className="services__item">
        <i className="fa-solid fa-mobile-screen-button"></i>
        <h3>Sitios Responsive</h3>
        <p>Su sitio se mostrará correctamente en cualquier dispositivo, computadoras, tabletas y teléfonos móviles.</p>
    </div>
    <div className="services__item">
        <i className="fa-solid fa-pen-ruler"></i>
        <h3>Diseños creativos</h3>
        <p>Un buen y atractivo diseño web lo ayuda a mantener potenciales clientes en su sitio, que es la cara digital de su negocio.</p>
    </div>
    <div className="services__item">
        <i className="fa-solid fa-code"></i>
        <h3>Desarrollo</h3>
        <p>Conozco la importancia del diseño web y puedo ayudarte a crear un sitio web que te encantará.</p>
    </div>
    <div className="services__item">
        <i className="fa-solid fa-thumbs-up"></i>
        <h3>Integración de redes sociales</h3>
        <p>Existen muchas plataformas sociales, y debe promover su presencia en el sitio web.</p>
    </div>
    <div className="services__item">
        <i className="fa-solid fa-gauge-high"></i>
        <h3>Rendimiento</h3>
        <p>Retener a los usuarios es crucial para un sitio web. Los sitios de alto rendimiento atraen y retienen a los usuarios.</p>
    </div>
    <div className="services__item">
        <i className="fa-solid fa-crosshairs"></i>
        <h3>SEO</h3>
        <p>Optimizaré su sitio con una estrategia inteligente de optimización de motores de búsqueda para generar clientes potenciales.</p>
    </div>
    </div>  
        </section>  
    )
}

export { ServiciosSection }