import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import type { User } from '../types';

// 5. Definimos la interfaz de las props:
// Obligatorio: 'children' (el contenido dinámico de la página que estemos visitando)
// Opcional: 'user' (los datos del usuario si está logueado)
interface MainLayoutProps {
  children?: ReactNode;
  user?: User;
}

// 6. Declaramos el componente desestructurando 'children' y 'user'
function MainLayout({ children, user }: MainLayoutProps) {
  return (
    <div className={styles.layoutContainer}>
      {/* Barra superior fija: le pasamos el usuario para que el Nav sepa si mostrar su nombre o 'Login' */}
      <Header user={user} />

      {/* Contenedor principal: la etiqueta semántica <main> envuelve lo que cambie en cada página */}
      <main className={styles.mainContent}>
         {children || <Outlet />}
      </main>

      {/* Pie de página de la aplicación */}
      <Footer />
    </div>
  );
}

export default MainLayout;