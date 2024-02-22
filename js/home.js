'use strict'

const tarefasPendentes = document.getElementById('tasks-pendentes')
const tarefasConcluidas = document.getElementById('tasks-finalizadas')

async function criarTarefa(){
    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')

    const imgTarefa = document.createElement('img')
    imgTarefa.classList.add('task-photo')

    const tituloTarefa = document.createElement('h4')
    tituloTarefa.classList.add('task-name')

    const descricaoTarefa = document.createElement('h5')
    descricaoTarefa.classList.add('task-description')
}