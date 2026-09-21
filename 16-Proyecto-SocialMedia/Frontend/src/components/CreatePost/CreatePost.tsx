import React, { useState } from 'react';
import type { User } from '../../types/index'; // Ajusta la ruta a tus tipos
import styles from './CreatePost.module.css';

interface CreatePostProps {
  user?: User;
  // Opcional: una función para cuando se cree el post
  onPostCreate?: (content: string) => void;
}

export const CreatePost: React.FC<CreatePostProps> = ({ user, onPostCreate }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!content.trim()) return;

    // Aquí notificamos al componente padre
    if (onPostCreate) {
      onPostCreate(content);
    }

    // Limpiamos la caja de texto
    setContent('');
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.topSection}>
        {/* Renderiza el avatar del usuario o un placeholder si no hay imagen */}
        <img 
          src={user?.image || 'https://via.placeholder.com/40'} 
          alt={user?.name || 'Usuario'} 
          className={styles.avatar} 
        />
        
        {/* Vincula este textarea con tu estado local "content" */}
        <textarea
          placeholder={`¿Qué estás pensando${user?.name ? `, ${user.name}` : ''}?`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.textarea}
          rows={3}
        />
      </div>

      <div className={styles.bottomSection}>
        {/* Aquí podemos agregar íconos de fotos/emojis más adelante */}
        <button 
          type="submit" 
          className={styles.publishBtn}
          disabled={!content.trim()}
        >
          Publicar
        </button>
      </div>
    </form>
  );
};