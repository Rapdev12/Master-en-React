// 1. Importamos el tipo especial 'ReactNode' de React.
// ReactNode le dice a TypeScript que 'children' puede ser texto, etiquetas HTML o cualquier componente de React.
import type { ReactNode } from 'react';

// 2. Importamos los estilos de este layout
import styles from './MainLayout.module.css';

// 3. Importamos el Header y el Footer desde sus respectivas carpetas
import Header from './Header/Header';
import Footer from './Footer/Footer';

// 4. Importamos el tipo User para poder pasarle los datos del usuario al Header
import type { User } from '../types';

// 5. Definimos la interfaz de las props:
// Obligatorio: 'children' (el contenido dinámico de la página que estemos visitando)
// Opcional: 'user' (los datos del usuario si está logueado)
interface MainLayoutProps {
  children: ReactNode;
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
        {children}
      </main>

      {/* Pie de página de la aplicación */}
      <Footer />
    </div>
  );
}

export default MainLayout;