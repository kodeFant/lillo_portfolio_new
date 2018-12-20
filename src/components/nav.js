import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './nav.module.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'

const nav = ({ siteTitle, location }) => (
  <StaticQuery
    query={graphql`
      query {
        wordpressWpApiMenusMenusItems {
          id
          items {
            object_slug
            title
          }
        }
      }
    `}
    render={data => (
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Scrollspy
            items={data.wordpressWpApiMenusMenusItems.items.map(
              item => item.object_slug
            )}
            currentClassName={styles.isCurrent}
            className={styles.navLinks}
            offset={-52}
          >
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li key={item.object_slug}>
                {location === '/' ? (
                  <AnchorLink offset="52" href={`#${item.object_slug}`}>
                    {item.title}
                  </AnchorLink>
                ) : (
                  <Link to={`#${item.object_slug}`}>{item.title}</Link>
                )}
              </li>
            ))}
          </Scrollspy>
          {location !== '/' ? (
            <h1 className={styles.brand}>
              <AnchorLink href="/">{siteTitle}</AnchorLink>
            </h1>
          ) : null}
        </div>
      </nav>
    )}
  />
)

nav.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.string,
}

export default nav
