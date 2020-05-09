import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'

import { MdEmail } from 'react-icons/md'
import { FaLock } from 'react-icons/fa'
import logo from '../../assets/logoauth.png'
import { signInRequest } from '../../store/modules/auth/actions'

export default function SignIn() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.auth.loading)

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password))
  }

  return (
    <>
      <img src={logo} alt="logo" />
      <Form onSubmit={handleSubmit}>
        <div>
          <MdEmail />
          <Input name="email" type="email" placeholder="Digite seu e-mail" />
        </div>
        <div>
          <FaLock />
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
          />
        </div>
        <button type="submit">
          {loading ? 'Carregando...' : <strong>Entrar</strong>}
        </button>
      </Form>
    </>
  )
}
