let numeroCarros = parseInt(prompt("Digite o número de carros vendidos:"));
let valorTotalVendas = parseFloat(prompt("Digite o valor total das vendas:"));
let salarioFixo = parseFloat(prompt("Digite o salário fixo:"));

let comissaoFixa = numeroCarros * 200;
let comissaoPercentual = valorTotalVendas * 0.05;
let salarioFinal = salarioFixo + comissaoFixa + comissaoPercentual;

alert("Número de carros vendidos: " + numeroCarros + "\n" +
    "Valor total das vendas: R$ " + valorTotalVendas.toFixed(2) + "\n" +
    "Salário fixo: R$ " + salarioFixo.toFixed(2) + "\n" +
    "Comissão fixa (R$ 200 por carro): R$ " + comissaoFixa.toFixed(2) + "\n" +
    "Comissão 5% das vendas: R$ " + comissaoPercentual.toFixed(2) + "\n" +
    "Salário final: R$ " + salarioFinal.toFixed(2));