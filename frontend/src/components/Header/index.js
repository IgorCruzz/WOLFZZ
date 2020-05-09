import React, { useEffect, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { IoMdLogOut } from 'react-icons/io'
import logo from '../../assets/icon.png'

import { Container, Content, Notification } from './styles'
import api from '../../services/api'
import { signOut } from '../../store/modules/auth/actions'

export default function Header() {
  const dispatch = useDispatch()
  const [questions, setQuestions] = useState([])
  const [count, setCount] = useState(0)

  const hasUnread = useMemo(() => questions.find(q => q.answer === null), [
    questions,
  ])

  useEffect(() => {
    const response = questions.filter(question => question.answer === null)
    setCount(response.length)
  }, [questions])

  useEffect(() => {
    async function loadQuestion() {
      const response = await api.get('help-orders')

      setQuestions(response.data)
    }
    loadQuestion()
  }, [])

  function handleSignOut() {
    dispatch(signOut())
  }

  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <Link to="/students">ALUNOS</Link>
          <Link to="/plans">PLANOS</Link>
          <Link to="registrations">MATRICULAS</Link>
          <Link to="helporders">
            <div>
              MENSAGENS
              <Notification hasUnread={hasUnread}>
                <small>{count}</small>
              </Notification>
            </div>
          </Link>
        </nav>
        <aside>
          <strong>Administrador</strong>
          <Link to="/" onClick={() => handleSignOut()}>
            <IoMdLogOut />
          </Link>
        </aside>
      </Content>
    </Container>
  )
}
