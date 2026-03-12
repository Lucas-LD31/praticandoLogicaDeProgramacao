function sortear() {

    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (de > ate) {

        alert("O valor 'de' deve ser menor que o valor 'até'. Por favor, reveja os valores inseridos.");

        return reiniciar();

    } else if (de == ate) {

        alert("O valor 'de' deve ser diferente do valor 'até'. Por favor, reveja os valores inseridos.");

        return reiniciar(); 
                
    }

    if (quantidade > (ate - de + 1)) {

        alert("A quantidade de números sorteados deve ser menor ou igual à diferença entre os valores 'de' e 'até'. Por favor, reveja os valores inseridos.");

        return reiniciar();

    } 

    let sorteados = [];
    let numero;

    for(let i = 0; i < quantidade; i++) {
        
        do {

            numero = numeroAleatorio(de, ate);

        } while (sorteados.includes(numero));

        sorteados.push(numero);

    }

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarStatusBotao();

}

function numeroAleatorio(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function alterarStatusBotao() {

    let resetar = document.getElementById("btn-reiniciar");

    if (resetar.classList.contains("container__botao-desabilitado")) {

        resetar.classList.remove("container__botao-desabilitado");
        resetar.classList.add("container__botao");

    } else {

        resetar.classList.remove("container__botao");
        resetar.classList.add("container__botao-desabilitado");

    }

}

function reiniciar() {

    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;

    alterarStatusBotao();

}