import { takeLatest, put, call, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../../services/api'
import history from '../../../services/history'
import { signInSuccess, signFailure } from './actions'

export function* SignIn({ payload }) {
  try {
    const { email, password } = payload

    const response = yield call(api.post, 'session', {
      email,
      password,
    })

    const { token } = response.data.user
    const { user } = response.data

    if (!user.provider) {
      toast.error('Usuario nao é prestador')
    }

    api.defaults.headers.Authorization = `Bearer ${token}`

    yield put(signInSuccess(token, user))

    history.push('/students')
  } catch (err) {
    toast.error('Falha na autenticação')
    yield put(signFailure())
  }
}

export function setToken({ payload }) {
  if (!payload) return

  const { token } = payload.auth

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }
}

export function signOut() {
  toast.success('Até mais')
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', SignIn),
  takeLatest('@auth/SIGN_OUT', signOut),
])
