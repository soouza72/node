const enigmas = {
  quadro: {
    pergunta: "🖼️ Qual número vem a seguir? 2, 4, 8, 16, ?",
    resposta: "32"
  },
  caixa: {
    pergunta: "📦 Qual é a capital do Brasil?",
    resposta: "brasília"
  },
  livro: {
    pergunta: "📖 Começo com 'e', termino com 'e' e só tenho uma letra. O que sou?",
    resposta: "envelope"
  },
  janela: {
    pergunta: "🪟 Quanto é 3² + 4²?",
    resposta: "25"
  },
  armario: {
    pergunta: "🚪 Qual palavra tem 5 letras e é igual de trás pra frente?",
    resposta: "radar"
  }
};

const resolvidos = {
  quadro: false,
  caixa: false,
  livro: false,
  janela: false,
  armario: false
};

let objetoAtual = "";

function mostrarPergunta(obj) {
  if (resolvidos[obj]) {
    escreverMensagem("✅ Esse enigma já foi resolvido!");
    return;
  }

  objetoAtual = obj;
  document.getElementById("perguntaTexto").textContent = enigmas[obj].pergunta;
  document.getElementById("perguntaBox").style.display = "block";
  document.getElementById("resposta").value = "";
  escreverMensagem("");
}

function verificarResposta() {
  const input = document.getElementById("resposta").value.trim().toLowerCase();
  const correta = enigmas[objetoAtual].resposta.toLowerCase();

  if (input === correta) {
    resolvidos[objetoAtual] = true;
    escreverMensagem("✅ Resposta correta!");
  } else {
    escreverMensagem("❌ Resposta errada. Tente novamente!");
  }

  atualizarContador();
  document.getElementById("perguntaBox").style.display = "none";
}

function verificarSaida() {
  const todos = Object.values(resolvidos).every(e => e);
  if (todos) {
    escreverMensagem("🎉 Você resolveu todos os enigmas!\n🚪 A porta se abre... VOCÊ ESCAPOU!");
  } else {
    escreverMensagem("🔒 A porta continua trancada. Ainda há enigmas a resolver.");
  }
}

function atualizarContador() {
  const resolvidosCount = Object.values(resolvidos).filter(v => v).length;
  document.getElementById("contador").textContent = `Enigmas resolvidos: ${resolvidosCount} / 5 ✅`;
}

function escreverMensagem(msg) {
  document.getElementById("mensagem").textContent = msg;
}