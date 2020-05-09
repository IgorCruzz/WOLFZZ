import { all, call, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '../../../services/api'

export function* planStore({ payload }) {
  try {
    const { title, price, duration } = payload
    yield call(api.post, 'plan', { title, price, duration })
    toast.success('Plano criado com sucesso!!')
    window.location.reload()
  } catch (err) {
    toast.error('Preencha o formulario')
  }
}

export function* planDelete({ payload }) {
  yield call(api.delete, `plan/${payload.id}`)

  toast.success('Plano removido')
  window.location.reload()
}

export function* planUpdate({ payload }) {
  const { id, title, price, duration } = payload
  const profile = { title, price, duration }

  yield call(api.put, `plan/${id}`, profile)

  toast.success('Plano atualizado')
  window.location.reload()
}

export default all([
  takeLatest('@plan/REGISTER_PLAN', planStore),
  takeLatest('@plan/DELETE_PLAN', planDelete),
  takeLatest('@plan/UPDATE_PLAN', planUpdate),
])
