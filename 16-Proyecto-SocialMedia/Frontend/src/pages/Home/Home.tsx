import styles from './Home.module.css';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';            // 👈
import { LeftSidebar } from '../../components/Aside/LeftSidebar';
import { RighSidebar } from '../../components/Aside/RightSidebar';
import { CenterFeed } from '../../components/PostList/CenterFeed';
import { initialPosts } from '../../data/data';          // 👈 ya NO importes currentUser
import { useAuth } from '../../context/useAuth';         // 👈
import type { Publication } from '../../types';

export const Home = () => {
  const { user } = useAuth();                            // 👈 el usuario real del login
  const [posts, setPosts] = useState<Publication[]>(initialPosts);

  // Si no hay sesión, al login (protege la ruta sin depender solo del guard)
  if (!user) return <Navigate to="/login" replace />;

  const handlePostCreate = (text: string) => {
    const newPost: Publication = {
      _id: `post-${Date.now()}`,
      user,                                              // 👈 el autor real
      text,
      created_at: 'Justo ahora'
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div className={styles.container}>
      <LeftSidebar />
      <CenterFeed
        posts={posts}
        currentUser={user}                               // 👈 el usuario real
        onPostCreate={handlePostCreate}
      />
      <RighSidebar />
    </div>
  );
};

export default Home;