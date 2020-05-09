import React, { useState, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Form, Select } from '@rocketseat/unform'
import { Container, Content } from './styles'
import api from '../../../../services/api'
import { RegisterStore } from '../../../../store/modules/registration/actions'

export default function RegistrationStore({ open, close }) {
  const dispatch = useDispatch()
  const [students, setStudents] = useState([])
  const [plans, setPlans] = useState([])

  useMemo(async () => {
    const response = await api.get('/plan')

    const planData = response.data.map(data => {
      return {
        id: data.id,
        title: data.title,
      }
    })

    setPlans(planData)
  }, [])

  useMemo(async () => {
    const response = await api.get(`/students`)

    const studentData = response.data.map(student => {
      return {
        id: student.id,
        title: student.name,
      }
    })
    setStudents(studentData)
  }, [])

  const handleSubmit = ({ student_id, plan_id }) => {
    dispatch(RegisterStore({ student_id, plan_id }))
  }

  return (
    <Container active={open}>
      <Content>
        <h1>Matricular aluno</h1>

        <Form onSubmit={handleSubmit}>
          <Select
            name="student_id"
            placeholder="Selecione o aluno"
            options={students}
          />
          <Select
            name="plan_id"
            placeholder="Selecione o plano"
            options={plans}
          />
          <div>
            <button type="button" onClick={close}>
              CANCELAR
            </button>
            <button type="submit">MATRÍCULAR</button>
          </div>
        </Form>
      </Content>
    </Container>
  )
}

RegistrationStore.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
}
