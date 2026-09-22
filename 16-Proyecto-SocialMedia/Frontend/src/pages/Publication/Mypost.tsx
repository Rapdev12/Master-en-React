import React from 'react';
import { LeftSidebar } from '../../components/Aside/LeftSidebar';

import { PostCard } from '../../components/PostCard/PostCard';
import { initialPosts, currentUser } from '../../data/data'; // Ajusta la ruta a tu carpeta data
import styles from './MyPosts.module.css';
import { RighSidebar } from '../../components/Aside/RightSidebar';

export const MyPosts: React.FC = () => {
  // 1. Filtramos los posts para obtener solo los del usuario actual
  const myPosts = initialPosts.filter((post) => post.user._id === currentUser._id);

  return (
    <div className={styles.homeGrid}>
      {/* Columna Izquierda */}
      <LeftSidebar />

      {/* Columna Central: Mis Publicaciones */}
      <main className={styles.centerColumn}>
        <div className={styles.headerTitle}>
          <h2>✍️ Mis Publicaciones</h2>
          <p>Gestiona y revisa todas las publicaciones que has creado.</p>
        </div>

        <div className={styles.feed}>
          {myPosts.length > 0 ? (
            myPosts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))
          ) : (
            <div className={styles.emptyState}>
              <p>Aún no has publicado nada. ¡Crea tu primera publicación en el muro global!</p>
            </div>
          )}
        </div>
      </main>

      {/* Columna Derecha */}
      <RighSidebar />
    </div>
  );
};
