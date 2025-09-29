let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));

let maior;

if (valor1 >= valor2 && valor1 >= valor3) {
    maior = valor1;
} else if (valor2 >= valor1 && valor2 >= valor3) {
    maior = valor2;
} else {
    maior = valor3;
}

alert("Os valores são: " + valor1 + ", " + valor2 + ", " + valor3 + "\nO maior valor é: " + maior);