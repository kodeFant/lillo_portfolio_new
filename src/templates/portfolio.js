import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import PropTypes from 'prop-types'

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
        <Img fluid={postNode.featured_media.localFile.childImageSharp.fluid} />
        <a href={postNode.acf.github_link}>Github</a>
        <a href={postNode.acf.site_link}>Besøk</a>
        <h1>{postNode.title}</h1>
        <p>
          Teknologier:{' '}
          {postNode.tech.map(tech => (
            <span key={tech.slug}>{tech.name}</span>
          ))}
        </p>
        <div dangerouslySetInnerHTML={{ __html: postNode.content }} />
      </Layout>
    )
  }
}

Portfolio.propTypes = {
  slug: PropTypes.string,
  pathContext: PropTypes.object,
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
      }
      featured_media {
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
`
