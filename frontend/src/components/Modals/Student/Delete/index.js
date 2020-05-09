import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Container, Content } from './styles'

import { deleteStudent } from '../../../../store/modules/student/actions'

export default function DeleteStudent({ open, close, studentId }) {
  const dispatch = useDispatch()

  function handleSubmit({ id }) {
    dispatch(deleteStudent({ id }))
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
            onClick={() => handleSubmit({ id: studentId })}
          >
            Deletar
          </button>
        </div>
      </Content>
    </Container>
  )
}
DeleteStudent.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  studentId: PropTypes.arrayOf(PropTypes.string).isRequired,
}
