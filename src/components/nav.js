import React, { Component } from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styles from './nav.module.scss'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import { HamburgerButton } from 'react-hamburger-button'

class Nav extends Component {
  state = {
    open: false,
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }
  render() {
    return (
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Scrollspy
            items={this.props.data.wordpressWpApiMenusMenusItems.items.map(
              item => item.object_slug
            )}
            currentClassName={styles.isCurrent}
            className={`${styles.navLinks} ${
              this.state.open ? null : styles.hidden
            }`}
            offset={-54}
          >
            {this.props.data.wordpressWpApiMenusMenusItems.items.map(item => (
              <li key={item.object_slug}>
                {this.props.location === '/' ? (
                  <AnchorLink offset={() => 52} href={`#${item.object_slug}`}>
                    {item.title}
                  </AnchorLink>
                ) : (
                  <Link to={`#${item.object_slug}`}>{item.title}</Link>
                )}
              </li>
            ))}
          </Scrollspy>
          {this.props.location !== '/' ? (
            <h1 className={styles.brand}>
              <AnchorLink href="/">{this.props.siteTitle}</AnchorLink>
            </h1>
          ) : null}
          <div className={styles.hamburger}>
            <HamburgerButton
              open={this.state.open}
              onClick={this.handleClick}
              width={20}
              height={15}
              strokeWidth={2}
              color={'rgb(245, 245, 245)'}
              animationDuration={0.5}
            />
          </div>
        </div>
      </nav>
    )
  }
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.string,
  data: PropTypes.object,
}

const navWithQuery = props => (
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
      <Nav
        data={data}
        siteTitle={props.siteTitle}
        location={props.location}
        {...props}
      />
    )}
  />
)

navWithQuery.propTypes = {
  siteTitle: PropTypes.string,
  location: PropTypes.string,
  data: PropTypes.object,
}

export default navWithQuery
