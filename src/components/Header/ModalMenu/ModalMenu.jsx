'use client'
import React from 'react';
import styles from './ModalMenu.module.css'; // Asegúrate de que este archivo de estilos exista o ajusta la referencia

const ModalMenu = ({ closeModal, menuItems, isOpen }) => {
  return (
    <div
      onClick={closeModal}
      className={`${styles.modalBackground} ${isOpen ? styles.active : ''}`}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.centerContent}>
        <div className={`${styles.menuBox} ${isOpen ? styles.active : ''}`}>
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <a href={item.route} className={styles.link}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};



export { ModalMenu };
