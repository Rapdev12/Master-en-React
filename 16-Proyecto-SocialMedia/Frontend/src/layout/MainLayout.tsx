import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function MainLayout() {
  return (
    <div className={styles.layoutContainer}>
      <Header />                        {/* 👈 ya no hay que pasarle nada */}
      <main className={styles.mainContent}>
        <Outlet />                      {/* 👈 el router inyecta la página aquí */}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;