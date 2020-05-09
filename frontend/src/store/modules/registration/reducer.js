import produce from 'immer'

const INITIAL_VALUE = {
  download: false,
  close: false,
}

export default function registration(state = INITIAL_VALUE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@registration/STORE_REGISTER_SUCCESS': {
        draft.download = true
        draft.close = true
        break
      }
      default:
    }
  })
}
