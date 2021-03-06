import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.scss'
import Typing from 'react-typing-animation'
import Button from './button'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Header = () => (
  <header id="hjem" className={styles.header}>
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <p className={styles.headerText}>
          Hei. Jeg heter <span>Lars Lillo Ulvestad</span>
        </p>
        <p className={styles.headerDescription}>
          Jeg er webutvikler og jobber med
        </p>
        <Typing loop>
          <p className={styles.javascript}>
            <span>() ={'>'}</span> javaScript<span>()</span>
          </p>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={20} />
          <p className={styles.react}>
            <span>{'<'}</span>React <span>/{'>'}</span>
          </p>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={20} />
          <p className={styles.php}>
            <span>{'<?'}</span>php <span>{'?>'}</span>
          </p>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={20} />
          <p className={styles.laravel}>
            <span>{'{{'}</span> $laravel <span>{'}}'}</span>
          </p>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={20} />
          <p className={styles.css}>
            .css{' '}
            <span>
              {'{'} {'}'}
            </span>
          </p>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={20} />
          <p className={styles.stories}>
            Digitale <span>historier</span>
          </p>
          <Typing.Delay ms={1000} />
          <Typing.Backspace count={20} />
          <p style={{ opacity: 0 }}>.</p>
        </Typing>
        <div className={styles.findOutMore}>
          <Button
            style={{ marginLeft: 0 }}
            component={AnchorLink}
            href="#about"
          >
            Finn ut mer
          </Button>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
