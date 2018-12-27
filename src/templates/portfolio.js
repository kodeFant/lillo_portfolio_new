import React, { Component } from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import PropTypes from 'prop-types'
import styles from './portfolio.module.scss'
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaAngleDoubleUp,
} from 'react-icons/fa'
import Button from '../components/button'

export default class Portfolio extends Component {
  render() {
    const { slug } = this.props.pageContext
    const postNode = this.props.data.wordpressWpPortfolio
    if (!postNode.id) {
      postNode.id = slug
    }
    if (!postNode.category_id) {
      postNode.category_id = 'din-eiendom'
    }
    return (
      <Layout>
        <div className={styles.portfolio} id="portfolio">
          <Img
            fluid={postNode.acf.main_image.localFile.childImageSharp.fluid}
          />

          <h1>{postNode.title}</h1>
          <div className={styles.links}>
            <Button
              component="a"
              className={styles.github}
              href={postNode.acf.github_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </Button>
            <Button
              component="a"
              href={postNode.acf.site_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Besøk
            </Button>
          </div>
          <p className={styles.preamble}>{postNode.acf.preamble}</p>
          <div className={styles.techBox}>
            <h3>Teknologier</h3>
            <div className={styles.techList}>
              {postNode.tech.map(tech => tech.name).join(', ')}
            </div>
          </div>
          <div
            className={styles.theArticle}
            dangerouslySetInnerHTML={{ __html: postNode.content }}
          />
        </div>
      </Layout>
    )
  }
}

Portfolio.propTypes = {
  slug: PropTypes.string,
  pageContext: PropTypes.object,
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query PostById($id: String!) {
    wordpressWpPortfolio(id: { eq: $id }) {
      id
      title
      content
      tech {
        id
        slug
        name
      }
      acf {
        site_link
        github_link
        preamble
      }
      acf {
        main_image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1200, maxHeight: 675) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  }
`
