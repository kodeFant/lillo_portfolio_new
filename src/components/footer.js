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

const footer = () => (
  <footer className={styles.footer}>
    <AnchorLink href="#hjem">
      <div className={styles.up}>
        <IconContext.Provider
          value={{ color: 'rgb(245, 245, 245)', size: '2rem' }}
        >
          <FaAngleDoubleUp />
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
      >
        <FaLinkedin className={styles.iconLinkedin} />
        <span />
      </a>
      <a
        href="https://github.com/kodeFant"
        className={`${styles.iconButton} ${styles.github}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={styles.iconGithub} />
        <span />
      </a>
      <a
        href="https://twitter.com/larsparsfromage"
        className={`${styles.iconButton} ${styles.twitter}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className={styles.iconTwitter} />
        <span />
      </a>
    </div>
    <p className={styles.copyright}>
      Lars Lillo Ulvestad <span>&copy; 2018</span>
    </p>
  </footer>
)

export default footer
