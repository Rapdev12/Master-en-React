import type React from "react";
import styles from './Aside.module.css';



export const RighSidebar: React.FC = () =>{
    return (
        <aside className={styles.rightColumn}>
        <div className={styles.card}>
          <h3 className={styles.columnTitle}>Tendencias 🔥</h3>
          <ul className={styles.trendingList}>
            <li>
              <span className={styles.tag}>#React19</span>
              <small className={styles.postCount}>12.5k posts</small>
            </li>
            <li>
              <span className={styles.tag}>#TypeScript</span>
              <small className={styles.postCount}>8.3k posts</small>
            </li>
            <li>
              <span className={styles.tag}>#BubbleWeb</span>
              <small className={styles.postCount}>5.1k posts</small>
            </li>
          </ul>
        </div>
      </aside>
    )
}