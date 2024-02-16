const button = document.getElementById('login');

async function validarLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === '' || senha === '') {
        alert('preencha os campos corretamente')
    } else {
        const url = 'http://localhost:5080/usuario'
        const users = await fetch(url)
        const listUsers = await users.json()
        console.log(listUsers)

        listUsers.forEach((user) => {
            if (email === user.email && senha === user.senha) {
                alert('Usuario logado com sucesso !!!')
                window.location.href = "../html/index.html"

                console.log(listUsers)
            }
        })
    }
}


window.onload = () => {
    button.addEventListener('click', validarLogin)
}