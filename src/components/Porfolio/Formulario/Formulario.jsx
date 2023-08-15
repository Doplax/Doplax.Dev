import React from "react";
import styles from './Formulario.module.css';
import { PageTitle } from '../../PageTitle';

function Formulario() {
    return (
        <>
        <PageTitle>Contacto</PageTitle>
            <div className={styles.form}>
                <div className={styles.form__container}>
                    <form action="enviar.php" method="post" className={styles.form__fields}>
                        <label htmlFor="fname" className={styles.form__label}>Nombre y Apellidos</label>
                        <input type="text" id="fname" name="nombre" placeholder="Introduzca su Nombre y Apellidos" required className={styles.form__input} />
                        
                        <label htmlFor="lname" className={styles.form__label}>Email</label>
                        <input type="text" id="lname" name="correo" placeholder="correo@ejemplo.com" required className={styles.form__input} />
                        
                        <label htmlFor="asunto" className={styles.form__label}>Asunto</label>
                        <input type="text" id="asunto" name="asunto" placeholder="Introduzca el Asunto del Mensaje" required className={styles.form__input} />
                        
                        <label htmlFor="subject" className={styles.form__label}>Mensaje</label>
                        <textarea id="subject" name="mensaje" placeholder="Escriba algo..." required className={styles.form__textarea}></textarea>
                        
                        <div className={styles.form__privacy}>
                            <input type="checkbox" id="privacy" name="privacy" value="Accepted" required className={styles.form__checkbox} />
                            <label htmlFor="privacy" className={styles.form__privacyLabel}>
                                <a className={styles.form__privacyLink} href="politica_de_privacidad.html" target="_blank">He leído y acepto la Política de Privacidad*</a>
                            </label>
                        </div>
                        <div className="g-recaptcha" data-sitekey="6LdD3UocAAAAAJoT9GWU9TvRcwpTT7CUbn8_vXBK"></div>
                        <button id="boton" type="submit" className={styles.form__button}>ENVIAR</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export { Formulario }
