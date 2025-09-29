let opcao = parseInt(prompt("Digite uma opção:\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - Divisão"));
let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

let resultado;

switch (opcao) {
    case 1:
        resultado = num1 + num2;
        alert("Resultado: " + num1 + " + " + num2 + " = " + resultado);
        break;
    case 2:
        resultado = num1 - num2;
        alert("Resultado: " + num1 + " - " + num2 + " = " + resultado);
        break;
    case 3:
        resultado = num1 * num2;
        alert("Resultado: " + num1 + " × " + num2 + " = " + resultado);
        break;
    case 4:
        if (num2 !== 0) {
            resultado = num1 / num2;
            alert("Resultado: " + num1 + " ÷ " + num2 + " = " + resultado.toFixed(2));
        } else {
            alert("Erro: Divisão por zero!");
        }
        break;
    default:
        alert("Opção inválida!");
}