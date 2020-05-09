export function studentSignUp({ name, email, age, weight, height }) {
  return {
    type: '@student/SIGNUP_STUDENT_REQUEST',
    payload: { name, email, age, weight, height },
  }
}

export function deleteStudent({ id }) {
  return {
    type: '@student/DELETE_STUDENT',
    payload: { id },
  }
}

export function updateStudentRequest({ id, name, email, age, weight, height }) {
  return {
    type: '@student/UPDATE_STUDENT_REQUEST',
    payload: { id, name, email, age, weight, height },
  }
}

export function findStudentRequest(name) {
  return {
    type: '@student/FIND_STUDENT',
    payload: { name },
  }
}

export function findStudentSuccess(profile) {
  return {
    type: '@student/FIND_STUDENT_SUCCESS',
    payload: { profile },
  }
}
