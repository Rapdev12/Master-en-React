// components/CreatePost/CreatePost.tsx
import React, { useState } from 'react';
import type { User } from '../../types/index';
import styles from './CreatePost.module.css';

// ─────────────────────────────────────────────────────────────
// Necesitamos la misma URL base que en PostCard para el avatar
// ─────────────────────────────────────────────────────────────
const UPLOADS_URL = "http://localhost:3000/uploads/";

interface CreatePostProps {
  user?: User;
  // 🔄 Ahora acepta también archivos opcionales
  onPostCreate?: (content: string, files?: File[]) => void;
}

export const CreatePost: React.FC<CreatePostProps> = ({ user, onPostCreate }) => {
  const [content, setContent] = useState('');
  const [files, setFiles] = useState<File[]>([]);     // 🔄 NUEVO: estado de archivos

  // 🔄 Handler del input file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    // Array.from convierte FileList → File[] (lo que queremos)
    // .slice(0, 5) respeta el límite del backend
    setFiles(Array.from(e.target.files).slice(0, 5));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ahora permitimos publicar si hay texto O imágenes
    if (!content.trim() && files.length === 0) return;

    if (onPostCreate) {
      onPostCreate(content.trim(), files);   // 🔄 enviamos los dos
    }

    // Limpiamos todo
    setContent('');
    setFiles([]);
  };

  // Avatar con URL completa (igual que en PostCard)
  const avatarSrc = user?.image
    ? `${UPLOADS_URL}${user.image}`
    : "https://via.placeholder.com/40";

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.topSection}>
        <img
          src={avatarSrc}
          alt={user?.nick || 'Usuario'}                  // 🔄 name → nick
          className={styles.avatar}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/40";
          }}
        />

        <textarea
          placeholder={`¿Qué estás pensando${user ? `, ${user.nick}` : ''}?`}  // 🔄 nick
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.textarea}
          rows={3}
        />
      </div>

      {/* 🔄 NUEVO: previsualización de los archivos seleccionados */}
      {files.length > 0 && (
        <div className={styles.preview}>
          {files.map((file) => (
            <span key={file.name} className={styles.fileChip}>
              {file.name}
            </span>
          ))}
        </div>
      )}

      <div className={styles.bottomSection}>
        {/* 🔄 NUEVO: input file (oculto) + label estilizado */}
        <label className={styles.fileLabel}>
          📷 Añadir fotos
          <input
            type="file"
            accept="image/*"
            multiple                          // permite varias
            onChange={handleFileChange}
            className={styles.fileInput}      // oculto por CSS
          />
        </label>

        <button
          type="submit"
          className={styles.publishBtn}
          disabled={!content.trim() && files.length === 0}   // 🔄 permite solo-imágenes
        >
          Publicar
        </button>
      </div>
    </form>
  );
};