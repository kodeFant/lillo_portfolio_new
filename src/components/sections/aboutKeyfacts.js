import React from 'react'
import {
  FaPlaneDeparture,
  FaMobileAlt,
  FaReact,
  FaBicycle,
} from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Flip, Zoom } from 'react-reveal'

import styles from './aboutKeyfacts.module.scss'

const keyFacts = () => (
  <div className={styles.keyFacts}>
    <IconContext.Provider value={{ color: 'rgb(245, 245, 245)', size: '3rem' }}>
      <div className={styles.keyFactCol}>
        <Flip left>
          <div className={styles.iconContainer}>
            <FaPlaneDeparture />
          </div>
        </Flip>
        <Zoom>
          <h2>Raskt</h2>
          <p>
            Jeg prioriterer alltid at nye nettsider skal laste og reagere raskt.
          </p>
        </Zoom>
      </div>
      <div className={styles.keyFactCol}>
        <Flip left delay={200}>
          <div className={styles.iconContainer}>
            <FaMobileAlt />
          </div>
        </Flip>
        <Zoom delay={200}>
          <h2>Responsivt</h2>
          <p>Responsive oppsett som fungerer på store og små skjermer.</p>
        </Zoom>
      </div>
      <div className={styles.keyFactCol}>
        <Flip left delay={400}>
          <div className={styles.iconContainer}>
            <FaReact />
          </div>
        </Flip>
        <Zoom delay={400}>
          <h2>Moderne</h2>
          <p>Jeg følger jevnlig med på de siste trendene innen webutvikling.</p>
        </Zoom>
      </div>
      <div className={styles.keyFactCol}>
        <Flip left delay={600}>
          <div className={styles.iconContainer}>
            <FaBicycle />
          </div>
        </Flip>
        <Zoom delay={600}>
          <h2>Brukervennlig</h2>
          <p>Som innholdskreatør forstår jeg verdien av gode grensesnitt.</p>
        </Zoom>
      </div>
    </IconContext.Provider>
  </div>
)

export default keyFacts
