let precoTotalGeral = 0;
limpar();

function adicionar() {

    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let preco = quantidade * valorProduto;

    if (quantidade <= 0 || isNaN(quantidade)) {
        alert('Por favor, insira uma quantidade válida(número maior que zero).');
        return;
    }

    precoTotalGeral += preco;

    let valorTotal = document.getElementById('valor-total');

    valorTotal.textContent = `R$ ${precoTotalGeral}`;

    let listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML += `<section class="carrinho__produtos__produto">
                                    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span><br></br>
                                </section>`;

}

function limpar() {

    precoTotalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = ``;
    document.getElementById('valor-total').textContent = `R$ 0`;


}