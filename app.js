let numeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
// let numeroSecreto = 8;
let tentativas = 1;

function exibirTextoNaTela(tag , texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Escolha um número entre 1 a 10");

function verificarChute(){
    let chute = document.querySelector("input").value;
    
    console.log(numeroSorteados);

    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou");
        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentiva";
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "O número é menor.");
        }else{
            exibirTextoNaTela("p", "O número é maior.")
        }
        tentativas++;

        limparCampo();
    }

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela("h1", "Jogo do número secreto");
    exibirTextoNaTela("p", "Escolha um número entre 1 a 10");
    document.getElementById("reiniciar").setAttribute("disabled", true)
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function gerarNumeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);

    if(numeroSorteados.length == numeroLimite)
        numeroSorteados = [];

    if(numeroSorteados.includes(numeroEscolhido))
        return gerarNumeroAleatorio();
    else{
        numeroSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}