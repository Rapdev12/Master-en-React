import styles from './Nav.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/useAuth';

export const Nav = () => {
  const { isAuth, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/mypost">Mis publicaciones</NavLink>
          <ul className={styles.submenu}>
            <li><a href="#publicadas">Crear</a></li>
            <li><a href="#borradores">Ver mis publicaciones</a></li>
          </ul>
        </li>
        <li>
          {isAuth && user ? (
            <div className={styles.userMenu}>
              <button
                type="button"
                className={styles.userTrigger}
                aria-haspopup="true"
              >
                <span className={styles.avatar}>
                  {user.image ? (
                    <img src={user.image} alt={user.name || user.nick} />
                  ) : (
                    (user.name || user.nick || 'U').charAt(0).toUpperCase()
                  )}
                </span>
                <span className={styles.userName}>
                  {user.name || `@${user.nick}`}
                </span>
                <span className={styles.arrow}>▾</span>
              </button>

              <ul className={styles.dropdown}>
                <li>
                  <a href="#perfil" className={styles.dropdownItem}>
                    Mi perfil
                  </a>
                </li>
                <li>
                  <a href="#configuracion" className={styles.dropdownItem}>
                    Ajustes
                  </a>
                </li>
                <li className={styles.divider}></li>
                <li>
                  <button
                    type="button"
                    className={`${styles.dropdownItem} ${styles.logoutButton}`}
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login" className={styles.loginLink}>
              login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;