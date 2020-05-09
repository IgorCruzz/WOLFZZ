import React, { useEffect, useState } from 'react'
import { FaPlus, FaTrashAlt } from 'react-icons/fa'
import { format, parseISO } from 'date-fns'
import api from '../../services/api'
import { Container, Header, Content } from './styles'

import ModalRegister from '../../components/Modals/Registration/Register'
import ModalDelete from '../../components/Modals/Registration/Delete'

export default function Registrations() {
  const [registrations, setRegistrations] = useState([])
  const [registration, setRegistration] = useState([])

  const [open, setOpen] = useState(false)
  const [modelDelete, setModalDelete] = useState(false)

  useEffect(() => {
    async function loadRegistrations() {
      const response = await api.get('registration')

      const regis = response.data.map(data => {
        return {
          id: data.id,
          name: data.student.name,
          plan: data.plan.title,
          startDate: format(parseISO(data.start_date), 'dd/MM/yyyy'),
          endDate: format(parseISO(data.end_date), 'dd/MM/yyyy'),
        }
      })
      setRegistrations(regis)
    }
    loadRegistrations()
  }, [])
  return (
    <Container>
      <ModalRegister open={open} close={() => setOpen(false)} />
      <ModalDelete
        open={modelDelete}
        close={() => setModalDelete(false)}
        regId={registration}
      />
      <Header>
        <strong>Matriculas</strong>

        <div>
          <button type="button" onClick={() => setOpen(true)}>
            <FaPlus size={10} />
            NOVA MATRICULA
          </button>
        </div>
      </Header>
      <Content>
        <table>
          <thead>
            <tr>
              <th>Aluno</th>
              <th>Plano</th>
              <th>Início</th>
              <th>Término</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            {registrations.map(reg => (
              <tr key={reg.id}>
                <td>{reg.name}</td>
                <td>{reg.plan}</td>
                <td>{reg.startDate}</td>
                <td>{reg.endDate}</td>
                <td style={{ color: 'red', fontWeight: '#e44a68' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setModalDelete(true)
                      setRegistration(reg.id)
                    }}
                  >
                    <FaTrashAlt color="#999" size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  )
}
