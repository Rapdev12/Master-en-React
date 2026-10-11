import styles from './Home.module.css';
import { Navigate } from 'react-router-dom';
import { LeftSidebar } from '../../components/Aside/LeftSidebar';
import { RighSidebar } from '../../components/Aside/RightSidebar';
import { CenterFeed } from '../../components/PostList/CenterFeed';
import { useAuth } from '../../context/useAuth';
import { usePosts } from '../../hooks/usePosts';        // ✅ NUEVO

export const Home = () => {
  const { user } = useAuth();                            // usuario logueado
  const { posts, loading, error, addPost } = usePosts(); // ✅ NUEVO: trae del backend

  // Si no hay sesión, redirige al login
  if (!user) return <Navigate to="/login" replace />;

  return (
    <div className={styles.container}>
      <LeftSidebar />

      {/* ✅ NUEVO: feedback mientras carga / si falla */}
      {loading && <p>Cargando publicaciones…</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      <CenterFeed
        posts={posts}
        currentUser={user}
        onPostCreate={addPost}                            // ✅ usa el del hook
      />

      <RighSidebar />
    </div>
  );
};

export default Home;