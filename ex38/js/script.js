let numero = parseInt(prompt("Digite um número inteiro:"));

if (numero > 0) {
    if (numero % 2 === 0) {
        alert("O número " + numero + " é POSITIVO e PAR");
    } else {
        alert("O número " + numero + " é POSITIVO e ÍMPAR");
    }
} else if (numero < 0) {
    if (numero % 2 === 0) {
        alert("O número " + numero + " é NEGATIVO e PAR");
    } else {
        alert("O número " + numero + " é NEGATIVO e ÍMPAR");
    }
} else {
    alert("O número é ZERO");
}