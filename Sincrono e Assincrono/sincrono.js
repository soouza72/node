// SINCRONO E ASSINCRONO -> SINCRONO.JS
function tarefaDemorada() {
    const agora = new Date();
    const futuro = agora.getTime() + 3000 //add 3 segs
    while (new Date().getTime() < futuro) {} //espera 3 segs
}

console.log("Iniciando o programa...")
console.log("Executando a tarefa 1")
tarefaDemorada() //simula um processo que leva 3 segs
console.log("Tarefa 1 concluída")

console.log("Executando a terefa 2")
tarefaDemorada() //simula outro processo que leva 3 segs
console.log("Tarefa 2 concluída")
console.log("Programa finalizado!")