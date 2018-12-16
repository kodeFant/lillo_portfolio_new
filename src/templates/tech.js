import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'

export default class Tech extends Component {
  render() {
    const tech = this.props.pageContext.slug
    const postEdges = this.props.data.allWordpressWpPortfolio.edges
    return (
      <Layout>
        <div>Tech: {tech}</div>
        {postEdges.map(edge => edge.node.title)}
      </Layout>
    )
  }
}

Tech.propTypes = {
  pageContext: PropTypes.object,
  data: PropTypes.object,
}

export const pageQuery = graphql`
  query TagPage($slug: String!) {
    allWordpressWpPortfolio(
      filter: { tech: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      edges {
        node {
          id
          slug
          title
          content
          tech {
            slug
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
    }
  }
`
