import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      {/*       <div>
        <p
          dangerouslySetInnerHTML={{
            __html: data.allWordpressPage.edges[0].node.content,
          }}
        />
      </div> */}
      <div>
        <h2>Prosjekter</h2>
        {data.allWordpressWpPortfolio.edges.map(item => (
          <div key={item.node.slug}>
            <Link to={item.node.slug}>
              <h3>{item.node.title}</h3>

              <Img
                fluid={item.node.featured_media.localFile.childImageSharp.fluid}
              />
            </Link>
            <p dangerouslySetInnerHTML={{ __html: item.node.content }} />
          </div>
        ))}
      </div>
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
