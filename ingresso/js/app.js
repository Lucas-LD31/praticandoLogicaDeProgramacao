let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar() {

    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (quantidade <= 0 || isNaN(quantidade)) {

        alert('Por favor, insira uma quantidade válida (número maior que zero).');

        return;

    }

    if (tipoIngresso == 'pista') {

        if (quantidade > quantidadePista) {

            alert('Ingressos esgotados para a pista!');

        } else {

            quantidadePista = quantidadePista - quantidade;
            document.getElementById('qtd-pista').textContent = quantidadePista;

            alert('Ingressos comprados para a pista!');

        }

    } else if (tipoIngresso == 'superior') {

       if (quantidade > quantidadeSuperior) {

            alert('Ingressos esgotados para as Cadeiras Superiores!');

        } else {

            quantidadeSuperior = quantidadeSuperior - quantidade;
            document.getElementById('qtd-superior').textContent = quantidadeSuperior;

            alert('Ingressos comprados para as Cadeiras Superiores!');

        }

    } else if (tipoIngresso == 'inferior') {

        if (quantidade > quantidadeInferior) {

            alert('Ingressos esgotados para as Cadeiras Inferiores!');

        } else {

            quantidadeInferior = quantidadeInferior - quantidade;
            document.getElementById('qtd-inferior').textContent = quantidadeInferior;

            alert('Ingressos comprados para as Cadeiras Inferiores!');

        }

    }

}