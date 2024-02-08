const button = document.getElementById('login')

async function validarLogin(){
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    if(email === '' || senha === ''){
        alert('Preencha os campos corretamente...')
    }else{
        const users = await fetch('http://localhost:8080/usuario')
        const listUsers = await users.json()

        listUsers.forEach((user)=>{
            if(email === user.email && senha === user.senha){
                alert('Usuário cadastrado com sucesso!')
                window.location.href = '../html/index.html'
            }
        })
    }
}

window.onload = () => {
    button.addEventListener('click', validarLogin)
}