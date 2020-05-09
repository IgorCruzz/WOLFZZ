import React, { useMemo, useState } from 'react'
import { FaPlus, FaTrashAlt, FaEdit } from 'react-icons/fa'

import api from '../../services/api'
import { Container, Header, Content } from './styles'
import { PriceFormat } from '../../util/util'
import ModalPlanRegister from '../../components/Modals/Plan/Register'
import ModalPlanDelete from '../../components/Modals/Plan/Delete'
import ModalPlanUpdate from '../../components/Modals/Plan/Update'

export default function Plans() {
  const [plans, setPlans] = useState([])
  const [plan, setPlan] = useState({})
  const [planId, setPlanId] = useState([])

  const [open, setOpen] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)
  const [modalUpdate, setModalUpdate] = useState(false)

  useMemo(async () => {
    const response = await api.get('/plan')

    const data = response.data.map(plano => {
      return {
        ...plano,
        priceFormatted: PriceFormat(plano.price),
      }
    })
    setPlans(data)
  }, [setPlans])

  return (
    <Container>
      <ModalPlanRegister open={open} close={() => setOpen(false)} />
      <ModalPlanDelete
        open={modalDelete}
        close={() => setModalDelete(false)}
        planId={planId}
      />
      <ModalPlanUpdate
        plan={plan}
        open={modalUpdate}
        close={() => setModalUpdate(false)}
      />
      <Header>
        <strong>Planos</strong>

        <div>
          <button type="button" onClick={() => setOpen(true)}>
            <FaPlus size={10} />
            NOVO PLANO
          </button>
        </div>
      </Header>
      <Content>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Duração</th>
              <th>Editar</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            {plans.map(Plan => (
              <tr key={Plan.id}>
                <td>
                  <strong>{Plan.title}</strong>
                </td>
                <td>{Plan.priceFormatted}</td>
                <td>{Plan.duration} Dias</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      setPlan(Plan)
                      setModalUpdate(true)
                    }}
                  >
                    <FaEdit color="#fff" />
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      setPlanId(Plan.id)
                      setModalDelete(true)
                    }}
                  >
                    <FaTrashAlt color="#999" />
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
