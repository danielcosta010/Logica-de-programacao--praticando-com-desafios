const nomeAmigo = document.getElementById('nome-amigo');
const amigos = document.getElementById('lista-amigos');
const sorteio = document.getElementById('lista-sorteio');


function adicionar() {
  if (nomeAmigo.value.trim() !== '') {
    amigos.textContent += amigos.textContent ? `, ${nomeAmigo.value.trim()}` : nomeAmigo.value.trim();
    nomeAmigo.value = '';
  } else {
    alert('Insira o nome do amigo!');
  }
}

function sortear() {
  //Método split() transforma a string em um array de strings separadas no operador indicado(no caso a virgula)
  //Método map() executa a função callBack em cada item do array
  //Métod trim() remove espaços em branco de ambos os lados da string, por ter usado o map() remove de cada string so array
  const nomes = amigos.textContent.split(',').map(nome => nome.trim());
  let sorteado;
  
  if(nomes.length < 3) {
    alert('Digite ao menos 3 nomes')
    return
  }
  
  do {
    sorteado = embaralhar(nomes.slice());
    console.log(sorteado[0]);

  } while (!valido(nomes, sorteado));

  sorteio.innerHTML = nomes.map((nome, i) => `${nome} ==> ${sorteado[i]}`).join('<br>');
}

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function valido(nomes, sorteio) {
  return nomes.every((nome, i) => nome !== sorteio[i]);
}

function reiniciar() {
  nomeAmigo.value = '';
  amigos.textContent = '';
  sorteio.textContent = '';
}

