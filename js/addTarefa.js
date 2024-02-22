'use strict'

const botaoAddTarefa = document.getElementById('add-task')
const idUser = localStorage.getItem('idUsuario')

async function adcionarTarefa(){
    const tarefaTitulo = document.getElementById('task-title').value
    const tarefaDescricao = document.getElementById('task-description').value
    const tarefaFoto = document.getElementById('task-pic').value
    const tarefaDataDeInicio = document.getElementById('task-date-inc').value
    const tarefaDataDeFim = document.getElementById('task-date-fin').value

    if(tarefaTitulo == '' || tarefaDescricao == '' || tarefaDataDeInicio == '' || tarefaDataDeFim == ''){
        alert('Por favor, preencha todos os campos !!')
    }else{
        try{
            const novaTarefa = {}
            novaTarefa.titulo = tarefaTitulo
            novaTarefa.descricao = tarefaDescricao
            novaTarefa.foto = tarefaFoto
            novaTarefa.dataInicio = tarefaDataDeInicio
            novaTarefa.dataConclusao = tarefaDataDeFim
            novaTarefa.idUsuario = idUser
            const url = 'http://localhost:5080/tarefas'
            const options = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(novaTarefa)
            }
            console.log(novaTarefa)
            await fetch(url, options)
            window.location.href = '../html/home.html'
        }catch(error){
            console.log(error)
        }
    }
}

window.onload = () => {
    botaoAddTarefa.addEventListener('click', adcionarTarefa)
}