function funcaoBotao1() {
  alert('Botão 1 foi clicado!');
}

function funcaoBotao2() {
  alert('Botão 2 foi clicado!');
}

/* 
Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML.
  
  *Passo 1 - pegar o botão "Mostar mais" no JS para poder verificar quando o ususário clicar em cima dele.
  
  *Passo 2 - identificar o clique no botão.
  
  *Passo 3 - adicionar a classe "ativo* nos projetos escondidos.
  
Objetivo 2 esconder o botão de "Mostrar mais".

  *Passo 1 pegar o botão e esconder ele.
*/


// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML.
//   *Passo 1 - pegar o botão "Mostar mais" no JS para poder verificar quando o ususário clicar em cima dele.

/*const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
  //*Passo 3 - adicionar a classe "ativo* nos projetos escondidos.
  projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.add('ativo');
  });

  // Objetivo 2 esconder o botão de "Mostrar mais".
  // *Passo 1 pegar o botão e esconder ele.
  botaoMostrarProjetos.classList.add("remover");
}); */



// CÓDIGO REFATORADO!


const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
  mostrarMaisProjetos();
  esconderBotao();
});

function mostrarMaisProjetos() {
  projetosInativos.forEach(projetoInativo => {
    projetoInativo.classList.add('ativo');
  });
}

function esconderBotao() {
  botaoMostrarProjetos.classList.add("remover");
}