import { combineReducers } from 'redux'

import auth from './auth/reducer'
import student from './student/reducer'
import registration from './registration/reducer'

export default combineReducers({ auth, student, registration })
