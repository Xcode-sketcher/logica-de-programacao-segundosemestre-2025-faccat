let numero = parseInt(prompt("Digite um número de 1 a 12:"));

let meses = ["", "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

if (numero >= 1 && numero <= 12) {
    alert("O mês " + numero + " corresponde a: " + meses[numero]);
} else {
    alert("Número inválido! Digite um número de 1 a 12.");
}