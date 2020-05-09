import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { Form, Input } from '@rocketseat/unform'
import { MdAddAPhoto } from 'react-icons/md'
import { Container, Content } from './styles'
import { studentSignUp } from '../../../../store/modules/student/actions'
import api from '../../../../services/api'

export default function StudentSignUp({ open, close }) {
  const dispatch = useDispatch()
  const [url, setUrl] = useState(null)
  const [fileField, setFileField] = useState(null)

  function handleSubmit({ avatar, name, email, age, weight, height }) {
    dispatch(studentSignUp({ avatar, name, email, age, weight, height }))
  }

  const handleChange = async e => {
    e.preventDefault()
    const data = new FormData()
    data.append('file', e.target.files[0])
    const response = await api.post('/files', data)
    setUrl(response.data.url)
    setFileField(response.data.id)
  }

  return (
    <Container active={open}>
      <Content>
        <h1>Cadastrar aluno</h1>
        <small>Por favor, preencha este formulário para criar uma conta.</small>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="name" placeholder="Nome" />
          <Input name="email" type="email" placeholder="Email" />
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
              FECHAR
            </button>
            <button type="submit">CADASTRAR</button>
          </div>
        </Form>
      </Content>
    </Container>
  )
}

StudentSignUp.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}
