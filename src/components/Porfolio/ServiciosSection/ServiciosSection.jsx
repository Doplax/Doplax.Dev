import React from "react";
import { PageTitle } from "../../PageTitle/PageTitle";
import {
  faMobile,
  faPenRuler,
  faCode,
  faThumbsUp,
  faBatteryFull,
  faCrosshairs,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ServiciosSection() {
  const serviceContainerStyle =
    "flex flex-col justify-start align-middle my-20";
  const iconColor = { color: "var(--yellow)" };
  const iconSice = "3x";
  const positionText_h4 = "text-center text-gray-100";
  const positionText_p = "text-center text-gray-300 text-base";

  {
    /* SERVCICIOS */
  }
  return (
    <section className="my-28">
      <PageTitle>Services</PageTitle>
      <h2 className="font-bold text-3xl my-10">
        Services I offer to my clients
      </h2>
      <div className="md:grid md:grid-cols-3 md:gap-10">
        <div className={serviceContainerStyle}>
          <FontAwesomeIcon icon={faMobile} size={iconSice} style={iconColor} />
          <h4 className={positionText_h4}>Responsive Sites</h4>
          <p className={positionText_p}>
            Your site will display correctly on any device, whether it`s
            computers, tablets, or mobiles.
          </p>
        </div>
        <div className={serviceContainerStyle}>
          <FontAwesomeIcon
            icon={faPenRuler}
            size={iconSice}
            style={iconColor}
          />
          <h4 className={positionText_h4}>Creative Designs</h4>
          <p className={positionText_p}>
            Design is fundamental, therefore it must be attractive to help
            retain potential customers on your website.
          </p>
        </div>

        <div className={serviceContainerStyle}>
          <FontAwesomeIcon icon={faCode} size={iconSice} style={iconColor} />
          <h4 className={positionText_h4}>Development</h4>
          <p className={positionText_p}>
            The scalability of the project is crucial for growing businesses
            thinking long-term.
          </p>
        </div>
        
        <div className={serviceContainerStyle}>
          <FontAwesomeIcon
            icon={faThumbsUp}
            size={iconSice}
            style={iconColor}
          />
          <h4 className={positionText_h4}>Social Media Integration</h4>
          <p className={positionText_p}> Social media are an indispensable tool for any business. I`ll make sure they`re updated and optimized.</p>
        </div>
        <div className={serviceContainerStyle}>
          <FontAwesomeIcon
            icon={faBatteryFull}
            size={iconSice}
            style={iconColor}
          />
          <h4 className={positionText_h4}>Performance</h4>
          <p className={positionText_p}>
            The browsing experience should be smooth and efficient, essential to
            provide the best service.
          </p>
        </div>
        <div className={serviceContainerStyle}>
          <FontAwesomeIcon
            icon={faCrosshairs}
            size={iconSice}
            style={iconColor}
          />
          <h4 className={positionText_h4}>SEO</h4>
          <p className={positionText_p}>
            On the internet, if you don`t appear on Google, you don`t exist, so good practices are required to position your business online.
          </p>
        </div>
      </div>
    </section>
  );
}

export { ServiciosSection };
