import styles from './Mainpage.module.css';
import Social from '../components/Social.jsx';
import Arrowlink from '../components/Arrowlink.jsx';
import Leetcode from '../components/Leetcode.jsx';
import Footer from '../components/Footer.jsx';
import { useRef } from 'react';

function Mainpage() {
  const refProjects = useRef(null);

  function scrollToProjects() {
    refProjects.current.scrollIntoView();
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.main__titles}>
          <h1>IGNACIO CUEVAS</h1>
          <h4>Computer Science Student</h4>
        </div>
        <div className={styles.main__linksto}>
          <Arrowlink text='my projects' link={scrollToProjects} />
          <Arrowlink text='skills and courses' link={scrollToProjects} />
        </div>
        <Social />
      </div>
      <Leetcode />
      <div className={styles.projects} ref={refProjects}>
        <h1>Projects</h1>
      </div>
      <Footer />
    </div>
  )
}

export default Mainpage;