import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faCodepen, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './YourComponent.css'; // Asegúrate de mover tu CSS a este archivo

const YourComponent = () => {
  const socialMedia = [
    { id: 6, color: '#131212', link: 'https://github.com/Doplax', icon: faGithub, name: 'Github' },
    { id: 5, color: '#f2a918', link: 'https://codepen.io/doplax-the-scripter', icon: faCodepen, name: 'Components' },
    { id: 4, color: '#1da1f2', link: 'https://twitter.com/DoplaxDev', icon: faTwitter, name: 'Twitter' },
    { id: 3, color: '#c32aa3', link: 'https://www.instagram.com/doplax.dev/', icon: faInstagram, name: 'Instagram' },
    { id: 2, color: '#ff0000', link: 'https://www.youtube.com/channel/UCf0IJU9vXlcUd2CALEBA93A', icon: faYoutube, name: 'Youtube' },
    { id: 1, color: '#0a66c2', link: 'https://www.linkedin.com/in/pol-valle-montes/', icon: faLinkedin, name: 'Linkedin' },
  ];

  return (
    <ul>
      {socialMedia.map(item => (
        <li key={item.id} style={{ '--i': item.id, '--clr': item.color }} className="custom-li">
          <a href={item.link}>
            <span>
              <FontAwesomeIcon icon={item.icon} />
            </span>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default YourComponent;
