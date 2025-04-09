// SINCRONO E ASSINCRONO -> ASSINCRONO.JS 
function tarefaDemorada(nome, tempo) {
    setTimeout(() => {
        console.log(`Tarefa ${nome} concluida`)
    }, tempo)
}

console.log("iniciando o progama")
console.log("executando a tarefa 1")
tarefaDemorada(1, 3000) //tarefa 1 vai demorar 3 segs, mas não vai travar o código 

console,log("executando a tarefa 2")
tarefaDemorada(2, 3000) //terefa 2 vai demorar 3 segs e vai iniciar logo depois da primeira

console.log("progama finalizado (mas as tarefas ainda estão acontecendo)")