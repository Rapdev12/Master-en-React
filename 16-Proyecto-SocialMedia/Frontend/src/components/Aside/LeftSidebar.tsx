import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Aside.module.css';


export const LeftSidebar: React.FC = () => {
  return (
    <aside className={styles.leftColumn}>
      <div className={styles.card}>
        <h3 className={styles.columnTitle}>Accesos directos</h3>
        <ul className={styles.linkList}>
          <li>
            <NavLink 
              to="/home" 
              className={({ isActive }) => isActive ? styles.activeLink : styles.link}
            >
              📰 Muro global
            </NavLink>
          </li>
          <li><a href="#siguiendo" className={styles.link}>👥 Siguiendo</a></li>
          <li><a href="#guardados" className={styles.link}>🔖 Guardados</a></li>
          <li><NavLink to="/mypost" className={styles.link}>✍️ Mis publicaciones</NavLink></li>
        </ul>
      </div>
    </aside>
  );
};