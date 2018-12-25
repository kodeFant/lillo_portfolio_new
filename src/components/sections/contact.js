import React from 'react'
import styles from './contact.module.scss'
import { Fade } from 'react-reveal'
import { Formik, ErrorMessage, Field as FormikField } from 'formik'
import {
  Field as BulmaField,
  Input,
  Control,
  Textarea,
  Help,
} from 'react-bulma-components/lib/components/form'
import Button from '../button'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Ugyldig epost-adresse')
    .required('Påkrevd felt'),
  name: Yup.string().required('Påkrevd felt'),
  message: Yup.string().required('Påkrevd felt'),
})

const contact = () => (
  <div id="contact" className={styles.contact}>
    <div className={styles.contactContainer}>
      <Fade bottom>
        <h2 className={styles.sectionHeader}>Kontakt</h2>
      </Fade>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={validationSchema}
        render={({ values, handleChange, handleBlur, errors, touched }) => {
          const encode = data => {
            return Object.keys(data)
              .map(
                key =>
                  encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
              )
              .join('&')
          }

          const handleSubmit = e => {
            fetch('/', {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: encode({
                'form-name': 'portfolio-contact',
                formSucceed: 'true',
                ...values,
              }),
            })
              .then(() => alert(JSON.stringify(values)))
              .catch(error => alert(error))

            e.preventDefault()
          }

          const validatedForm =
            !errors.name &&
            touched.name &&
            !errors.email &&
            touched.email &&
            !errors.message
              ? true
              : false

          return (
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <Control>
                <BulmaField>
                  <Control>
                    <FormikField
                      component={Input}
                      id="name"
                      name="name"
                      type="text"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      placeholder="Navn"
                    />
                    <ErrorMessage
                      name="name"
                      render={msg => <Help color="danger">{msg}</Help>}
                    />
                  </Control>
                </BulmaField>
                <BulmaField>
                  <Control>
                    <FormikField
                      component={Input}
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      placeholder="Epost"
                    />
                    <ErrorMessage
                      name="email"
                      render={msg => <Help color="danger">{msg}</Help>}
                    />
                  </Control>
                </BulmaField>

                <BulmaField>
                  <Control>
                    <FormikField
                      component={Textarea}
                      id="message"
                      name="message"
                      type="message"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      placeholder="Beskjed"
                    />
                    <ErrorMessage
                      name="message"
                      render={msg => <Help color="danger">{msg}</Help>}
                    />
                  </Control>
                </BulmaField>
              </Control>
              <Control>
                <BulmaField>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                      component="button"
                      type="submit"
                      className={styles.submitButton}
                      disabled={!validatedForm}
                    >
                      Send melding
                    </Button>
                  </div>
                </BulmaField>
                <input
                  type="hidden"
                  name="form-name"
                  value="portfolio-contact"
                />
              </Control>
            </form>
          )
        }}
      />
    </div>
  </div>
)

export default contact
