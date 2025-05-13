function pegarUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("vitoria e leticia")
        }, 2000)
    })
}

function verificarNumero() {
    return new Promise((resolve, reject) => {
        const numero = Math.floor(Math.random() * 11) // gera número entre 0 a 10
        console.log(`numero gerado: ${numero}`)

        if (numero > 5) {
            resolve("numero maior que 5: foi")
        } else {
            reject("numero menor ou igual a 5: não foi")
        }
    })
}

async function mostrarUsuario() {
    try {
        const usuario = await pegarUsuario()
        console.log(usuario)

        const resultado = await verificarNumero()
        console.log(resultado)
    } catch (err) {
        console.log(err)
    }
}

mostrarUsuario()
