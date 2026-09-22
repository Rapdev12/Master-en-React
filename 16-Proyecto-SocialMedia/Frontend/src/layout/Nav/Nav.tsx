import styles from './Nav.module.css';
import type { User } from '../../types/index';
import { NavLink } from 'react-router-dom';


interface NavProps {
    user?: User;
}

function Nav({ user }: NavProps) {


    return (
        <nav className={styles.nav}>
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/mypost"> Mis publicaciones</NavLink>
                    <ul className={styles.submenu}>
                        <li><a href="#publicadas">Crear</a></li>
                        <li><a href="#borradores">Ver mis publicaciones</a></li>
                    </ul>
                </li>
                <li>
                    {user ? (
                        <div className={styles.userMenu}>
                            {/* Botón o trigger que muestra el avatar/nombre y una flechita */}
                            <button
                                type="button"
                                className={styles.userTrigger}
                                aria-haspopup="true"
                            >
                                {/* Si el usuario tiene avatar lo mostramos, si no una inicial */}
                                <span className={styles.avatar}>
                                    {user.image ? (
                                        <img src={user.image} alt={user.name} />
                                    ) : (
                                        user.name.charAt(0).toUpperCase()
                                    )}
                                </span>
                                <span className={styles.userName}>{user.name}</span>
                                <span className={styles.arrow}>▾</span>
                            </button>
                            {/* Submenú desplegable */}
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
                                    {/* Acción de Cerrar Sesión */}
                                    <button
                                        type="button"
                                        className={`${styles.dropdownItem} ${styles.logoutButton}`}
                                        onClick={() => console.log('Cerrar sesión')}
                                    >
                                        Cerrar sesión
                                    </button>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <a href="#login" className={styles.loginLink}>
                            Login
                        </a>
                    )}
                </li>
            </ul>
        </nav >
    );
};
export default Nav;