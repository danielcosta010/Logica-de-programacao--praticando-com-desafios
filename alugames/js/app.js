      //Minha solução cheia de repetição e incluindo id no HTML 😁😁😁😁

// function alterarStatus(numBotao) {
//   let botao1 = document.getElementById('botao1')
//   let botao2 = document.getElementById('botao2')
//   let botao3 = document.getElementById('botao3')
//   let imgGamae1 = document.getElementById('imgGame1')
//   let imgGamae2 = document.getElementById('imgGame2')
//   let imgGamae3 = document.getElementById('imgGame3')

//   if (numBotao == 1) {
//     botao1.classList.toggle('dashboard__item__button--return')
//     imgGamae1.classList.toggle('dashboard__item__img--rented') 
//     botao1.textContent == 'Alugar' ? botao1.textContent = 'Devolver' : botao1.textContent = 'Alugar'
//   }

//   if (numBotao == 2) {
//     botao2.classList.toggle('dashboard__item__button--return')
//     imgGamae2.classList.toggle('dashboard__item__img--rented')
//     botao2.textContent == 'Alugar' ? botao2.textContent = 'Devolver' : botao2.textContent = 'Alugar'

//   }

//   if (numBotao == 3) {
//     botao3.classList.toggle('dashboard__item__button--return')
//     imgGamae3.classList.toggle('dashboard__item__img--rented')
//     botao3.textContent == 'Alugar' ? botao3.textContent = 'Devolver' : botao3.textContent = 'Alugar'

//   }
// }

        //Melhor solução no forum da alura

function alterarStatus(gameId) {
  const botao = document.querySelector(`#game-${gameId} .dashboard__item__button`)
  console.log(botao);
  const imagens = document.querySelectorAll(`#game-${gameId} .dashboard__item__img`)
  console.log(imagens);
  
  botao.innerHTML == 'Alugar'? botao.innerHTML  = 'Devolver' : botao.innerHTML = 'Alugar'
  botao.classList.toggle('dashboard__item__button--return')
  imagens.forEach(imagem => imagem.classList.toggle('dashboard__item__img--rented'))

}

// function alterarStatus(gameId) {
//   const botao = document.getElementById(`game-${gameId}`).querySelector('.dashboard__item__button');
//   const imagensJogos = document.querySelectorAll(`#game-${gameId} .dashboard__item__img`);
    
//   const estaAlugado = botao.innerHTML === 'Devolver';
//   botao.innerHTML = estaAlugado ? 'Alugar' : 'Devolver';
//   botao.classList.toggle("dashboard__item__button--return", !estaAlugado);
//   imagensJogos.forEach(imagem => imagem.classList.toggle(dashboard__item__img--rented", !estaAlugado));
// }


        //Resolução do chat-gpt

// function alterarStatus(numBotao) {
//   const botoes = [
//     document.getElementById('botao1'),
//     document.getElementById('botao2'),
//     document.getElementById('botao3')
//   ];

//   const imagens = [
//     document.getElementById('imgGame1'),
//     document.getElementById('imgGame2'),
//     document.getElementById('imgGame3')
//   ];

//   const botao = botoes[numBotao - 1];
//   const imagem = imagens[numBotao - 1];

//   botao.classList.toggle('dashboard__item__button--return');
//   botao.textContent = botao.textContent === 'Alugar' ? 'Devolver' : 'Alugar';
//   imagem.classList.toggle('dashboard__item__img--rented');
// }


          //Solução dos instrutores

// function alterarStatus(id) {
//   const gameClicado = document.getElementById(`game-${id}`);
//   const botao = gameClicado.querySelector('.dashboard__item__button');
//   const imagem = gameClicado.querySelector('.dashboard__item__img');

//   if(imagem.classList.contains('dashboard__item__img--rented')) {
//     imagem.classList.remove('dashboard__item__img--rented');
//     botao.classList.remove('dashboard__item__button--return');
//     botao.textContent = 'Alugar'
//   } else {
//     imagem.classList.add('dashboard__item__img--rented');
//     botao.classList.add('dashboard__item__button--return');
//     botao.textContent = 'Devolver'
//   }
// }