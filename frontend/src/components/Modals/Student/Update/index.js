import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Form, Input } from '@rocketseat/unform'
import { Container, Content } from './styles'
import { updateStudentRequest } from '../../../../store/modules/student/actions'

export default function StudentUpdate({ open, close, student }) {
  const dispatch = useDispatch()

  function handleSubmit({ name, email, age, weight, height }) {
    dispatch(
      updateStudentRequest({
        id: student.id,
        name,
        email,
        age,
        weight,
        height,
      })
    )
  }

  return (
    <Container active={open}>
      <Content>
        <h1>Atualizar dados</h1>
        <Form initialData={student} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" />
          <Input name="email" placeholder="Email" />
          <Input
            name="age"
            placeholder="Idade"
            type="number"
            style={{ width: '100px' }}
          />
          <Input
            name="weight"
            placeholder="Peso"
            type="number"
            style={{ width: '100px' }}
          />
          <Input
            name="height"
            placeholder="Altura"
            type="number"
            style={{ width: '100px' }}
          />
          <div>
            <button type="button" onClick={close}>
              CANCELAR
            </button>
            <button type="submit">ATUALIZAR</button>
          </div>
        </Form>
      </Content>
    </Container>
  )
}
StudentUpdate.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  student: PropTypes.arrayOf(PropTypes.string).isRequired,
}
