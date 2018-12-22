import React from 'react'
import styles from './contact.module.scss'
import { Fade } from 'react-reveal'
import { Formik, Field } from 'formik'

const contact = () => (
  <div className={styles.contact}>
    <Fade bottom>
      <h2 className={styles.sectionHeader}>Kontakt</h2>
      <Formik
        initialValues={{
          name: 'Nome',
          email: 'luffen@luffe',
          message: 'Ein streng beskjed',
        }}
        render={props => (
          <form>
            <Field type="text" name="name" />
            <Field type="email" name="email" />
            <Field component="textarea" name="message" />
          </form>
        )}
      />
    </Fade>
  </div>
)

export default contact
