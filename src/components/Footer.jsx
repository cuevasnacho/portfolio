import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.footer__links}>
        <li>Home</li>
        <li>About me</li>
        <li>Contact</li>
        <li>Repo</li>
      </ul>
    </div>
  );
}

export default Footer;