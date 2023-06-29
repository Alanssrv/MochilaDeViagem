const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach(item => {
    criarElemento(item);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];

    const novoItem = {
        'nome': nome.value,
        'quantidade': quantidade.value
    };

    if (!novoItem.nome || !novoItem.quantidade) {
        alert('Insira valores nos campos nome e quantidade');
        return;
    }

    const itemExistente = itens.find(it => it.nome === novoItem.nome);

    if (itemExistente) {
        novoItem.id = itemExistente.id;
        atualizarElemento(novoItem);
        itens[itens.findIndex(el => el.id === novoItem.id)] = novoItem;
    } else {
        novoItem.id = itens[itens.length - 1] ? itens[itens.length - 1].id + 1 : 0;
        criarElemento(novoItem);
        itens.push(novoItem);
    }
    localStorage.setItem('itens', JSON.stringify(itens));
    
    nome.value = '';
    quantidade.value = '';
});

function criarElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const quantidadeItem = document.createElement('strong');
    quantidadeItem.dataset.id = item.id;
    quantidadeItem.textContent = item.quantidade;
    
    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += item.nome;

    novoItem.appendChild(botaoRemover());
    
    lista.appendChild(novoItem);
}

function atualizarElemento(item) {
    const itemLista = document.querySelector(`[data-id="${item.id}"]`);
    itemLista.innerHTML = item.quantidade;
}

function botaoRemover() {
    const elemBotao = document.createElement('button');
    elemBotao.innerHTML = 'X';

    elemBotao.addEventListener('click', function () {
        removerElemento(this.parentNode);    
    });

    return elemBotao;
}

function removerElemento(item) {
    item.remove();

    const id = item.firstChild.dataset['id'];
    itens.splice(itens.findIndex(el => el.id == id), 1);

    console.log(itens);

    localStorage.setItem('itens', JSON.stringify(itens));
}
