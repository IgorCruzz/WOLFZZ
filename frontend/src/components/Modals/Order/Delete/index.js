import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Content } from './styles'

import { orderDelete } from '../../../../store/modules/order/actions'

export default function PlanDelete({ open, close, planId }) {
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(orderDelete({ id: planId }))
  }

  return (
    <Container active={open}>
      <Content>
        <strong>Você tem certeza disso?</strong>
        <div>
          <button type="button" onClick={close}>
            Cancelar
          </button>
          <button type="button" id="button_delete" onClick={handleSubmit}>
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
