let custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));

let percentualDistribuidor = 28;
let percentualImpostos = 45;

let valorDistribuidor = (custoFabrica * percentualDistribuidor) / 100;
let valorImpostos = (custoFabrica * percentualImpostos) / 100;
let custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

alert("Custo de fábrica: R$ " + custoFabrica.toFixed(2) + "\n" +
    "Percentual do distribuidor (28%): R$ " + valorDistribuidor.toFixed(2) + "\n" +
    "Impostos (45%): R$ " + valorImpostos.toFixed(2) + "\n" +
    "Custo final ao consumidor: R$ " + custoFinal.toFixed(2));