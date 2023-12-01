import styles from './Social.module.css';
import { GITHUB, LINKEDIN } from '../links/links.js';
import githubLogo from '../assets/icons/github-logo.svg';
import linkedinLogo from '../assets/icons/linkedin-logo.svg';

function Social() {
  return (
    <div className={styles.social}>
      <a href={GITHUB} rel='noreferrer' target='_blank'>
        <img src={githubLogo} alt='github' width={30}/>
      </a>
      <a href={LINKEDIN} rel='noreferrer' target='_blank'>
        <img src={linkedinLogo} alt='github' width={30}/>
      </a>
    </div>
  )
}

export default Social;