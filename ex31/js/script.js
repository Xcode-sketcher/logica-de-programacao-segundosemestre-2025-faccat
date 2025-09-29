let lado1 = parseFloat(prompt("Digite o primeiro lado do triângulo:"));
let lado2 = parseFloat(prompt("Digite o segundo lado do triângulo:"));
let lado3 = parseFloat(prompt("Digite o terceiro lado do triângulo:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        alert("Os lados " + lado1 + ", " + lado2 + " e " + lado3 + " formam um triângulo EQUILÁTERO");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("Os lados " + lado1 + ", " + lado2 + " e " + lado3 + " formam um triângulo ISÓSCELES");
    } else {
        alert("Os lados " + lado1 + ", " + lado2 + " e " + lado3 + " formam um triângulo ESCALENO");
    }
} else {
    alert("Os valores " + lado1 + ", " + lado2 + " e " + lado3 + " NÃO formam um triângulo");
}