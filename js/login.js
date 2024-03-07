const button = document.getElementById('login');

async function validarLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === '' || senha === '') {
        alert('preencha os campos corretamente')
    } else {
            const users = await fetch('http://localhost:5080/usuario')
            const listUsers = await users.json()

            listUsers.forEach((user) => {
                if (email === user.email && senha === user.senha) {
                    localStorage.setItem("idUsuario", user.id)
                    console.log(user.id);
                    
                    alert('Usuario logado com sucesso !!!')
                    window.location.href = '../html/home.html'

                    console.log(user.email)
                }
            })
        
    }
}


window.onload = () => {
    button.addEventListener('click', validarLogin)
}