import styles from './Mainpage.module.css';
import graphc from '../assets/images/graph-coloring.png';
import lacosa from '../assets/images/lacosa.png';
import Social from '../components/Social.jsx';
import Arrowlink from '../components/Arrowlink.jsx';
import Card from '../components/Card.jsx';
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
          <Arrowlink text='skills' link={scrollToProjects} />
          <Arrowlink text='courses' link={scrollToProjects} />
        </div>
      </div>
      <div className={styles.projects} ref={refProjects}>
        <h1>Projects involved</h1>
        <div className={styles.projects__cards}>
          <Card 
            image={graphc}
            tag='Graph theory'
            title='Process and color graphs'
            text='This is about graph coloring'
            />
          <Card 
            image={lacosa}
            tag='Software Engineering'
            title='La Cosa'
            text='Web card game'
            />
        </div>
      </div>
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 390" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 122.16267942583733,232.41148325358853 244.32535885167465,264.82296650717706 324,254 C 403.67464114832535,243.17703349282297 440.8612440191388,189.11961722488036 522,195 C 603.1387559808612,200.88038277511964 728.2296650717705,266.69856459330146 846,273 C 963.7703349282295,279.30143540669854 1074.2200956937797,226.08612440191388 1172,204 C 1269.7799043062203,181.91387559808612 1354.8899521531102,190.95693779904306 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ffffff" fill-opacity="1" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
      <Leetcode />
      <Footer />
      <Social />
    </div>
  )
}

export default Mainpage;