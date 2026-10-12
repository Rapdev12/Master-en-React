import React from 'react';
import { CreatePost } from '../CreatePost/CreatePost';
import { PostCard } from '../PostCard/PostCard';
import type { Publication, User } from '../../types';   // 👈 User otra vez
import styles from './CenterFeed.module.css';

interface CenterFeedProps {
  posts: Publication[];
  currentUser?: User;                                    // 👈 restaurar la prop
  onPostCreate: (content: string, files?: File[]) => void;
  onDelete?: (id: string) => void; 
}

export const CenterFeed: React.FC<CenterFeedProps> = ({
  posts,
  currentUser,                                           // 👈 y el destructuring
  onPostCreate,
  onDelete,
}) => {
  return (
    <main className={styles.centerColumn}>
      <CreatePost user={currentUser} onPostCreate={onPostCreate} />

      <div className={styles.postsContainer}>
        <div className={styles.feed}>
           {posts.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              currentUser={currentUser}               // ✅ NUEVO
              onDelete={onDelete}                     // ✅ NUEVO
            />
          ))}
        </div>
      </div>
    </main>
  );
};