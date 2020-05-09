import React, { useMemo, useState } from 'react'

import { TiMessage } from 'react-icons/ti'
import { FaRegTimesCircle } from 'react-icons/fa'
import { Header, Content, Container, Li } from './styles'

import api from '../../services/api'
import { Truncate } from '../../util/util'
import ModalMsg from '../../components/Modals/Order/Register'
import ModalDelete from '../../components/Modals/Order/Delete'

export default function HelpOrders() {
  const [questions, setQuestions] = useState([])
  const [questionId, setQuestionId] = useState('')
  const [question, setQuestion] = useState([])

  const [open, setOpen] = useState(false)
  const [Modaldelete, setModalDelete] = useState(false)

  useMemo(async () => {
    const response = await api.get('help-orders')
    setQuestions(response.data)
  }, [])

  return (
    <Container>
      <ModalMsg msg={question} open={open} close={() => setOpen(false)} />
      <ModalDelete
        open={Modaldelete}
        close={() => setModalDelete(false)}
        planId={questionId}
      />
      <Header>
        <div>
          <strong>Pedidos de auxilio</strong>
        </div>
      </Header>
      <Content>
        <ul>
          {questions.map(quest => (
            <Li key={quest.id} hasUnread={quest.answer === null}>
              <div>
                <span>
                  <strong>{quest.student.name}</strong>
                  <p>{Truncate(quest.question, 70)}</p>
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setOpen(true)
                  setQuestion(quest)
                }}
              >
                <TiMessage size={35} />
                <small>Ver mensagem</small>
              </button>
              <button
                type="button"
                onClick={() => {
                  setQuestionId(quest.id)
                  setModalDelete(true)
                }}
              >
                <FaRegTimesCircle size={35} />
                <small>Excluir mensagem</small>
              </button>
            </Li>
          ))}
        </ul>
      </Content>
    </Container>
  )
}
