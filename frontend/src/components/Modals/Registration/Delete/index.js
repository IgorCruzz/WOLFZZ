import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Content } from './styles'

import { DeleteRegistration } from '../../../../store/modules/registration/actions'

export default function RegistrationDelete({ open, close, regId }) {
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(DeleteRegistration({ id: regId }))
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
RegistrationDelete.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  regId: PropTypes.arrayOf(PropTypes.number).isRequired,
}
