import React from 'react';
import { Navigate } from 'react-router-dom';
import { LeftSidebar } from '../../components/Aside/LeftSidebar';
import { CenterFeed } from '../../components/PostList/CenterFeed';   // 🔄
import { RighSidebar } from '../../components/Aside/RightSidebar';
import { useAuth } from '../../context/useAuth';
import { usePosts } from '../../hooks/usePosts';                     // ✅ NUEVO
import styles from './MyPosts.module.css';
// 🔄 se va el import de initialPosts

export const MyPosts: React.FC = () => {
  const { user } = useAuth();

  // ✅ NUEVO: hooks SIEMPRE arriba del return condicional (regla de React).
  //    Si user aún no cargó, userId = undefined → pide feed global,
  //    y en cuanto hidrate el contexto se vuelve a pedir con user._id.
  const { posts, loading, error, addPost, removePost } = usePosts(user?._id);

  // Sin sesión no se entra aquí
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className={styles.homeGrid}>
      <LeftSidebar />

      <main className={styles.centerColumn}>
        <div className={styles.headerTitle}>
          <h2>✍️ Mis Publicaciones</h2>
          <p>Gestiona y revisa todas las publicaciones que has creado.</p>
        </div>

        {/* ✅ NUEVO: feedback de carga / error */}
        {loading && <p>Cargando tus publicaciones…</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}

        {/* ✅ NUEVO: CenterFeed ya trae <CreatePost/> arriba y pinta PostCard con onDelete */}
        <CenterFeed
          posts={posts}
          currentUser={user}
          onPostCreate={addPost}
          onDelete={removePost}
        />

        {/* 🔄 Empty state solo si NO está cargando, NO hay error y NO hay posts */}
        {!loading && !error && posts.length === 0 && (
          <div className={styles.emptyState}>
            <p>
              Aún no has publicado nada. ¡Crea tu primera publicación aquí arriba!
            </p>
          </div>
        )}
      </main>

      <RighSidebar />
    </div>
  );
};