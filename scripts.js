console.log("Funcionou!");

document.querySelector("h1")
const nome = document.querySelector("h1");
nome.textContent = "Olá, Guilherme Viana!"

const botao = document.querySelector("#botao-escuro");
botao.addEventListener("click", function() {
    document.body.classList.toggle("modo-escuro")
});
const body = document.querySelector("body");

