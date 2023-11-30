import styles from './Mainpage.module.css';
import Leetcode from '../components/Leetcode.jsx';
import Footer from '../components/Footer.jsx';

function Mainpage() {

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.main__title}>IGNACIO CUEVAS</h1>
        <h4 className={styles.main__subtitle}>Computer Science Student</h4>
      </div>
      <Leetcode />
      <Footer />
    </div>
  )
}

export default Mainpage;