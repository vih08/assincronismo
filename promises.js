/*function login ( usuario, senha ) {
    return new Promise((resolve, reject) => {
        // executo a minha função assincrona 
        setTimeout(()=> {
            if (usuario == 'vitoria' && senha == 'leticia'){
                resolve('login com sucesso')
            } else {
                reject('erro no login')
            }
        }, 2000)
    })
}
    
const result = login('vitoria', 'leticia')
console.log = (result)
result
.then(msg => console.log(msg))
.catch(err => console.log(err))
*/
//login('vitoria', 'leticia') 

const tarefa1 = new Promise(( resolve, reject) => {
    setTimeout(() =>{
        resolve('tarefa1')
    }, 1000);
})

const tarefa2 = new Promise(( resolve, reject) => {
    setTimeout(() =>{
        resolve('tarefa2')
    }, 2000);
})
const tarefa3 = new Promise(( resolve, reject) => {
    setTimeout(() =>{
        resolve('tarefa3')
    }, 3000);
})

Promise.all([tarefa1, tarefa2,tarefa3]).then(
    reultados => console.log('tudo finalizado')
)
Promise.race([tarefa1,tarefa2,tarefa3]).then(
    resultados => console.log('a primeira a terminar foi: ', resultados)
)