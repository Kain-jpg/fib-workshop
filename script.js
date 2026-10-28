document.addEventListener("DOMContentLoaded", () => {
  const botao = document.getElementById("botaoMensagem");
  const mensagem = document.getElementById("mensagem");

  botao.addEventListener("click", () => {
    mensagem.textContent = "Olá! Este projeto foi executado com sucesso no navegador.";
  });
});