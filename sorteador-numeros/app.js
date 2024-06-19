// document.addEventListener('DOMContentLoaded', () => {
//   const quantidadeNumeros = document.getElementById('quantidade');
//   const numeroInicial = document.getElementById('de');
//   const numeroFinal = document.getElementById('ate');
//   const resultado = document.getElementById('resultado');
//   const btnSortear = document.getElementById('btn-sortear');
//   const btnReiniciar = document.getElementById('btn-reiniciar');

//   window.sortear = function() {
//     const quantidade = parseInt(quantidadeNumeros.value);
//     const inicial = parseInt(numeroInicial.value);
//     const final = parseInt(numeroFinal.value);

//     // Verifica se a quantidade de números é maior que o intervalo
//     if(quantidade > (final - inicial + 1)) {
//       resultado.innerHTML = `<label class="container__alerta">Quantidade de numeros deve ser menor ou           igual                ao         intervalo entre numeros inicial e final.</label>`;
//       quantidadeNumeros.classList.add('border__red')
//       setTimeout(() => {
//         quantidadeNumeros.classList.remove('border__red')
//       }, 400)
//       return
//     }

//     toggleButton(btnSortear, false, 'container__botao', 'container__botao-desabilitado');

//     const sorteados = [];

//     while (sorteados.length < quantidade) {
//       const numero = gerarNumeroAleatorio(inicial, final);
//       if (!sorteados.includes(numero)) {
//         sorteados.push(numero);
//       }
//     }

//     resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;
//     toggleButton(btnReiniciar, true, 'container__botao', 'container__botao-desabilitado');
//     quantidadeNumeros.classList.remove('border__red')
//   }

//   function gerarNumeroAleatorio(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

//   function toggleButton(button, enable, enableClass, disableClass) {
//     if (enable) {
//       if (enableClass) button.classList.add(enableClass);
//       if (disableClass) button.classList.remove(disableClass);
//       button.removeAttribute('disabled');
//     } else {
//       if (disableClass) button.classList.add(disableClass);
//       if (enableClass) button.classList.remove(enableClass);
//       button.setAttribute('disabled', true);
//     }
//   }

//   function desabilitarBotaoSortear() {
//     const inputs = [numeroInicial, numeroFinal, quantidadeNumeros];
//     inputs.forEach(input => input.addEventListener('input', validarCampos));
//     validarCampos();
//   }

//   function validarCampos() {
//     const isValid = [numeroInicial.value, numeroFinal.value, quantidadeNumeros.value].every(value => value.trim() !== '');
//     toggleButton(btnSortear, isValid, 'container__botao', 'container__botao-desabilitado');
//   }

//   window.reiniciar = function() {
//     quantidadeNumeros.value = '';
//     numeroInicial.value = '';
//     numeroFinal.value = '';
//     resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: Nenhum número sorteado ainda</label>`;
//     toggleButton(btnSortear, false, 'container__botao', 'container__botao-desabilitado');
//     toggleButton(btnReiniciar, false, 'container__botao', 'container__botao-desabilitado');
//   }

//   desabilitarBotaoSortear();
// });



let quantidadeNumeros = document.getElementById('quantidade');
let numeroInicial = document.getElementById('de');
let numeroFinal = document.getElementById('ate');
let resultado = document.getElementById('resultado');


function sortear() {
  let quantidadeNumerosInteiros = parseInt(quantidadeNumeros.value);
  let numeroInicialInteiro = parseInt(numeroInicial.value);
  let numeroFinalInteiro = parseInt(numeroFinal.value);
  let sorteados = [];
  let numero;

  if (quantidadeNumerosInteiros > (numeroFinalInteiro - numeroInicialInteiro + 1)) {
    resultado.innerHTML = `<label class="container__alerta">Quantidade de números deve ser menor ou igual ao         intervalo entre números inicial e final.</label>`
    quantidadeNumeros.classList.add('border__red')

    setTimeout(() => {
      quantidadeNumeros.classList.remove('border__red')
    }, 800)
    return
  }

  while (sorteados.length < quantidadeNumerosInteiros) {
    numero = gerarNumeroAleatorio(numeroInicialInteiro, numeroFinalInteiro)
    if (!sorteados.includes(numero)) {
      sorteados.push(numero)
    }
  }
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
  document.getElementById('btn-reiniciar').classList.remove('container__botao-desabilitado')
  document.getElementById('btn-reiniciar').classList.add('container__botao')
  document.getElementById('btn-reiniciar').removeAttribute('disabled')
}

function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function desabilitarBotaoSortear() {
  let botaoSortear = document.getElementById('btn-sortear');
  let inputs = [numeroInicial, numeroFinal, quantidadeNumeros];
  inputs.forEach(input => input.addEventListener('input', function () {
    if ([numeroInicial.value, numeroFinal.value, quantidadeNumeros.value].every(value => value.trim() !== '')) {
      botaoSortear.removeAttribute('disabled');
    } else {
      botaoSortear.setAttribute('disabled', true);
    }
  }))
}
function reiniciar() {
  let reiniciar = document.getElementById('btn-reiniciar')
  quantidadeNumeros.value = '';
  numeroInicial.value = '';
  numeroFinal.value = '';
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: Nenhum número sorteado ainda</label>`;
  document.getElementById('btn-sortear').setAttribute('disabled', true)
  reiniciar.classList.add('container__botao-desabilitado')
  reiniciar.setAttribute('disabled', true)
}

document.addEventListener('DOMContentLoaded', desabilitarBotaoSortear);