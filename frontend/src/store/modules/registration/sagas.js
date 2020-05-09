import { all, call, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import api from '../../../services/api'

export function* RegisterStore({ payload }) {
  try {
    yield call(api.post, 'registration', { ...payload })
    toast.success('Matricula realizada com sucesso')
    window.location.reload()
  } catch (err) {
    toast.error('Preencha o formulário')
  }
}

export function* Registerdelete({ payload }) {
  yield call(api.delete, `registration/${payload.id}`)

  toast.success('Matricula removida')
  window.location.reload()
}

export default all([
  takeLatest('@registration/STORE_REGISTER', RegisterStore),
  takeLatest('@registration/DELETE_REGISTER', Registerdelete),
])
