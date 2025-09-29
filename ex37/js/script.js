let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let media = (nota1 + nota2 + nota3) / 3;

let conceito;
if (media >= 8) {
    conceito = "A";
} else if (media >= 7) {
    conceito = "B";
} else if (media >= 6) {
    conceito = "C";
} else if (media >= 5) {
    conceito = "D";
} else {
    conceito = "E";
}

alert("Notas: " + nota1 + ", " + nota2 + ", " + nota3 + "\n" +
    "Média: " + media.toFixed(2) + "\n" +
    "Conceito: " + conceito);