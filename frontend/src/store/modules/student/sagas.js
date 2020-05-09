import { call, all, takeLatest, put } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import api from '../../../services/api'
import { findStudentSuccess } from './actions'

export function* studentStore({ payload }) {
  try {
    const { name, email, age, weight, height } = payload

    yield call(api.post, 'student', {
      name,
      email,
      age,
      weight,
      height,
    })

    toast.success('Cadastro realizado com sucesso!!')
    window.location.reload()
  } catch (err) {
    toast.error('Preencha os campos')
  }
}

export function* studentDelete({ payload }) {
  const { id } = payload
  yield call(api.delete, `student/${id}`)
  toast.success('Usuario deletado com sucesso!!')
  window.location.reload()
}

export function* studentUpdate({ payload }) {
  const { id, name, email, age, weight, height } = payload

  const profile = { id, name, email, age, weight, height }

  yield call(api.put, `student/${id}`, profile)

  toast.success('Perfil atualizado com sucesso!!!')
  window.location.reload()
}

export function* studentShow({ payload }) {
  const { name } = payload

  const response = yield call(api.get, `student?name=${name}`)

  yield put(findStudentSuccess(response.data))
}

export default all([
  takeLatest('@student/SIGNUP_STUDENT_REQUEST', studentStore),
  takeLatest('@student/DELETE_STUDENT', studentDelete),
  takeLatest('@student/UPDATE_STUDENT_REQUEST', studentUpdate),
  takeLatest('@student/FIND_STUDENT', studentShow),
])
