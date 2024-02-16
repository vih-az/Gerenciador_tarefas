const button = document.getElementById('login');

async function validarLogin() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === '' || senha === '') {
        alert('preencha os campos corretamente')
    } else {
<<<<<<< HEAD
        const url = 'http://localhost:5080/usuario'
        const users = await fetch(url)
        const listUsers = await users.json()
        console.log(listUsers)

        listUsers.forEach((user) => {
            if (email === user.email && senha === user.senha) {
                alert('Usuario logado com sucesso !!!')
                window.location.href = "../html/index.html"
=======
            const users = await fetch('http://localhost:5080/usuario')
            const listUsers = await users.json()

            listUsers.forEach((user) => {
                if (email === user.email && senha === user.senha) {
                    alert('Usuario logado com sucesso !!!')
                    window.location.href = '../html/index.html'
>>>>>>> ffadf99699527d05163c715294dc381607839bcf

                    console.log(user.email)
                }
            })
        
    }
}


window.onload = () => {
    button.addEventListener('click', validarLogin)
}