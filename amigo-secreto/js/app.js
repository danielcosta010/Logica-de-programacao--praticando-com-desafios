const nomeAmigo = document.getElementById('nome-amigo');
const amigos = document.getElementById('lista-amigos');
const sorteio = document.getElementById('lista-sorteio');
const alertaNome = document.getElementById('alerta-nome');
const alertaAmigos = document.getElementById('alerta-amigos');
const containerLista = document.querySelector('.friends__container');

function adicionar() {
  if (nomeAmigo.value.trim() !== '' && !amigos.textContent.includes(nomeAmigo.value)) {
    amigos.textContent += amigos.textContent ? `, ${nomeAmigo.value.trim()}` : nomeAmigo.value.trim();
    nomeAmigo.value = '';
  } else if(amigos.textContent.includes(nomeAmigo.value) && nomeAmigo.value.trim() !== '') {
    alertaNome.textContent = 'Nome já esta nalista';
  } else {
    nomeAmigo.classList.add('animation');
    alertaNome.textContent = 'Digite o nome do amigo';
    setTimeout(() => {
      nomeAmigo.classList.remove('animation')
    }, 500);
    nomeAmigo.addEventListener('input', () => {
      alertaNome.textContent = ''
    });
  };
}

function sortear() {
  //Método split() transforma a string em um array de strings separadas no operador indicado(no caso a virgula)
  //Método map() executa a função callBack em cada item do array
  //Métod trim() remove espaços em branco de ambos os lados da string, por ter usado o map() remove de cada string so array
  const nomes = amigos.textContent.split(',').map(nome => nome.trim());
  let sorteado;

  if(nomes.length < 3) {
    alertaAmigos.textContent = 'Digite no mínimo três amigos para o sorteio';
    containerLista.classList.add('animation');
    setTimeout(() => {
      containerLista.classList.remove('animation')
    }, 500);
    return;
  }


  do {
    sorteado = embaralhar(nomes.slice());
  } while (!valido(nomes, sorteado));

  sorteio.innerHTML = nomes.map((nome, i) => `${nome} ==> ${sorteado[i]}`).join('<br>');
  alertaAmigos.textContent = ''
}

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

//Verifica se o nome é diferente para não sortear a si mesmo
function valido(nomes, sorteio) {
  return nomes.every((nome, i) => nome !== sorteio[i]);
}

//Reinicia todo formulario
function reiniciar() {
  nomeAmigo.value = '';
  amigos.textContent = '';
  sorteio.textContent = '';
  alertaAmigos.textContent = '';
  alertaNome.textContent = ''
}


     // Solução dos instrutores

/* 

let arrayAmigos = [];

function adicionar() {
  let nomeAmigo = document.getElementById('nome-amigo');
  let listaAmigos = document.getElementById('lista-amigos');
  
  if(nomeAmigo.value == '') {
    alert('Digite um nome');
    return
  }
  
  if (arrayAmigos.includes(nomeAmigo.value)) {
    alert('Nome já adicionado!');
    return
  }
  arrayAmigos.push(nomeAmigo.value);
  
  if (listaAmigos.textContent == '') {
    listaAmigos.textContent = nomeAmigo.value;
  } else {
    listaAmigos.textContent += ', ' + nomeAmigo.value;
  }
  nomeAmigo.value = ''
}

function sortear() {
  if (arrayAmigos.length < 4) {
    alert('Adione pelo menos 4 amigos');
    return
  }

  embaralhar(arrayAmigos)
  let sorteados = document.getElementById('lista-sorteio');
  
  for (let i = 0; i < arrayAmigos.length; i++) {
    if (i == arrayAmigos.length - 1) {
      sorteados.innerHTML += `${arrayAmigos[i]} ==> ${arrayAmigos[0]} <br>`;
    } else {
      sorteados.innerHTML += `${arrayAmigos[i]} ==> ${arrayAmigos[i + 1]} <br>`;
    };
  };

};

function embaralhar(lista) {
  for (let i = lista.length; i; i--) {
    const indiceAleatorio = Math.floor(Math.random() * i);
    [lista[i - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i - 1]]
  };
};

function reiniciar() {
  arrayAmigos = [];
  document.getElementById('lista-amigos').innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML = '';
};

*/