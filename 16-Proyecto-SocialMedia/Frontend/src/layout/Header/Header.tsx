import styles from './Header.module.css';
import Nav from '../Nav/Nav';
import type { User } from '../../types/index';
import logo from '../../assets/bubble.png'


// 1. Tipamos las props que recibe el Header
interface HeaderProps {
  user?: User; // Opcional: si está logueado viene el objeto User, si no, undefined
}
function Header({ user }: HeaderProps) {
  return (
    <header className={styles.header}>
      {/* Columna 1: Marca (Logo + Nombre juntos en un solo bloque) */}
      <div className={styles.brand}>
        <img
          src={logo}
          alt="BubbleWeb Logo"
          className={styles.logo}
        />
        <h1 className={styles.title}>
          <span className={styles.bubble}>Bubble</span>
          <span className={styles.web}>Web</span>
        </h1>
      </div>
      {/* Columna 2: Barra de búsqueda */}
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Buscar en BubbleWeb..."
          className={styles.searchInput}
        />
        <button type="button" className={styles.searchButton} aria-label="Buscar">
          🔍
        </button>
      </div>
      {/* Columna 3: Navegación y acciones */}
      <Nav user={user} />
    </header>
  );
};

export default Header;