import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressSiteMetadata {
          edges {
            node {
              name
              description
            }
          }
        }
      }
    `}
    render={data => {
      const metaData = data.allWordpressSiteMetadata.edges[0].node
      return (
        <>
          <Helmet
            title={metaData.name}
            meta={[
              { name: 'description', content: metaData.description },
              {
                name: 'keywords',
                content:
                  'JavaScript, React, PHP, Laravel, GatsbyJS, CSS, WordPress',
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Header siteTitle={metaData.name} />
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children}
          </div>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
