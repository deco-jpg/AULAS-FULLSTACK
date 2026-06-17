import { useState } from 'react'
import './style.css'

export default function CadastroPage(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estaEnviando, setEstaEnviando] = useState(false);

    function limparCamposDoFormulario(){
        setNome('');
        setEmail('');
        setSenha('');
    }

    async function enviarFormulario(event){
        event.preventDefault();
        setEstaEnviando(true);

        const dadosDoFormulario = {
            nome: nome,
            email: email,
            senha: senha
        };

        try {
            const resposta = await api.post
        }
    }
}