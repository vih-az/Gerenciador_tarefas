'use strict'

const tarefasPendentes = document.getElementById('tasks-pendentes')
const tarefasConcluidas = document.getElementById('tasks-finalizadas')
const idUser = localStorage.getItem('idUsuario')
const iconeDeletarTarefa = document.createElement('img')

async function criarContainerTarefa(tarefa) {
    const taskContainer = document.createElement('div')
    taskContainer.classList.add('task-container')

    const imgTarefa = document.createElement('img')
    imgTarefa.classList.add('task-photo')
    imgTarefa.src = `../img/image 10.png`

    if (!imgTarefa) {
        imgTarefa.src = 'https://img.icons8.com/?size=80&id=45368&format=png'
    }

    const tituloTarefa = document.createElement('h4')
    tituloTarefa.classList.add('task-name')
    tituloTarefa.textContent = tarefa.titulo

    const descricaoTarefa = document.createElement('h5')
    descricaoTarefa.classList.add('task-description')
    descricaoTarefa.textContent = tarefa.descricao

    const iconeDeletarTarefa = document.createElement('img')
    iconeDeletarTarefa.setAttribute('id', 'deletarTarefa')
    iconeDeletarTarefa.src = 'https://img.icons8.com/?size=30&id=ypOzn2c4IIbr&format=png'
    iconeDeletarTarefa.addEventListener('click', deletarTarefa(tarefa.id))
    taskContainer.append(imgTarefa, tituloTarefa, descricaoTarefa, iconeDeletarTarefa)
    return taskContainer
}

async function validarTarefa() {
    const url = 'http://localhost:5080/tarefas'
    const response = await fetch(url)
    const listaTarefas = await response.json()
    const listaTarefasARRAY = []
    listaTarefas.forEach(async function (tarefa) {
        if (idUser == tarefa.idUsuario) {
            listaTarefasARRAY.push(tarefa)
        }
    })
    return listaTarefasARRAY
}

async function mostrarContainerTarefa() {

    const tarefa = await validarTarefa()
    tarefa.forEach(async function (tarefa) {

        const containerTarefa = document.querySelector("div.tasks-pendentes")
        const criarTarefa = await criarContainerTarefa(tarefa)
        containerTarefa.appendChild(criarTarefa)
    })
}

async function deletarTarefa(tarefa) {
    const iconeDeletarTarefa = document.getElementById('deletarTarefa')
    try {
        const url = `http://localhost:5080/tarefas${tarefa}`
        const options = {
            method: 'DELETE'
        }
        await fetch(url, options)
        console.log('tarefa deletada com sucesso !!')
        // window.location.reload()
    }catch(error){
        alert('não foi possível deletar a tarefa !!')
    }
}
// iconeDeletarTarefa.addEventListener('click', deletarTarefa(tarefa))
mostrarContainerTarefa()