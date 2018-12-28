import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styles from './about.module.scss'
import { Fade, Flip, Zoom } from 'react-reveal'

import KeyFacts from './aboutKeyfacts.js'

class About extends Component {
  state = {
    selectedTab: 1,
  }
  render() {
    return (
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
              <h2 className={styles.sectionHeader}>
                {data.wordpressPage.title}
              </h2>
            </Fade>
            <KeyFacts />
            <div className={styles.aboutGrid}>
              <div className={styles.description}>
                <Zoom>
                  <Img
                    className={styles.profileImg}
                    fluid={
                      data.wordpressPage.featured_media.localFile
                        .childImageSharp.fluid
                    }
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.wordpressPage.content,
                    }}
                  />
                </Zoom>
              </div>
              <Flip right>
                <div className={styles.skillGrid}>
                  <div className={styles.skillNav}>
                    <button
                      className={`${styles.navLink} ${
                        this.state.selectedTab === 1 ? styles.selected : null
                      }`}
                      onClick={() => this.setState({ selectedTab: 1 })}
                      onKeyPress={() => this.setState({ selectedTab: 1 })}
                    >
                      Teknologier
                    </button>
                    <button
                      className={`${styles.navLink} ${
                        this.state.selectedTab === 2 ? styles.selected : null
                      }`}
                      onClick={() => this.setState({ selectedTab: 2 })}
                    >
                      Nøkkelkvalifikasjoner
                    </button>
                    <button
                      className={`${styles.navLink} ${
                        this.state.selectedTab === 3 ? styles.selected : null
                      }`}
                      onClick={() => this.setState({ selectedTab: 3 })}
                    >
                      Interesser
                    </button>
                  </div>
                  <div className={styles.skillContent}>
                    {this.state.selectedTab === 1 ? (
                      <>
                        <Zoom right>
                          <div className={styles.area}>
                            <h3>Språk</h3>
                            <p>
                              JavaScript/ES6, PHP, MySQL, Node.js, MVC, HTML5,
                              CSS3, mobildesign og responsivt design
                            </p>
                          </div>
                          <div className={styles.area}>
                            <h3>Rammeverk</h3>
                            <p>
                              React.js, GatsbyJS, Laravel, WordPress, Bootstrap
                              4, jQuery, Express, Sass,
                              HighchartsJS/ApexChartsJS
                            </p>
                          </div>
                          <div className={styles.area}>
                            <h3>Verktøy</h3>
                            <p>
                              Git, Webpack, bash-terminal, Visual Studio Code,
                              NPM/Yarn, Linux via konsoll, macOS
                            </p>
                          </div>
                        </Zoom>
                      </>
                    ) : null}
                    {this.state.selectedTab === 2 ? (
                      <>
                        <Zoom right>
                          <div className={styles.area}>
                            <p>
                              Jeg har opparbeidet meg relevant profesjonell
                              kompetanse og en stor lidenskap for webutvikling
                              siden 2017.
                            </p>
                          </div>
                          <div className={styles.area}>
                            <p>
                              Jeg eksperimenterer med nye verktøy og oppdaterer
                              meg jevnlig på de siste trendene innen
                              webutvikling, og spesielt innen JavaScript, React,
                              Laravel, JAMStack og WordPress.
                            </p>
                          </div>
                          <div className={styles.area}>
                            <p>
                              Jeg har en inkluderende arbeidsstil, jeg lytter og
                              spiller på lag. Møter enhver utfordring med en
                              positiv og løsningsorientert holdning.
                            </p>
                          </div>
                        </Zoom>
                      </>
                    ) : null}
                    {this.state.selectedTab === 3 ? (
                      <>
                        <Zoom right>
                          <div className={styles.area}>
                            <h3>På hugget</h3>
                            <p>
                              Jeg eksperimenterer med nye verktøy og oppdaterer
                              meg jevnlig på de siste trendene innen
                              webutvikling. Det inkluderer spesielt JavaScript,
                              React, Laravel, JAMStack og WordPress.
                            </p>
                          </div>
                          <div className={styles.area}>
                            <h3>Fritidsinteresser</h3>
                            <p>
                              Noen ganger liker jeg å koble den logiske
                              hjernehalvdelen litt ut. Da drar jeg på seiltur,
                              skriver skjønnlitteratur, spiller improteater og
                              ser på improteater.
                            </p>
                          </div>
                        </Zoom>
                      </>
                    ) : null}
                  </div>
                </div>
              </Flip>
            </div>
          </div>
        )}
      />
    )
  }
}
About.propTypes = {
  data: PropTypes.array,
}

export default About
