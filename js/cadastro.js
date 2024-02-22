'use strict'

const botaoCadastro = document.getElementById('botao-cadastro')

async function cadastrarUsuario() {
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value
    const senhaConfirmacao = document.getElementById('senha-confirmacao').value
    const telefone = document.getElementById('telefone').value
    if (nome == '' || email == '' || senha == '' || senhaConfirmacao == '' || telefone == '') {
        alert('Por favor, preenha todos os campos !!')
        if(senha != senhaConfirmacao){
            alert('Digite corretamente sua senha!')
        }
    }else{
        try{
            const novoUsuario = {}
            novoUsuario.nome = nome
            novoUsuario.email = email
            novoUsuario.senha = senha
            novoUsuario.telefone = telefone
            const url = 'http://localhost:5080/usuario'
            const options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(novoUsuario)
            }

            await fetch(url, options)
            window.location.href = '../html/home.html'
        }catch(error){
            console.log(error)
        }
    }
}

window.onload = () => {
    botaoCadastro.addEventListener('click', cadastrarUsuario)
}