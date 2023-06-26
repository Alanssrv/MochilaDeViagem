const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];

    criarElemento(nome.value, quantidade.value);

    nome.value = '';
    quantidade.value = '';
});

function criarElemento(nome, quantidade) {
    if (nome && quantidade) {
        const novoItem = document.createElement('li');
        novoItem.classList.add('item');

        const quantidadeItem = document.createElement('strong');
        quantidadeItem.textContent = quantidade;
        
        novoItem.appendChild(quantidadeItem);
        novoItem.innerHTML += nome;
        
        lista.appendChild(novoItem);

        const itemLocalStorage = {
            'nome': nome,
            'quantidade': quantidade
        };

        itens.push(itemLocalStorage);

        localStorage.setItem('itens', JSON.stringify(itens));
    } else {
        alert('Insira valores nos campos nome e quantidade');
    }
}