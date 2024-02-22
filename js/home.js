'use strict'

const tarefasPendentes = document.getElementById('tasks-pendentes')
const tarefasConcluidas = document.getElementById('tasks-finalizadas')
const idUser = localStorage.getItem('idUsuario')

async function criarContainerTarefa(tarefa) {
    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')

    const imgTarefa = document.createElement('img')
    imgTarefa.classList.add('task-photo')
    imgTarefa.src = `../img/${tarefa.foto}`

    const tituloTarefa = document.createElement('h4')
    tituloTarefa.classList.add('task-name')
    tituloTarefa.textContent = tarefa.titulo

    const descricaoTarefa = document.createElement('h5')
    descricaoTarefa.classList.add('task-description')
    descricaoTarefa.textContent = tarefa.descricao

    taskContainer.appendChild(imgTarefa, tituloTarefa, descricaoTarefa)
}

async function validarTarefa() {
    const url = 'http://localhost:5080/tarefas'
    const response = await fetch(url)
    const listaTarefas = response.json()

    const listaTarefasARRAY = []
    listaTarefas.forEach(function(tarefa){
        if(idUser==tarefa.idUsuario){
            listaTarefasARRAY.push(tarefa)
            criarContainerTarefa(listaTarefasARRAY)
        }
    })
}