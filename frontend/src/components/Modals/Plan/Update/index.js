import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import PropTypes from 'prop-types'
import { Container, Content } from './styles'

import { updatePlan } from '../../../../store/modules/plan/actions'

export default function PlanUpdate({ open, close, plan }) {
  const dispatch = useDispatch()

  function handleSubmit({ title, price, duration }) {
    dispatch(
      updatePlan({
        id: plan.id,
        title,
        price,
        duration,
      })
    )
  }

  return (
    <Container active={open}>
      <Content>
        <h1>Atualizar dados</h1>
        <Form initialData={plan} onSubmit={handleSubmit}>
          <Input name="title" placeholder="Nome" />
          <Input name="price" type="number" placeholder="Preço" />
          <Input name="duration" type="number" placeholder="Duração" />

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
PlanUpdate.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  plan: PropTypes.arrayOf(PropTypes.string).isRequired,
}
