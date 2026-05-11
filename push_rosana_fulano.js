const carrinhoDeCompras = [
    { id: 1, produto: 'Teclado Mecânico', preco: 250.00 },
    { id: 2, produto: 'Mouse Gamer', preco: 150.00 }
];

const novoItem = {
    id: 3, 
    produto: 'Monitor 144Hz', 
    preco: 1200.00 
};

carrinhoDeCompras.push(novoItem);

function calcularTotal(itens) {
    let total = 0;
    for (let i = 0; i < itens.length; i++) {
        total += itens[i].preco;
    }
    return total;
}

const totalAtualizado = calcularTotal(carrinhoDeCompras);

console.log("Itens no carrinho:", carrinhoDeCompras.length);
console.log("Resumo do Pedido:", carrinhoDeCompras);
console.log("Valor Total: R$", totalAtualizado);