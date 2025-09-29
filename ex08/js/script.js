let totalEleitores = parseInt(prompt("Digite o número total de eleitores:"));
let votosBrancos = parseInt(prompt("Digite o número de votos brancos:"));
let votosNulos = parseInt(prompt("Digite o número de votos nulos:"));
let votosValidos = parseInt(prompt("Digite o número de votos válidos:"));

let percentualBrancos = (votosBrancos * 100) / totalEleitores;
let percentualNulos = (votosNulos * 100) / totalEleitores;
let percentualValidos = (votosValidos * 100) / totalEleitores;

alert("Percentuais:\n" +
    "Votos brancos: " + percentualBrancos.toFixed(2) + "%\n" +
    "Votos nulos: " + percentualNulos.toFixed(2) + "%\n" +
    "Votos válidos: " + percentualValidos.toFixed(2) + "%");