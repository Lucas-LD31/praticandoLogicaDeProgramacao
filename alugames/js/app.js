let jogosAlugados = 1;

function alterarStatus(id) {

    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (imagem.classList.contains('dashboard__item__img--rented')) {

        let confirmacao = prompt('Tem certeza que deseja devolver este jogo? Digite "sim" para confirmar.');

        if (confirmacao == 'sim') {

            imagem.classList.remove('dashboard__item__img--rented');
            
        }

    } else {

        imagem.classList.add('dashboard__item__img--rented');

    }

    if (botao.classList.contains('dashboard__item__button--return')) {

            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';

    } else {

        jogosAlugados++;

        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';

    }

    
        console.log (`Número de jogos alugados: ${jogosAlugados}`);

        return 0;

}
