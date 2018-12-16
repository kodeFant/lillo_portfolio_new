import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Projects from '../components/projects'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Projects data={data.allWordpressWpPortfolio.edges} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allWordpressWpPortfolio {
      edges {
        node {
          id
          slug
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
    }
    allWordpressPage {
      edges {
        node {
          content
        }
      }
    }
  }
`
