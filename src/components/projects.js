import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styles from './projects.module.scss'

const projects = ({ data }) => (
  <div id="portfolio" className={styles.projects}>
    <h2 className={styles.sectionHeader}>Prosjekter</h2>
    <div className={styles.projectGrid}>
      {data.map(item => (
        <div key={item.node.slug} className={styles.projectItem}>
          <Img
            className={styles.projectImage}
            fluid={item.node.acf.main_image.localFile.childImageSharp.fluid}
          />

          <div className={styles.projectInfo}>
            <div className={styles.projectTitle}>
              <h3>{item.node.title}</h3>
              <ul className={styles.technologies}>
                {item.node.tech.map(tech => (
                  <li key={tech.slug}>{tech.name}</li>
                ))}
              </ul>
            </div>
            <Link
              className={styles.btn}
              to={item.node.slug}
              style={{ verticalAlign: 'middle' }}
            >
              Finn ut mer
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
)

projects.propTypes = {
  data: PropTypes.array,
}

export default projects
