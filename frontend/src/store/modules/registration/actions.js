export const RegisterStore = ({ student_id, plan_id }) => {
  return {
    type: '@registration/STORE_REGISTER',
    payload: { student_id, plan_id },
  }
}

export const DeleteRegistration = ({ id }) => {
  return {
    type: '@registration/DELETE_REGISTER',
    payload: { id },
  }
}
