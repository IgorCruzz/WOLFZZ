import produce from 'immer'

const INITIAL_STATE = {
  close: false,
}

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/SIGNUP_SUCCESS': {
        draft.close = true
        break
      }
      default:
    }
  })
}
