import styles from './Arrowlink.module.css';

function Arrowlink({text, link}) {
  return (
    <div className={styles.linkbox}>
      <a onClick={link}>
        <span class="material-symbols-outlined">
        arrow_forward
        </span>
        <p>{text}</p>
      </a>
    </div>
  )
}

export default Arrowlink;