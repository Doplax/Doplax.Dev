'use client'
import React from 'react';
import styles from './ModalMenu.module.css'; // Asegúrate de que este archivo de estilos exista o ajusta la referencia

const ModalMenu = ({ closeModal, menuItems }) => {
  return (
    <div
      onClick={closeModal}
      className={styles.modalBackground}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.centerContent}>
        <div className={styles.menuBox}>
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => (
              <li className={styles.menuItem} key={index}>
                <a href={item.route} className={styles.menuLink}>
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
