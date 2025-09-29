let salarioAtual = parseFloat(prompt("Digite o salário mensal atual:"));
let percentualReajuste = parseFloat(prompt("Digite o percentual de reajuste:"));

let valorReajuste = (salarioAtual * percentualReajuste) / 100;
let novoSalario = salarioAtual + valorReajuste;

alert("Salário atual: R$ " + salarioAtual.toFixed(2) + "\n" +
    "Percentual de reajuste: " + percentualReajuste + "%\n" +
    "Valor do reajuste: R$ " + valorReajuste.toFixed(2) + "\n" +
    "Novo salário: R$ " + novoSalario.toFixed(2));