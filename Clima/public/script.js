// Garante que o JS só vai executar depois que todo HTML tiver carregado
document.addEventListener("DOMContentLoaded", () => {
    // Pegando os elementos do HTML
    const campoCidade = document.getElementById("cidade")
    const botaoBuscar = document.getElementById("buscar")
    const nomeCidade = document.getElementById("nome-cidade")
    const temperatura = document.getElementById("temperatura")
    const umidade = document.getElementById("umidade")
    const vento = document.getElementById("vento")
    const descricao = document.getElementById("descricao")
  
    // Adicionando evento ao clicar no botão
    botaoBuscar.addEventListener("click", buscarClima)
  
    // Função que busca o clima
    /* Suzano */
    async function buscarClima() {
      const cidade = campoCidade.value.trim()
      if (!cidade) {
        alert("Por favor, Digite uma cidade")
        return
      }
  
      try {
        const resposta = await fetch(`/api/clima?cidade=${cidade}`)
        const dados = await resposta.json()
        // Atualizando os dados no site
        nomeCidade.textContent = dados.name
        temperatura.textContent = Math.round(dados.main.temp)
        umidade.textContent = dados.main.humidity
        vento.textContent = Math.round(dados.wind.speed * 3.6)
        descricao.textContent = dados.weather[0].description
      }
       catch (erro) {
        alert("Não foi possível buscar essa cidade")
      }
    }
  })