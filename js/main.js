const form = document.getElementById('novoItem');
const lista = document.getElementById('lista');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = e.target.elements['nome'].value;
    const quantidade = e.target.elements['quantidade'].value;

    criarElemento(nome, quantidade);
});

function criarElemento(nome, quantidade) {
    if (nome && quantidade) {
        const novoItem = document.createElement('li');
        novoItem.classList.add('item');

        const quantidadeItem = document.createElement('strong');
        quantidadeItem.textContent = quantidade;
        console.log(quantidadeItem);
        
        novoItem.appendChild(quantidadeItem);
        novoItem.innerHTML += nome;
        
        lista.appendChild(novoItem);
    } else {
        alert('Insira valores nos campos nome e quantidade');
    }
}