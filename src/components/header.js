import PropTypes from 'prop-types'
import React from 'react'
import styles from './header.module.scss'
import Typing from 'react-typing-animation'

const Header = () => (
  <>
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <p className={styles.headerText} />
          <p className={styles.headerText}>
            Jeg er <span>webutvikler</span> og jobber med
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
        </div>
      </div>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
