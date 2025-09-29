let salarioFixo = parseFloat(prompt("Digite o salário fixo:"));
let valorVendas = parseFloat(prompt("Digite o valor das vendas efetuadas:"));

let comissao;

if (valorVendas <= 1500) {
    comissao = valorVendas * 0.03;
} else {
    comissao = (1500 * 0.03) + ((valorVendas - 1500) * 0.05);
}

let salarioTotal = salarioFixo + comissao;

alert("Salário fixo: R$ " + salarioFixo.toFixed(2) + "\n" +
    "Valor das vendas: R$ " + valorVendas.toFixed(2) + "\n" +
    "Comissão: R$ " + comissao.toFixed(2) + "\n" +
    "Salário total: R$ " + salarioTotal.toFixed(2));