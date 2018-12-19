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
    allWordpressWpPortfolio(sort: { fields: [menu_order], order: ASC }) {
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
            site_link
            main_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 800, maxHeight: 600) {
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
