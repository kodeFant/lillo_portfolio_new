import React from 'react'
import styles from './button.module.scss'

const button = ({
  style,
  className,
  href,
  children,
  component: Button = 'a',
  disabled,
  type,
}) => {
  return (
    <Button
      disabled={disabled}
      style={style}
      href={href}
      type={type}
      className={`${styles.btn} ${className}`}
    >
      <span className={styles.btnText}>{children}</span>
    </Button>
  )
}

export default button
