
let produto = document.getElementById('produto');
let quantidade = document.getElementById('quantidade');
let carrinho = document.getElementById('lista-produtos');
let valorTotal = document.getElementById('valor-total');
let carrinhoVazio = document.getElementById('carrinho__vazio'); 
let total = 0

function adicionar() {
  let descricaoProduto = produto.value.split('-');
  let precoComR$ = descricaoProduto[1];
  let nomeProduto = descricaoProduto[0];
  let preco = precoComR$.replace('R$', '');

  let resultadoFinal = quantidade.value * preco;
  total += resultadoFinal;

  if (isNaN(quantidade.value) || quantidade.value < 1) {
    const alerta = document.querySelector('.quantidade__alerta');
    quantidade.classList.add('border__red');

    setTimeout(() => {
      quantidade.classList.remove('border__red');
    }, 400);
    alerta.innerHTML = 'Por favor, escolha a quantidade.';

    quantidade.addEventListener('input', () => {
      quantidade.value !== '' ? alerta.innerHTML = '' : alerta.innerHTML = 'Por favor, escolha a quantidade.';
    });
    return;
  }
  
    carrinho.innerHTML +=
      ` 
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade.value}x</span> ${nomeProduto}<span class="texto-azul">R$${resultadoFinal}</span>
        </section>
      `;

      valorTotal.innerHTML =
        ` <span class="texto-azul" id="valor-total">R$${total}
          </span>
        `;

    carrinhoVazio.innerHTML = ''
    quantidade.value = ''
}

function limpar() {
  carrinho.innerHTML = ""
  valorTotal.innerHTML = 'R$0,00'
  total = 0
  quantidade.value = ''
  carrinhoVazio.innerHTML = `<p class="carrinho__vazio-texto">Seu carrinho está vazio </p>`
}
