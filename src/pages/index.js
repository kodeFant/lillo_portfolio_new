import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/header'
import Layout from '../components/layout'
import Projects from '../components/projects'

const IndexPage = ({ data }) => {
  return (
    <>
      <Header />
      <Layout location="/">
        <Projects data={data.allWordpressWpPortfolio.edges} />
      </Layout>
    </>
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
          tech {
            slug
            name
          }
          acf {
            main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 300) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
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
