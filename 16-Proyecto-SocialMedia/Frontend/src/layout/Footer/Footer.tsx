import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        &copy; {new Date().getFullYear()} Ronald Palacios · Web Developer
      </p>
      <p className={styles.footerSubtext}>
       BubbleWeb A modern and dynamic way to refer to connected communities.
      </p>
    </footer>
  );
}

export default Footer;