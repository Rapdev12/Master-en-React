// components/PostCard/PostCard.tsx
import type { Publication } from '../../types/index';
import styles from './PostCard.module.css';

// ─────────────────────────────────────────────────────────────
// URL base donde el backend sirve las imágenes.
// El backend guarda "88eb4897-....jpeg" en /uploads y lo
// expone vía express.static → se accede en /uploads/<nombre>
// ─────────────────────────────────────────────────────────────
const UPLOADS_URL = "http://localhost:3000/uploads/";

// ─────────────────────────────────────────────────────────────
// Helper: convierte el ISO del backend a algo legible.
// "2026-09-18T23:14:36.289Z" → "18 sep 2026, 23:14"
// ─────────────────────────────────────────────────────────────
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
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  // Fallback del avatar si el usuario no tiene imagen guardada
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
      </footer>
    </article>
  );
};