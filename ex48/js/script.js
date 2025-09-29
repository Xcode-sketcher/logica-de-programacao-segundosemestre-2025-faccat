let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

let valores = [valor1, valor2, valor3];
valores.sort((a, b) => b - a);

alert("Valores em ordem decrescente: " + valores[0] + ", " + valores[1] + ", " + valores[2]);