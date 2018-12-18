import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Nav from './nav'
import './layout.scss'

const Layout = ({ children, location }) => (
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
          <Nav siteTitle={metaData.name} location={location} />
          <div>{children}</div>
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
