import React, { useState, useEffect } from 'react'
import { Formik, Field, Form } from 'formik'
import { useSelector, useDispatch } from 'react-redux'
import UserService from '../../../services/user'

import { updateUserDataValidationSchema } from '../../../utils/validationSchemas'
import { clearMessage } from '../../../store/actions/message'
import { SET_MESSAGE } from '../../../store/actions/types'

const UpdateUser = ({ setBtnType, selectedUser }) => {
  let initialState = {
    userId: '',
    imie: '',
    nazwisko: '',
    telefon: '',
    email: '',
    miasto: '',
    ulica: '',
    kodPocztowy: '',
  }
  const [user, setUser] = useState(initialState)
  const [userOld, setUserOld] = useState('')
  const { message } = useSelector((state) => state.message)
  const dispatch = useDispatch()

  useEffect(() => {
    UserService.getAll()
      .then((response) => {
        const selectedUserData = response.data.filter(
          (user) => user._id === selectedUser
        )[0]
        const { imie, nazwisko, kodPocztowy, email, ulica, miasto, telefon } =
          selectedUserData
        const obj = {
          imie,
          nazwisko,
          kodPocztowy,
          email,
          ulica,
          miasto,
          telefon,
        }
        setUser(obj)
        setUserOld(obj)
      })
      .catch((e) => console.log(e))
  }, [selectedUser])

  const updateUser = (values) => {
    const { imie, nazwisko, email, telefon, kodPocztowy, miasto, ulica } =
      values
    let userObj = {
      imie,
      nazwisko,
      telefon,
      email,
      kodPocztowy,
      miasto,
      ulica,
    }
    const equals = (a, b) => {
      if (a === b) return true
      if (a instanceof Date && b instanceof Date)
        return a.getTime() === b.getTime()
      if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
        return a === b
      if (a.prototype !== b.prototype) return false
      const keys = Object.keys(a)
      if (keys.length !== Object.keys(b).length) return false
      return keys.every((k) => equals(a[k], b[k]))
    }
    if (equals(userObj, userOld)) {
      dispatch({type: SET_MESSAGE, payload: 'Musisz wprowadzic jakies zmiany'})
    } else {
      dispatch(clearMessage())
      UserService.updateUser(selectedUser, userObj)
        .then((response) => {
          setBtnType('')
          setUser({
            roles: [{}],
          })
          dispatch({type: SET_MESSAGE, payload: 'Dane u??ytkownika zosta??y zaktualizowane!'})
        })
        .catch((e) => console.log(e))
    }
  }

  return (
    <>
      {selectedUser && (
        <Formik
          enableReinitialize={true}
          initialValues={user}
          validationSchema={updateUserDataValidationSchema}
          onSubmit={(values) => {
            updateUser(values)
          }}
        >
          {({ errors, touched, values, setValues }) => (
            <Form
              style={{
                width: '300px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <>
                <label>Imie</label>
                <Field
                  name='imie'
                  style={{
                    width: '300px',
                    backgroundColor: 'transparent',
                    border: '2px solid #333',
                    height: '3em',
                    margin: '10px 0',
                    paddingLeft: '1em',
                  }}
                  placeholder='Imie'
                  type='text'
                />
                {errors.imie && touched.imie ? (
                  <p style={{ color: 'red' }}>{errors.imie}</p>
                ) : null}
                <label>Nazwisko</label>
                <Field
                  name='nazwisko'
                  type='text'
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px solid #333',
                    height: '3em',
                    margin: '10px 0',
                    paddingLeft: '1em',
                  }}
                  placeholder='Nazwisko'
                />
                {errors.nazwisko && touched.nazwisko ? (
                  <p style={{ color: 'red' }}>{errors.nazwisko}</p>
                ) : null}
                <label>E-mail</label>
                <Field
                  name='email'
                  type='email'
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px solid #333',
                    height: '3em',
                    margin: '10px 0',
                    paddingLeft: '1em',
                  }}
                  placeholder='E-mail'
                />
                {errors.email && touched.email ? (
                  <p style={{ color: 'red' }}>{errors.email}</p>
                ) : null}
                <label>Telefon</label>
                <Field
                  name='telefon'
                  type='number'
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px solid #333',
                    height: '3em',
                    margin: '10px 0',
                    paddingLeft: '1em',
                  }}
                  placeholder='Telefon'
                />
                {errors.telefon && touched.telefon ? (
                  <p style={{ color: 'red' }}>{errors.telefon}</p>
                ) : null}
                <label>Miasto</label>
                <Field
                  name='miasto'
                  type='text'
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px solid #333',
                    height: '3em',
                    margin: '10px 0',
                    paddingLeft: '1em',
                  }}
                  placeholder='Miasto'
                />
                {errors.miasto && touched.miasto ? (
                  <p style={{ color: 'red' }}>{errors.miasto}</p>
                ) : null}
                <label>Ulica</label>
                <Field
                  name='ulica'
                  type='text'
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px solid #333',
                    height: '3em',
                    margin: '10px 0',
                    paddingLeft: '1em',
                  }}
                  placeholder='Ulica'
                />
                {errors.ulica && touched.ulica ? (
                  <p style={{ color: 'red' }}>{errors.ulica}</p>
                ) : null}
                <label>Kod-pocztowy</label>
                <Field
                  name='kodPocztowy'
                  type='number'
                  style={{
                    backgroundColor: 'transparent',
                    border: '2px solid #333',
                    height: '3em',
                    margin: '10px 0',
                    paddingLeft: '1em',
                  }}
                  placeholder='Kod-pocztowy'
                />
                {errors.kodPocztowy && touched.kodPocztowy ? (
                  <p style={{ color: 'red' }}>{errors.kodPocztowy}</p>
                ) : null}
                <button
                  type='submit'
                  style={{
                    backgroundColor: 'none',
                    border: '2px solid #333',
                    height: '3em',
                    margin: '10px 0',
                  }}
                >
                  Aktualizuj dane
                </button>
              </>
            </Form>
          )}
        </Formik>
      )}
    </>
  )
}

export default UpdateUser
