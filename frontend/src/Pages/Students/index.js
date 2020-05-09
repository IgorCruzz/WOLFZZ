import React, { useState, useMemo } from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
import { IoMdPersonAdd } from 'react-icons/io'

import { Container, Header, Content } from './styles'

import ModalRegister from '../../components/Modals/Student/Register'
import ModalDelete from '../../components/Modals/Student/Delete'
import ModalUpdate from '../../components/Modals/Student/Update'

import api from '../../services/api'

export default function Students() {
  const [students, setStudents] = useState([])
  const [studentId, setStudentId] = useState([])
  const [student, setStudent] = useState([])
  const [searchStudent, setSearchStudent] = useState('')
  const [open, setOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)
  const [openUpdate, setOpenUpdate] = useState(false)

  useMemo(async () => {
    const response =
      searchStudent === ''
        ? await api.get(`students`)
        : await api.get(`student?name=${searchStudent}`)
    setStudents(response.data)
  }, [searchStudent, setStudents])

  return (
    <Container>
      <ModalRegister open={open} close={() => setOpen(false)} />
      <ModalDelete
        open={openDelete}
        close={() => setOpenDelete(false)}
        studentId={studentId}
      />
      <ModalUpdate
        open={openUpdate}
        close={() => setOpenUpdate(false)}
        student={student}
      />
      <Header>
        <div>
          <h1>Alunos</h1>

          <strong>Procurar aluno:</strong>
          <input
            placeholder="Buscar aluno..."
            type="search"
            onChange={e => setSearchStudent(e.target.value)}
          />
        </div>

        <button type="button" onClick={() => setOpen(true)}>
          <IoMdPersonAdd size={20} />
          NOVO ALUNO
        </button>
      </Header>
      <Content>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Idade</th>
              <th>Peso</th>
              <th>Altura</th>
              <th>Editar</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            {students.map(Student => (
              <tr key={Student.id}>
                <td>
                  <strong>{Student.name}</strong>
                </td>
                <td>{Student.email}</td>
                <td>{Student.age} anos</td>
                <td>{Student.weight} Kg</td>
                <td>{Student.height}m</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      setStudent(Student)
                      setOpenUpdate(true)
                    }}
                  >
                    <FaEdit color="#fff" />
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      setStudentId(Student.id)
                      setOpenDelete(true)
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
