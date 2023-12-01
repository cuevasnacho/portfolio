import styles from './Card.module.css';

function Card({image, tag, title, text}) {
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <img src={image} alt='graph-coloring' />
      </div>
      <div className={styles.card__body}>
        <span className={styles.card__tag}>{tag}</span>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card;