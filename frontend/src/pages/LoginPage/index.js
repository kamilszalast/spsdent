import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { login } from '../../store/actions/auth'
import { PageWrapper } from '../../components/PageWrapper'
import { Field, Form, Formik } from 'formik'
import { loginValidationSchema } from '../../utils/validationSchemas'
import { clearMessage } from '../../store/actions/message'

const styles = {
  inputStyle: {
    backgroundColor: 'transparent',
    border: '2px solid #333',
    height: '3em',
    width: '300px',
    margin: '10px 0',
    paddingLeft: '1em',
  },
  buttonStyle: {
    backgroundColor: 'none',
    border: '2px solid #333',
    height: '3em',
    width: '300px',
    margin: '10px 0',
    cursor: 'pointer',
  },
}

const LoginPage = () => {
  const initialValues = {
    email: '',
    password: '',
  }
  const [loading, setLoading] = useState(false)
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { message } = useSelector((state) => state.message)
  let navigate = useNavigate()

  const dispatch = useDispatch()

  const handleLogin = (values) => {
    const { email, password } = values

    dispatch(login(email, password))
      .then(() => {
        dispatch(clearMessage())
        navigate('/add-visit')
      })
      .catch(() => {
        setLoading(false)
      })
  }

  if (isLoggedIn) {
    return <Navigate to='/add-visit' />
  }

  return (
    <PageWrapper>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1>Zaloguj sie</h1>
        <Formik
          onSubmit={(values) => handleLogin(values)}
          initialValues={initialValues}
          validationSchema={loginValidationSchema}
        >
          {({ errors, values, touched, handleBlur }) => (
            <Form style={{ display: 'flex', flexDirection: 'column' }}>
              <Field
                type='email'
                name='email'
                value={values.email}
                style={styles.inputStyle}
                placeholder='E-mail'
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p style={{ color: 'red' }}>{errors.email}</p>
              ) : null}

              <Field
                type='password'
                name='password'
                value={values.password}
                style={styles.inputStyle}
                placeholder='Haslo'
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p style={{ color: 'red' }}>{errors.password}</p>
              ) : null}

              <button style={styles.buttonStyle}>
                {loading && <span></span>}
                <span>Zaloguj</span>
              </button>

              {message && (
                <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>
              )}
            </Form>
          )}
        </Formik>
        <div style={{ display: 'flex', color: '#333' }}>
          <p style={{ marginRight: '5px' }}>Chcesz utworzy?? konto?</p>
          <Link
            style={{ textDecoration: 'none', color: '#01D4BF' }}
            to='/register'
          >
            Kliknij tutaj!
          </Link>
        </div>
        <div style={{ display: 'flex', color: '#333' }}>
          <p style={{ marginRight: '5px' }}>Zapomniales hasla?</p>
          <Link
            style={{ textDecoration: 'none', color: '#01D4BF' }}
            to='/password-change'
          >
            Zresetuj haslo!
          </Link>
        </div>
      </div>
    </PageWrapper>
  )
}

export default LoginPage
