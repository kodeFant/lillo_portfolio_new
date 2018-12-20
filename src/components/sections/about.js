import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styles from './about.module.scss'
import { Fade } from 'react-reveal'

const projects = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressPage(slug: { eq: "about" }) {
          id
          slug
          title
          content
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 600, maxHeight: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div id="about" className={styles.about}>
        <Fade bottom>
          <h2 className={styles.sectionHeader}>{data.wordpressPage.title}</h2>
        </Fade>
        <div className={styles.aboutGrid}>
          <div className={styles.description}>
            <Fade left>
              <Img
                className={styles.profileImg}
                fluid={
                  data.wordpressPage.featured_media.localFile.childImageSharp
                    .fluid
                }
              />
            </Fade>
            <Fade left delay="200">
              <div
                dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
              />
            </Fade>
          </div>
          <Fade right>
            <div className={styles.skillGrid}>
              <div>
                <h2>Teknologier</h2>
                <p>
                  JavaScript/ES6, PHP, MySQL, Node.js, MVC, HTML5, CSS3,
                  mobildesign og responsivt design
                </p>
              </div>
              <div>
                <h2>Rammeverk</h2>
                <p>
                  React.js, GatsbyJS, Laravel, WordPress, Bootstrap 4, jQuery,
                  Express, Sass, HighchartsJS/ApexChartsJS
                </p>
              </div>
              <div>
                <h2>Verktøy</h2>
                <p>
                  Git, Webpack, bash-terminal, Visual Studio Code, NPM/Yarn,
                  Linux via konsoll, macOS
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    )}
  />
)

projects.propTypes = {
  data: PropTypes.array,
}

export default projects
