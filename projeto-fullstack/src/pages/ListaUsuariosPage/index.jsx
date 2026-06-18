import { useEffect, useState } from 'react'
import './style.css'
import api from '../../services/api'
import { toast } from 'react-toastify'

export default function ListaUsuariosPage() {
  const [usuarios, setUsuarios] = useState([])

  useEffect(() => {
    async function buscarUsuarios() {
      try {
        const response = await api.get('/usuarios')
        setUsuarios(response.data)
      } catch (erro) {
        toast.error('Erro ao buscar usuarios')
      }
    }

    buscarUsuarios()
  }, [])

  return (
    <div className="lista-usuarios">
      <h1>Lista de usuários</h1>

      {usuarios.length === 0 ? (
        <p>Nenhum usuário cadastrado...</p>
      ) : (
        <table className="tabela-usuarios">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
            </tr>
          </thead>

          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.email}>
                <td>{usuario.nome}</td>
                <td>{usuario.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}