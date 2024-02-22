'use strict'

const tarefasPendentes = document.getElementById('tasks-pendentes')
const tarefasConcluidas = document.getElementById('tasks-finalizadas')
const idUsuario = localStorage.getItem('idUsuario')

async function criarTarefa(){
    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')

    const imgTarefa = document.createElement('img')
    imgTarefa.classList.add('task-photo')
    imgTarefa.src('../img/image 10.png')

    const tituloTarefa = document.createElement('h4')
    tituloTarefa.classList.add('task-name')

    const descricaoTarefa = document.createElement('h5')
    descricaoTarefa.classList.add('task-description')
}

async function validarTarefa(){
    const url = 'http://localhost:5080/tarefas'
    const response = await fetch(url)
    const listaTarefas = response.json()
    
    
}