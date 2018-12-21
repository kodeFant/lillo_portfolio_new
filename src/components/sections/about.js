import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styles from './about.module.scss'
import { Fade, Flip, Zoom } from 'react-reveal'
import { FaPlaneDeparture, FaMobileAlt, FaReact } from 'react-icons/fa'
import { IconContext } from 'react-icons'

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
        <div className={styles.keyFacts}>
          <IconContext.Provider
            value={{ color: 'rgb(245, 245, 245)', size: '3rem' }}
          >
            <div className={styles.keyFactCol}>
              <Flip left>
                <div className={styles.iconContainer}>
                  <FaPlaneDeparture />
                </div>
              </Flip>
              <Zoom>
                <h2>Hurtig</h2>
                <p>
                  Jeg prioriterer alltid at nye nettsider skal laste så raskt
                  som mulig.
                </p>
              </Zoom>
            </div>
            <div className={styles.keyFactCol}>
              <Flip left delay={200}>
                <div className={styles.iconContainer}>
                  <FaMobileAlt />
                </div>
              </Flip>
              <Zoom delay={200}>
                <h2>Responsivt</h2>
                <p>Responsive oppsett som fungerer på store og små skjermer.</p>
              </Zoom>
            </div>
            <div className={styles.keyFactCol}>
              <Flip left delay={400}>
                <div className={styles.iconContainer}>
                  <FaReact />
                </div>
              </Flip>
              <Zoom delay={400}>
                <h2>Moderne</h2>
                <p>
                  Jeg følger jevnlig med på de siste trendene innen
                  webutvikling.
                </p>
              </Zoom>
            </div>
            <div className={styles.keyFactCol}>
              <Flip left delay={600}>
                <div className={styles.iconContainer}>
                  <FaPlaneDeparture />
                </div>
              </Flip>
              <Zoom delay={600}>
                <h2>Brukervennlig</h2>
                <p>
                  Som innholdskreatør forstår jeg verdien av gode grensesnitt.
                </p>
              </Zoom>
            </div>
          </IconContext.Provider>
        </div>
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
