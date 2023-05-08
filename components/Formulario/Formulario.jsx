import React from "react";
import { render } from "react-dom";
import './Formulario.css'

function Formulario() {
    return (
        <div>
            <h2 className="section__title">CONTACTO</h2>
            <div className="section__container">
                <div className="contact-form">
                    <form action="enviar.php" method="post" className="contact-form__form">
                        <label htmlFor="fname" className="contact-form__label">Nombre y Apellidos</label>
                        <input type="text" id="fname" name="nombre" placeholder="Introduzca su Nombre y Apellidos" required className="contact-form__input" />
                        <label htmlFor="lname" className="contact-form__label">Email</label>
                        <input type="text" id="lname" name="correo" placeholder="correo@ejemplo.com" required className="contact-form__input" />
                        <label htmlFor="asunto" className="contact-form__label">Asunto</label>
                        <input type="text" id="asunto" name="asunto" placeholder="Introduzca el Asunto del Mensaje" required className="contact-form__input" />
                        <label htmlFor="subject" className="contact-form__label">Mensaje</label>
                        <textarea id="subject" name="mensaje" placeholder="Escriba algo..." required className="contact-form__textarea"></textarea>
                        <div className="privacy-policy">
                            <input type="checkbox" id="privacy" name="privacy" value="Accepted" required className="privacy-policy__checkbox" />
                            <label htmlFor="privacy" className="privacy-policy__label">
                                <a className="privacy-policy__link" href="politica_de_privacidad.html" target="_blank">He leído y acepto la Política de Privacidad*</a>
                            </label>
                        </div>
                        <div className="g-recaptcha" data-sitekey="6LdD3UocAAAAAJoT9GWU9TvRcwpTT7CUbn8_vXBK"></div>
                        <button id="boton" type="submit" className="contact-form__button">ENVIAR</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export { Formulario }
