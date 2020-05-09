import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import PropTypes from 'prop-types'

import { Container, Content } from './styles'
import { registerPlan } from '../../../../store/modules/plan/actions'

export default function PlanRegister({ open, close }) {
  const dispatch = useDispatch()

  const handleSubmit = ({ title, price, duration }) => {
    dispatch(registerPlan({ title, price, duration }))
  }

  return (
    <Container active={open}>
      <Content>
        <h1>Cadastrar plano</h1>
        <small>Por favor, preencha este formulário para criar um plano.</small>
        <hr />

        <Form onSubmit={handleSubmit}>
          <Input name="title" placeholder="Nome" />

          <Input name="price" min="1" placeholder="Preço" type="number" />

          <Input name="duration" min="1" placeholder="Duração" type="number" />

          <div>
            <button type="button" onClick={close}>
              CANCELAR
            </button>
            <button type="submit">CADASTRAR</button>
          </div>
        </Form>
      </Content>
    </Container>
  )
}
PlanRegister.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}
