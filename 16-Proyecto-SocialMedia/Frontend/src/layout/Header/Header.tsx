import styles from './Header.module.css';
import Nav from '../Nav/Nav';
import logo from '../../assets/bubble.png';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img src={logo} alt="BubbleWeb Logo" className={styles.logo} />
        <h1 className={styles.title}>
          <span className={styles.bubble}>Bubble</span>
          <span className={styles.web}>Web</span>
        </h1>
      </div>

      <div className={styles.searchBar}>
        <input type="text" placeholder="Buscar en BubbleWeb..." className={styles.searchInput} />
        <button type="button" className={styles.searchButton} aria-label="Buscar">🔍</button>
      </div>

      <Nav />   {/* 👈 sin props: Nav obtiene isAuth y user del AuthContext */}
    </header>
  );
}

export default Header;