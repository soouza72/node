const guias = document.querySelectorAll(".guia-btn")
const conteudos = document.querySelectorAll(".conteudo-guia")

guias.forEach(guia => {
  guia.addEventListener("click", () => {
    guias.forEach(g => g.classList.remove("ativo"))
    guia.classList.add("ativo")

    conteudos.forEach(conteudo => conteudo.style.display = "none")

    const guiaID = guia.getAttribute("data-guia")
    document.getElementById(`guia-${guiaID}`).style.display = "block"
  })
})

// Cronômetro
let intervaloCronometro
let segundosCronometro = 0
let cronometroRodando = false

const displayCronometro = document.getElementById("cronometro")
const botaoIniciarCronometro = document.getElementById("iniciarCronometro")
const botaoPausarCronometro = document.getElementById("pausarCronometro")
const botaoResetarCronometro = document.getElementById("resetarCronometro")

function atualizarDisplayCronometro() {
  const horas = Math.floor(segundosCronometro / 3600)
  const minutos = Math.floor((segundosCronometro % 3600) / 60)
  const segundos = Math.floor(segundosCronometro % 60)

  displayCronometro.textContent = 
    `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`
}

function iniciarCronometro() {
  if (!cronometroRodando) {
    cronometroRodando = true
    intervaloCronometro = setInterval(() => {
      segundosCronometro++
      atualizarDisplayCronometro()
    }, 1000)
  }
}

function pausarCronometro() {
  if (cronometroRodando) {
    cronometroRodando = false
    clearInterval(intervaloCronometro)
  }
}

function resetarCronometro() {
  pausarCronometro()
  segundosCronometro = 0
  atualizarDisplayCronometro()
}

let intervaloContagem
let segundoContagem = 0
let contagemRodando = false

const displayContagem = document.getElementById("contagem")
const entradaHoras = document.getElementById("horas")
const entradaMinutos = document.getElementById("minutos")
const entradaSegundos = document.getElementById("segundos")
const botaoIniciarContagem = document.getElementById("iniciarContagem")
const botaoPausarContagem = document.getElementById("pausarContagem")
const botaoResetarContagem = document.getElementById("resetarContagem")

function atualizarDisplayContagem() {
  const horas = Math.floor(segundoContagem / 3600)
  const minutos = Math.floor((segundoContagem % 3600) / 60)
  const segundos = Math.floor(segundoContagem % 60)

  displayContagem.textContent = 
    `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`
}

function iniciarContagem() {
  if (!contagemRodando) {
    const horas = parseInt(entradaHoras.value) || 0
    const minutos = parseInt(entradaMinutos.value) || 0
    const segundos = parseInt(entradaSegundos.value) || 0

    segundoContagem = (horas * 3600) + (minutos * 60) + segundos

    if (segundoContagem > 0) {
      contagemRodando = true
      atualizarDisplayContagem()
      intervaloContagem = setInterval(() => {
        if (segundoContagem > 0) {
          segundoContagem--
          atualizarDisplayContagem()
        } else {
          clearInterval(intervaloContagem)
          contagemRodando = false
          alert("Tempo esgotado!")
        }
      }, 1000)
    }
  }
}

function pausarContagem() {
  if (contagemRodando) {
    clearInterval(intervaloContagem)
    contagemRodando = false
  }
}

function resetarContagem() {
  pausarContagem()
  segundoContagem = 0
  atualizarDisplayContagem()
  entradaHoras.value = ""
  entradaMinutos.value = ""
  entradaSegundos.value = ""
}

botaoIniciarCronometro.addEventListener("click", iniciarCronometro)
botaoPausarCronometro.addEventListener("click", pausarCronometro)
botaoResetarCronometro.addEventListener("click", resetarCronometro)

botaoIniciarContagem.addEventListener("click", iniciarContagem)
botaoPausarContagem.addEventListener("click", pausarContagem)
botaoResetarContagem.addEventListener("click", resetarContagem)