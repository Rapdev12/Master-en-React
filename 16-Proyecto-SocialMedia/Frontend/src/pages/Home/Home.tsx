import styles from './Home.module.css';
import { CreatePost } from '../../components/CreatePost/CreatePost';
import { PostCard } from '../../components/PostCard/PostCard';
import type {Publication} from '../../types/index';
import { initialPosts, currentUser } from '../../data/data'
import { useState } from 'react';

export const Home = () => {

    // Guardamos los posts en un estado local para poder agregar nuevos más adelante
  const [posts, setPosts] = useState<Publication[]>(initialPosts);

  // Función para simular la publicación de un nuevo post
  const handlePostCreate = (content: string) => {
    const newPost: Publication = {
      _id: `post-${Date.now()}`,
      user: currentUser,
      text: content,
      created_at: 'Justo ahora'
    };

    // Añadimos el nuevo post al principio de la lista
    setPosts([newPost, ...posts]);
  };

  return (
    <div className={styles.container}>
      {/* 1. Columna Izquierda: Accesos directos */}
      <aside className={styles.leftColumn}>
        <div className={styles.card}>
          <h3 className={styles.columnTitle}>Accesos directos</h3>
          <ul className={styles.linkList}>
            <li><a href="#feed" className={styles.activeLink}>📰 Muro global</a></li>
            <li><a href="#siguiendo">👥 Siguiendo</a></li>
            <li><a href="#guardados">🔖 Guardados</a></li>
            <li><a href="#mis-posts">✍️ Mis publicaciones</a></li>
          </ul>
        </div>
      </aside>

      {/* 2. Columna Central: Feed */}
      <main className={styles.centerColumn}>
        {/* Aquí irá la caja de "¿Qué estás pensando?" */}
        <div className={styles.createPostPlaceholder}>
          <p>📝 Caja para crear publicación (Siguiente paso)</p>
          <CreatePost user={currentUser} onPostCreate={handlePostCreate} />
        </div>

        {/* Aquí se renderizarán los PostCard */}
        <div className={styles.postsContainer}>
          <div className={styles.feed}>
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
        </div>
      </main>

      {/* 3. Columna Derecha: Widgets / Tendencias */}
      <aside className={styles.rightColumn}>
        <div className={styles.card}>
          <h3 className={styles.columnTitle}>Tendencias 🔥</h3>
          <ul className={styles.trendingList}>
            <li>
              <span className={styles.tag}>#React19</span>
              <small className={styles.postCount}>12.5k posts</small>
            </li>
            <li>
              <span className={styles.tag}>#TypeScript</span>
              <small className={styles.postCount}>8.3k posts</small>
            </li>
            <li>
              <span className={styles.tag}>#BubbleWeb</span>
              <small className={styles.postCount}>5.1k posts</small>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Home;