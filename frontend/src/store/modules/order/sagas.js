import { takeLatest, call, all } from 'redux-saga/effects'

import { toast } from 'react-toastify'

import api from '../../../services/api'

export function* OrderStore({ payload }) {
  try {
    const { id, answer } = payload.data

    yield call(api.post, `help-orders/${id}/answer`, { answer })

    toast.success('Resposta enviada')
    window.location.reload()
  } catch (err) {
    toast.error('Insira uma mensagem')
  }
}

export function* OrderDelete({ payload }) {
  const { id } = payload

  yield call(api.delete, `help-orders/${id}`)

  toast.success('Mensagem removida')
  window.location.reload()
}

export default all([
  takeLatest('@order/SEND_REPLY', OrderStore),
  takeLatest('@order/ORDER_DELETE', OrderDelete),
])
