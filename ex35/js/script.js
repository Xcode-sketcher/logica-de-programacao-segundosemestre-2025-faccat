let salario = parseFloat(prompt("Digite o salário atual:"));
let percentual;
let aumento;
let novoSalario;

if (salario <= 300) {
    percentual = 15;
} else if (salario <= 600) {
    percentual = 10;
} else if (salario <= 900) {
    percentual = 5;
} else {
    percentual = 0;
}

aumento = (salario * percentual) / 100;
novoSalario = salario + aumento;

alert("Salário atual: R$ " + salario.toFixed(2) + "\n" +
    "Percentual de aumento: " + percentual + "%\n" +
    "Valor do aumento: R$ " + aumento.toFixed(2) + "\n" +
    "Novo salário: R$ " + novoSalario.toFixed(2));