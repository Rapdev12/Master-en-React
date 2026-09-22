import React from 'react';
import { CreatePost } from '../CreatePost/CreatePost';
import { PostCard } from '../PostCard/PostCard';
import type { Publication, User } from '../../types';
import styles from './CenterFeed.module.css';



interface CenterFeedProps {
  posts: Publication[];
  currentUser?: User;
  onPostCreate: (content: string) => void;
}

export const CenterFeed: React.FC<CenterFeedProps> = ({
  posts,
  currentUser,
  onPostCreate
}) => {
  return (
    <main className={styles.centerColumn}>
      {/* 1. Caja para crear publicación */}
      <CreatePost user={currentUser} onPostCreate={onPostCreate} />

      {/* 2. Listado de publicaciones */}
      <div className={styles.postsContainer}>
        <div className={styles.feed}>
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
};