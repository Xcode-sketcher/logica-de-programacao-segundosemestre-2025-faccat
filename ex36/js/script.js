let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let operacao = prompt("Digite a operação (+, -, *, /):");
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let resultado;

switch (operacao) {
    case "+":
        resultado = numero1 + numero2;
        alert(numero1 + " + " + numero2 + " = " + resultado);
        break;
    case "-":
        resultado = numero1 - numero2;
        alert(numero1 + " - " + numero2 + " = " + resultado);
        break;
    case "*":
        resultado = numero1 * numero2;
        alert(numero1 + " × " + numero2 + " = " + resultado);
        break;
    case "/":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            alert(numero1 + " ÷ " + numero2 + " = " + resultado.toFixed(2));
        } else {
            alert("Erro: Divisão por zero não é permitida!");
        }
        break;
    default:
        alert("Operação inválida! Use +, -, * ou /");
}