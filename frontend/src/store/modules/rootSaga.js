import { all } from 'redux-saga/effects'

import auth from './auth/sagas'
import student from './student/sagas'
import plan from './plan/sagas'
import order from './order/sagas'
import registration from './registration/sagas'

export default function* rootSaga() {
  return yield all([auth, student, plan, order, registration])
}
