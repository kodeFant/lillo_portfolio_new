import React, { Component } from 'react'
import styles from './contact.module.scss'
import { Fade } from 'react-reveal'
import { Formik, ErrorMessage } from 'formik'
import {
  Field as BulmaField,
  Input,
  Control,
  Textarea,
  Help,
  Label,
} from 'react-bulma-components/lib/components/form'
import Button from '../button'
import * as Yup from 'yup'
import Recaptcha from 'react-recaptcha'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Ugyldig epost-adresse')
    .required('Påkrevd felt'),
  name: Yup.string().required('Påkrevd felt'),
  message: Yup.string().required('Påkrevd felt'),
  recaptcha: Yup.string().required('Bekreft at du ikke er en robot'),
})

class Contact extends Component {
  state = {
    submitted: false,
  }

  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://www.google.com/recaptcha/api.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  }
  render() {
    return (
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
              submitted: '',
              recaptcha: '',
            }}
            validationSchema={validationSchema}
            render={({
              values,
              handleChange,
              handleBlur,
              errors,
              touched,
              setFieldValue,
            }) => {
              const encode = data => {
                return Object.keys(data)
                  .map(
                    key =>
                      encodeURIComponent(key) +
                      '=' +
                      encodeURIComponent(data[key])
                  )
                  .join('&')
              }

              const handleSubmit = e => {
                fetch('/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                  },
                  body: encode({
                    'form-name': 'portfolioContact',
                    ...values,
                  }),
                })
                  .then(() => {
                    setFieldValue('submitted', true)
                  })
                  .catch(error => alert(error))

                e.preventDefault()
              }

              const validatedForm =
                !errors.name &&
                touched.name &&
                !errors.email &&
                touched.email &&
                !errors.recaptcha &&
                !errors.message
                  ? true
                  : false

              return (
                <>
                  {!values.submitted ? (
                    <form
                      name="portfolioContact"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      className={styles.contactForm}
                      onSubmit={handleSubmit}
                    >
                      <Control>
                        <BulmaField>
                          <Label htmlFor="name" style={{ color: 'white' }}>
                            Navn
                          </Label>
                          <Control>
                            <Input
                              id="name"
                              type="text"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                              placeholder="Navn"
                              name="name"
                            />
                            <ErrorMessage
                              name="name"
                              render={msg => <Help color="danger">{msg}</Help>}
                            />
                          </Control>
                        </BulmaField>
                        <BulmaField>
                          <Label htmlFor="email" style={{ color: 'white' }}>
                            Epost
                          </Label>
                          <Control>
                            <Input
                              id="email"
                              type="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              placeholder="Epost"
                              name="email"
                            />
                            <ErrorMessage
                              name="email"
                              render={msg => <Help color="danger">{msg}</Help>}
                            />
                          </Control>
                        </BulmaField>

                        <BulmaField>
                          <Label htmlFor="message" style={{ color: 'white' }}>
                            Beskjed
                          </Label>
                          <Control>
                            <Textarea
                              id="message"
                              type="message"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.message}
                              placeholder="Beskjed"
                              name="message"
                            />
                            <ErrorMessage
                              name="message"
                              render={msg => <Help color="danger">{msg}</Help>}
                            />
                          </Control>
                        </BulmaField>
                      </Control>
                      <BulmaField>
                        <Control>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              marginTop: '1rem',
                            }}
                          >
                            <Recaptcha
                              sitekey="6LdMaYUUAAAAAC45jX46Xl7fH6SPxnQ-hRRm1ACA"
                              render="explicit"
                              theme="dark"
                              verifyCallback={response => {
                                setFieldValue('recaptcha', response)
                              }}
                              onloadCallback={() => {
                                console.log('done loading!')
                              }}
                              hl="no"
                            />
                            <ErrorMessage
                              name="recaptcha"
                              render={msg => <Help color="danger">{msg}</Help>}
                            />
                          </div>
                        </Control>
                      </BulmaField>
                      <Control>
                        <BulmaField>
                          <input
                            type="hidden"
                            name="form-name"
                            value="portfolioContact"
                          />
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                            }}
                          >
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
                      </Control>
                    </form>
                  ) : (
                    <>
                      <div style={{ textAlign: 'center', margin: '4.5rem 0' }}>
                        <h2 style={{ color: 'hsl(141, 71%,  48%)' }}>
                          Hei {values.name}.
                        </h2>
                        <Help
                          style={{ fontSize: '1.2rem', lineHeight: '1.5rem' }}
                          color="success"
                        >
                          Tusen takk for din henvendelse! Jeg svarer vanligvis
                          innen en dag eller to.
                        </Help>
                      </div>
                    </>
                  )}
                </>
              )
            }}
          />
        </div>
      </div>
    )
  }
}

export default Contact
