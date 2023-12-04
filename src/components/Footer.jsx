import styles from './Footer.module.css';
import icon from '../assets/icons/icon96.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icon}>
        <img src={icon} alt='icon' width={96} height={96}/>
        <div className={styles.footer__icon_text}>
          <h3>Ignacio Cuevas</h3>
          <p>Computer Analyst</p>
        </div>
      </div>
      <div className={styles.footer__column}>
        <h2>Jump to</h2>
        <a>Home</a>
        <a>Projects</a>
        <a>Skills</a>
        <a>Education</a>
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