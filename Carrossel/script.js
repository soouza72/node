const container = document.querySelector(".container");
const botaoAnterior = document.querySelector(".botao-anterior");
const botaoProximo = document.querySelector(".botao-proximo");
let indiceAtual = 0;
let idIntervalo;

function atualizarCarrossel() {
    container.style.transform = `translateX(-${indiceAtual * 33.33}%)`;
}

function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % 3;
    atualizarCarrossel();
}

function imagemAnterior() {
    indiceAtual = (indiceAtual - 1 + 3) % 3;
    atualizarCarrossel();
}

function iniciarCarrossel() {
    idIntervalo = setInterval(proximaImagem, 5000);
}

function reiniciarCarrossel() {
    clearInterval(idIntervalo);
    iniciarCarrossel();
}

botaoAnterior.addEventListener("click", () => {
    imagemAnterior();
    reiniciarCarrossel();
});

botaoProximo.addEventListener("click", () => {
    proximaImagem();
    reiniciarCarrossel();
});

iniciarCarrossel();
