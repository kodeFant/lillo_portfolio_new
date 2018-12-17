import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import Roll from 'react-reveal/Roll'
import styles from './projects.module.scss'

const projects = ({ data }) => (
  <div id="portfolio" className={styles.projects}>
    <h2>Prosjekter</h2>
    <div className={styles.projectGrid}>
      {data.map(item => (
        <div key={item.node.slug}>
          <Link to={item.node.slug}>
            <Roll left>
              <h3>{item.node.title}</h3>
            </Roll>
            <Roll right>
              <Img
                fluid={item.node.featured_media.localFile.childImageSharp.fluid}
              />
            </Roll>
          </Link>
          <p dangerouslySetInnerHTML={{ __html: item.node.content }} />
        </div>
      ))}
    </div>
  </div>
)

export default projects
