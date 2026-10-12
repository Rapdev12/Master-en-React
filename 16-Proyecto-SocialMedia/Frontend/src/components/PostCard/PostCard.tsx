// components/PostCard/PostCard.tsx
import type { Publication, User } from '../../types/index';
import styles from './PostCard.module.css';

const UPLOADS_URL = "http://localhost:3000/uploads/";


function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

interface PostCardProps {
  post: Publication;
  currentUser?: User;                      // ✅ NUEVO
  onDelete?: (id: string) => void;         // ✅ NUEVO
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  currentUser,                             // ✅ NUEVO
  onDelete,                                // ✅ NUEVO
}) => {
  // ✅ NUEVO: ¿el post es del usuario logueado?
  //    Doble check porque en tus tipos `User._id` es opcional.
  const isOwner =
    !!currentUser?._id && post.user._id === currentUser._id;

  // 🔄 se mantiene: fallback del avatar
  const avatarSrc = post.user.image
    ? `${UPLOADS_URL}${post.user.image}`
    : "https://via.placeholder.com/40";


  return (
    <article className={styles.card}>

      {/* 1. Cabecera con datos del autor */}
      <header className={styles.header}>
        <img
          src={avatarSrc}
          alt={post.user.nick}                       // 🔄 name → nick
          className={styles.avatar}
          onError={(e) => {
            // Si la URL falla (404), mostramos placeholder automáticamente
            (e.target as HTMLImageElement).src = "https://via.placeholder.com/40";
          }}
        />
        <div>
          {/* 🔄 name → nick (lo que devuelve el backend) */}
          <h3 className={styles.authorName}>{post.user.nick}</h3>
          {/* 🔄 fecha formateada en lugar del ISO crudo */}
          <span className={styles.date}>{formatDate(post.created_at)}</span>
        </div>
      </header>

      {/* 2. Contenido del Post */}
      <div className={styles.content}>
        {/* 🔄 Fallback si el backend manda description: null */}
        {post.text ? (
          <p>{post.text}</p>
        ) : (
          <p className={styles.empty}><em>Sin descripción</em></p>
        )}

        {/* 🔄 file es string[]. Renderizamos TODAS las imágenes */}
        {post.file && post.file.length > 0 && (
          <div className={styles.imagesGrid}>
            {post.file.map((filename) => (
              <img
                key={filename}
                src={`${UPLOADS_URL}${filename}`}
                alt="Imagen de la publicación"
                className={styles.postImage}
                onError={(e) => {
                  // Si una imagen no carga, la ocultamos (no dejamos icono roto)
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Pie de tarjeta: Barra de acciones sencilla */}
      <footer className={styles.footer}>
        <button type="button" className={styles.actionBtn}>
          ❤️ Me gusta
        </button>
        <button type="button" className={styles.actionBtn}>
          💬 Comentar
        </button>
        <button type="button" className={styles.actionBtn}>
          🔄 Compartir
        </button>
         {/* ✅ NUEVO: botón borrar, solo si el post es tuyo */}
    {isOwner && (
      <button
        type="button"
        className={`${styles.actionBtn} ${styles.deleteBtn}`}   // ✅ NUEVO
        onClick={() => onDelete?.(post._id)}
        aria-label="Eliminar publicación"
      >
        🗑️ Eliminar
      </button>
    )}
      </footer>
    </article>
  );
};