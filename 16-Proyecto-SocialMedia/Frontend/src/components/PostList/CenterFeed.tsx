import React from 'react';
import { CreatePost } from '../CreatePost/CreatePost';
import { PostCard } from '../PostCard/PostCard';
import type { Publication, User } from '../../types';   // 👈 User otra vez
import styles from './CenterFeed.module.css';

interface CenterFeedProps {
  posts: Publication[];
  currentUser?: User;                                    // 👈 restaurar la prop
  onPostCreate: (content: string) => void;
}

export const CenterFeed: React.FC<CenterFeedProps> = ({
  posts,
  currentUser,                                           // 👈 y el destructuring
  onPostCreate
}) => {
  return (
    <main className={styles.centerColumn}>
      <CreatePost user={currentUser} onPostCreate={onPostCreate} />

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