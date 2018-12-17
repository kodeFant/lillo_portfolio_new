import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './nav.module.scss'

const nav = ({ siteTitle }) => (
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
          <h1 className={styles.brand}>
            <Link to="/">{siteTitle}</Link>
          </h1>
          <ul className={styles.navLinks}>
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li key={item.object_slug}>
                <a href={`#${item.object_slug}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    )}
  />
)

nav.propTypes = {
  siteTitle: PropTypes.string,
}

export default nav
