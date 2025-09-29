let temperatura = parseFloat(prompt("Digite a temperatura:"));
let escala = prompt("Digite a escala (C para Celsius, F para Fahrenheit):").toUpperCase();

let resultado;

if (escala === "C") {
    resultado = (temperatura * 9 / 5) + 32;
    alert(temperatura + "°C equivale a " + resultado.toFixed(2) + "°F");
} else if (escala === "F") {
    resultado = (temperatura - 32) * 5 / 9;
    alert(temperatura + "°F equivale a " + resultado.toFixed(2) + "°C");
} else {
    alert("Escala inválida! Use C para Celsius ou F para Fahrenheit.");
}