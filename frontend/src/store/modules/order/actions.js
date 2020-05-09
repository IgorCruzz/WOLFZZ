export function orderAnswer(data) {
  return {
    type: '@order/SEND_REPLY',
    payload: { data },
  }
}

export const orderDelete = ({ id }) => {
  return {
    type: '@order/ORDER_DELETE',
    payload: { id },
  }
}
