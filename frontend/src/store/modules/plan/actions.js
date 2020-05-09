export function registerPlan({ title, price, duration }) {
  return {
    type: '@plan/REGISTER_PLAN',
    payload: { title, price, duration },
  }
}

export function deletePlan({ id }) {
  return {
    type: '@plan/DELETE_PLAN',
    payload: { id },
  }
}

export function updatePlan({ id, title, price, duration }) {
  return {
    type: '@plan/UPDATE_PLAN',
    payload: { id, title, price, duration },
  }
}
