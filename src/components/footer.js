import React from 'react'
import styles from './footer.module.scss'
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaAngleDoubleUp,
} from 'react-icons/fa'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { IconContext } from 'react-icons'

const footer = ({ location }) => (
  <footer className={styles.footer}>
    <AnchorLink
      href={location === '/' ? '#hjem' : '#portfolio'}
      offset="52"
      aria-label="Tilbake til toppen"
    >
      <div className={styles.up}>
        <IconContext.Provider
          value={{ color: 'rgb(245, 245, 245)', size: '2rem' }}
        >
          <FaAngleDoubleUp>Opp</FaAngleDoubleUp>
        </IconContext.Provider>
      </div>
    </AnchorLink>

    <p className={styles.followMe}>Følg meg og ta gjerne kontakt:</p>
    <div className={styles.socialMediaButtons}>
      <a
        href="https://www.linkedin.com/in/larslilloulvestad/"
        className={`${styles.iconButton} ${styles.linkedin}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedin className={styles.iconLinkedin}>LinkedIn</FaLinkedin>
        <span />
      </a>
      <a
        href="https://github.com/kodeFant"
        className={`${styles.iconButton} ${styles.github}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub className={styles.iconGithub}>Github</FaGithub>
        <span />
      </a>
      <a
        href="https://twitter.com/larsparsfromage"
        className={`${styles.iconButton} ${styles.twitter}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaTwitter className={styles.iconTwitter}>Twitter</FaTwitter>
        <span />
      </a>
    </div>
    <p className={styles.copyright}>
      Lars Lillo Ulvestad <span>&copy; 2018</span>
    </p>
  </footer>
)

export default footer
