alert("Boas vindas ao jogo do número secreto");
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
let tentativas = 1; // Inicializa o contador de tentativas com 1

// enquanto chute não for igual ao número secreto
while(chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
// se chute for igual ao número secreto
    if(chute == numeroSecreto) {
        break 
    } else {
// se chute for diferente do número secreto
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`); // se chute for maior que o número secreto
        } else {
            alert(`O número secreto é maior que ${chute}`); // se chute for menor que o número secreto
        }   
            tentativas++; // Incrementa o contador de tentativas
    }
}

// Após o loop ser interrompido, exibe a mensagem de acerto
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa" // condição ? valorSeVerdadeiro : valorSeFalso;
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}`);