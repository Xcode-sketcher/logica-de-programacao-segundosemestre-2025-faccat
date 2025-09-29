let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));

if (valor1 < valor2) {
    alert("Valores em ordem crescente: " + valor1 + ", " + valor2);
} else if (valor2 < valor1) {
    alert("Valores em ordem crescente: " + valor2 + ", " + valor1);
} else {
    alert("Os valores são iguais: " + valor1);
}