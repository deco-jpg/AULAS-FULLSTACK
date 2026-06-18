import { useState } from 'react'
import './style.css'
import { toast } from 'react-toastify'
import api from '../../services/api'

export default function CadastroPage() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [estaEnviando, setEstaEnviando] = useState(false)

  function limparCamposDoFormulario() {
    setNome('')
    setEmail('')
    setSenha('')
  }

  async function enviarFormulario(event) {
    event.preventDefault()
    setEstaEnviando(true)

    const dadosDoFormulario = {
      nome,
      email,
      senha
    }

    try {
      const resposta = await api.post('/usuarios', dadosDoFormulario)

      toast.success(
        resposta.data.mensagem || 'Cadastrado com sucesso'
      )

      limparCamposDoFormulario()
    } catch (erro) {
      const mensagemDoServidor =
        erro?.response?.data?.mensagem ||
        'Erro ao cadastrar usuário'

      toast.error(mensagemDoServidor)
    } finally {
      setEstaEnviando(false)
    }
  }

  return (
    <div className="cadastro-page">
      <form onSubmit={enviarFormulario}>
        <div className="grupo-form">
          <label htmlFor="campo-nome">Nome</label>
          <input
            id="campo-nome"
            type="text"
            placeholder="Ex: Maria Silva"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="grupo-form">
          <label htmlFor="campo-email">Email</label>
          <input
            id="campo-email"
            type="email"
            placeholder="Ex: maria@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="grupo-form">
          <label htmlFor="campo-senha">Senha</label>
          <input
            id="campo-senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        <button
          type="submit"
          disabled={estaEnviando}
        >
          {estaEnviando
            ? 'Cadastrando...'
            : 'Cadastrar'}
        </button>
      </form>
    </div>
  )
}