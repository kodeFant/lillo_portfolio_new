import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import PropTypes from 'prop-types'

export default class Portfolio extends Component {
  render() {
    const { slug } = this.props.pathContext
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
        <h1>{postNode.title}</h1>
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
