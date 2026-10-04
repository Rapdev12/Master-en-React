import React from 'react';
import { Navigate } from 'react-router-dom';
import { LeftSidebar } from '../../components/Aside/LeftSidebar';
import { PostCard } from '../../components/PostCard/PostCard';
import { initialPosts } from '../../data/data';          // 👈 SOLO initialPosts
import { RighSidebar } from '../../components/Aside/RightSidebar';
import { useAuth } from '../../context/useAuth';         // 👈 el usuario real
import styles from './MyPosts.module.css';

export const MyPosts: React.FC = () => {
  const { user } = useAuth();

  // Sin sesión no se entra aquí
  if (!user) return <Navigate to="/login" replace />;

  // 1. Filtramos por el usuario logueado (por _id si existe, si no por nick)
  const myPosts = initialPosts.filter((post) =>
    user._id ? post.user._id === user._id : post.user.nick === user.nick
  );

  return (
    <div className={styles.homeGrid}>
      <LeftSidebar />

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

      <RighSidebar />
    </div>
  );
};