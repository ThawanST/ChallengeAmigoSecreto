// Declaração da lista de nomes
let listaDeAmigos = [];

// Adiciona um novo nome à lista
function adicionarNome() {
    let input = document.getElementById('amigo');
    let nome = input.value.trim();

    if (!validarNome(nome)) {
        return;
    }

    listaDeAmigos.push(nome);
    limparCampo('input');
    atualizarLista();
    console.log(listaDeAmigos);
}

// Valida se o nome inserido é válido e não está repetido
function validarNome(nome) {
    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return false;
    }

    if (listaDeAmigos.includes(nome)) {
        alert('Este nome já consta na lista.');
        return false;
    }

    return true;
}

// Limpa um campo específico (input ou lista)
function limparCampo(tipo) {
    if (tipo === 'input') {
        document.getElementById('amigo').value = '';
    } else if (tipo === 'lista') {
        document.getElementById('listaAmigos').innerHTML = '';
    }
}

// Atualiza a exibição da lista na tela
function atualizarLista() {
    let ul = document.getElementById('listaAmigos');
    ul.innerHTML = '';

    listaDeAmigos.forEach(nome => {
        let li = document.createElement('li');
        li.textContent = nome;
        ul.appendChild(li);
    });
}

// Realiza o sorteio do amigo secreto
function sortearAmigo() {
    limparCampo('lista');

    if (listaDeAmigos.length === 0) {
        alert('A lista de amigos está vazia!');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSecreto = `O amigo secreto sorteado é: ${listaDeAmigos[indiceSorteado]}`;
    
    document.getElementById('resultado').innerHTML = amigoSecreto;
}