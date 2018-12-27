import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styles from './projects.module.scss'
import { Flip, Fade } from 'react-reveal'
import Button from '../button'

const projects = ({ data }) => (
  <div id="portfolio" className={styles.portfolio}>
    <div className={styles.projects}>
      <Fade bottom>
        <h2 className={styles.sectionHeader}>Prosjekter</h2>
      </Fade>
      <div className={styles.projectGrid}>
        {data.map((item, index) => {
          if (index < 6) {
            return (
              <Flip left key={item.node.slug}>
                <div className={styles.projectItem}>
                  <Img
                    className={styles.projectImage}
                    fluid={
                      item.node.acf.main_image.localFile.childImageSharp.fluid
                    }
                  />

                  <div className={styles.projectInfo}>
                    <div className={styles.projectTitle}>
                      <h3>{item.node.title}</h3>
                      <div className={styles.technologies}>
                        {item.node.tech.map(tech => tech.name).join(', ')}
                      </div>
                    </div>
                    <Button
                      component={Link}
                      className={styles.btn}
                      to={item.node.slug}
                      style={{ verticalAlign: 'middle' }}
                    >
                      Finn ut mer
                    </Button>
                  </div>
                </div>
              </Flip>
            )
          }
        })}
      </div>
    </div>
  </div>
)

projects.propTypes = {
  data: PropTypes.array,
}

export default projects
