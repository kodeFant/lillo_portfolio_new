import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './nav.module.scss'

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
          <ul className={styles.navLinks}>
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li key={item.object_slug}>
                <Link to={`/#${item.object_slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
          {location !== '/' ? (
            <h1 className={styles.brand}>
              <Link to="/">{siteTitle}</Link>
            </h1>
          ) : null}
        </div>
      </nav>
    )}
  />
)

nav.propTypes = {
  siteTitle: PropTypes.string,
}

export default nav
