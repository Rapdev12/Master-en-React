import type { Publication } from '../../types/index'; // Ajusta la ruta a tus tipos
import styles from './PostCard.module.css';


interface PostCardProps {
    post: Publication;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
    return (
        <article className={styles.card}>
            {/* 1. Cabecera con datos del autor */}
            <header className={styles.header}>
                <img
                    src={post.user.image || 'https://via.placeholder.com/40'}
                    alt={post.user.name}
                    className={styles.avatar}
                />
                <div>
                    <h3 className={styles.authorName}>{post.user.name}</h3>
                    <span className={styles.date}>{post.created_at}</span>
                </div>
            </header>

            {/* 2. Contenido del Post */}
            <div className={styles.content}>
                <p>{post.text}</p>
                {/* Renderizado condicional de la imagen si el post tiene una */}
                {post.file && (
                    <img src={post.file} alt="Publicación" className={styles.postImage} />
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