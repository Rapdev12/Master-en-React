import styles from './Home.module.css';
import {LeftSidebar} from '../../components/Aside/LeftSidebar'
import { RighSidebar } from '../../components/Aside/RightSidebar';
import  {CenterFeed}  from '../../components/PostList/CenterFeed';
import  { useState } from 'react';
import { initialPosts, currentUser } from '../../data/data';
import type { Publication } from '../../types';


export const Home = () => {

  const [posts, setPosts] = useState<Publication[]>(initialPosts);

  const handlePostCreate = (text: string) => {
    const newPost: Publication = {
      _id: `post-${Date.now()}`,
      user: currentUser,
      text,
      created_at: 'Justo ahora'
    };
    setPosts([newPost, ...posts]);
  };

  return (

    <div className={styles.container}>
      {/* 1. Columna Izquierda: Accesos directos */}
      <LeftSidebar/>

      {/* 2. Columna Central: Feed */}
      
      <CenterFeed 
        posts={posts} 
        currentUser={currentUser} 
        onPostCreate={handlePostCreate} 
      />

      {/* 3. Columna Derecha: Widgets / Tendencias */}
      <RighSidebar/>
    </div>
  );
};

export default Home;