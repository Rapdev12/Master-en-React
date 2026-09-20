import styles from './Nav.module.css';

import type { User } from '../../types/index';


interface NavProps {
    user?: User;
}

function Nav({ user }: NavProps) {


    return (
        <nav className={styles.nav}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#mis-publicaciones">Mis publicaciones</a>
                    <ul className={styles.submenu}>
                        <li><a href="#publicadas">Crear</a></li>
                        <li><a href="#borradores">ver mis publicaciones</a></li>
                    </ul>
                </li>
                <li>
                    {user ? (
                        <a href="#perfil" className={styles.userProfile}>
                            {user.name}
                        </a>
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