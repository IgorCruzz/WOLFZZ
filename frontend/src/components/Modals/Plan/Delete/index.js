import React from 'react'
import { useDispatch } from 'react-redux'

import PropTypes from 'prop-types'
import { Container, Content } from './styles'
import { deletePlan } from '../../../../store/modules/plan/actions'

export default function PlanDelete({ open, close, planId }) {
  const dispatch = useDispatch()

  function handleSubmit({ id }) {
    dispatch(deletePlan({ id }))
  }

  return (
    <Container active={open}>
      <Content>
        <strong>Você tem certeza disso?</strong>
        <div>
          <button type="button" onClick={close}>
            Cancelar
          </button>
          <button
            type="button"
            id="button_delete"
            onClick={() => handleSubmit({ id: planId })}
          >
            Deletar
          </button>
        </div>
      </Content>
    </Container>
  )
}
PlanDelete.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  planId: PropTypes.arrayOf(PropTypes.number).isRequired,
}
