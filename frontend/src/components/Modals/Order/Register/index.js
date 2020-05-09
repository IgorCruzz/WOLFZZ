import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Textarea } from '@rocketseat/unform'
import PropTypes from 'prop-types'
import { Container, Content } from './styles'
import { orderAnswer } from '../../../../store/modules/order/actions'

export default function Order({ msg, open, close }) {
  const dispatch = useDispatch()

  const handleSubmit = ({ answer }) => {
    dispatch(orderAnswer({ id: msg.id, answer }))
  }

  return (
    <Container active={open}>
      <Content>
        <h2>Pergunta do Aluno</h2>

        <p>{msg.question}</p>

        <Form onSubmit={handleSubmit}>
          <Textarea name="answer" placeholder="Digite sua resposta..." />
          <div>
            <button type="button" onClick={close}>
              CANCELAR
            </button>
            <button type="submit">ENVIAR</button>
          </div>
        </Form>
      </Content>
    </Container>
  )
}
Order.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  msg: PropTypes.arrayOf(PropTypes.string).isRequired,
}
