      // Solução 1 sem o modal

// let tipoIngresso = document.getElementById('tipo-ingresso');
// let pista = document.getElementById('qtd-pista');
// let cadeiraSuperior = document.getElementById('qtd-superior');
// let cadeiraInferior = document.getElementById('qtd-inferior');
// let quantidade = document.getElementById('qtd')
// let botao = document.getElementById('botao');
// let alerta = document.getElementById('alerta')

// let qtdCadeiraInferior = 400; // Defina a variável fora da função para mantê-la persistente
// let qtdCadeiraSuperior = 200;
// let qtdPista = 100

// function comprar() {

//  if (isNaN(quantidade.value) || quantidade.value <= 0) {
//     quantidade.classList.add('animation')
//     alerta.textContent = 'Selecione a quantidade de ingresso desejada'
//     setTimeout(() => {
//       quantidade.classList.remove('animation')
//     }, 500)
//     quantidade.addEventListener('input', () => {
//       alerta.innerHTML = ''
//     })
//     return;
//   }

//   if (tipoIngresso.value === 'inferior') {
//     if (quantidade.value <= qtdCadeiraInferior) {
//       qtdCadeiraInferior -= quantidade.value;
//       cadeiraInferior.innerHTML = `${qtdCadeiraInferior}`;
//     } else {
//       alert(`Restam somente ${qtdCadeiraInferior} ingressos`);
//     }
//   } else if (tipoIngresso.value === 'superior') {
//     if (quantidade.value <= qtdCadeiraSuperior) {
//       qtdCadeiraSuperior -= quantidade.value;
//       cadeiraSuperior.innerHTML = `${qtdCadeiraSuperior}`;
//     } else {
//       alert(`Restam somente ${qtdCadeiraSuperior} ingressos`);
//     }
//   } else if (tipoIngresso.value === 'pista') {
//     if (quantidade.value <= qtdPista) {
//       qtdPista -= quantidade.value;
//       pista.innerHTML = `${qtdPista}`;
//     } else {
//       alert(`Restam somente ${qtdPista} ingressos`);
//     }
//   } else {
//     alert('Tipo de ingresso inválido!');
//   }

//   // Limpa o campo de quantidade após a compra
//   quantidade.value = '';
//   }


// botao.addEventListener('click', comprar)


          // Solução 2 Com modal


let tipoIngresso = document.getElementById('tipo-ingresso');
let pista = document.getElementById('qtd-pista');
let cadeiraSuperior = document.getElementById('qtd-superior');
let cadeiraInferior = document.getElementById('qtd-inferior');
let quantidade = document.getElementById('qtd');
let botao = document.getElementById('botao');
let alerta = document.getElementById('alerta');

let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let mensagemModal = document.getElementById('mensagem__modal')

let qtdCadeiraInferior = 400;
let qtdCadeiraSuperior = 200;
let qtdPista = 100;

function comprar() {
  let qtd = quantidade.value;

  if (isNaN(qtd) || qtd <= 0) {
    showAlert('Selecione a quantidade de ingressos desejada');
    return;
  }

  let tipo = tipoIngresso.value;
  let estoqueAtual, elementoEstoque;

  switch (tipo) {
    case 'Cadeira inferior':
      estoqueAtual = qtdCadeiraInferior;
      elementoEstoque = cadeiraInferior;
      break;
    case 'Cadeira superior':
      estoqueAtual = qtdCadeiraSuperior;
      elementoEstoque = cadeiraSuperior;
      break;
    case 'pista':
      estoqueAtual = qtdPista;
      elementoEstoque = pista;
      break;
    default:
      alert('Tipo de ingresso inválido!');
      return;
  }

  if (qtd <= estoqueAtual) {
    if (tipo === 'Cadeira inferior') qtdCadeiraInferior -= qtd;
    if (tipo === 'Cadeira superior') qtdCadeiraSuperior -= qtd;
    if (tipo === 'pista') qtdPista -= qtd;
    abrirModal()
    mensagemModal.style.color = 'rgb(13, 194, 25)'
    mensagemModal.innerHTML = `Compra efetuada com sucesso!`
    elementoEstoque.innerHTML = `${estoqueAtual - qtd}`;
  } else if(estoqueAtual === 0) {
    abrirModal()
    mensagemModal.style.color = 'red'
    mensagemModal.textContent = `Ingressos esgotados para ${tipo}.`
  } else {
    abrirModal()
    mensagemModal.style.color = 'orange'
    mensagemModal.innerHTML = `Restam só ${estoqueAtual} ingressos na ${tipo}`;
  }

  quantidade.value = '';
}

function showAlert(message) {
  quantidade.classList.add('animation');
  alerta.textContent = message;
  setTimeout(() => {
    quantidade.classList.remove('animation');
  }, 500);
  quantidade.addEventListener('input', () => {
    alerta.innerHTML = '';
  });
}

botao.addEventListener('click', comprar);

function abrirModal() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

