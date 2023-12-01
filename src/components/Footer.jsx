import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__column}>
        <h2>Jump to</h2>
        <a>Home</a>
        <a>Projects</a>
        <a>Skills</a>
        <a>Courses</a>
      </div>
      <div className={styles.footer__column}>
        <h2>Contact me</h2>
        <a>Email: icuevas.icc@gmail.com</a>
        <a>Phone: +54 3571 522614</a>
      </div>
    </footer>
  );
}

export default Footer;