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

    const item = {
        'nome': nome.value,
        'quantidade': quantidade.value
    };

    if (!item.nome || !item.quantidade) {
        alert('Insira valores nos campos nome e quantidade');
        return;
    }

    criarElemento(item);
    itens.push(item);
    localStorage.setItem('itens', JSON.stringify(itens));
    
    nome.value = '';
    quantidade.value = '';

});

function criarElemento(item) {
    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const quantidadeItem = document.createElement('strong');
    quantidadeItem.textContent = item.quantidade;
    
    novoItem.appendChild(quantidadeItem);
    novoItem.innerHTML += item.nome;
    
    lista.appendChild(novoItem);
}
