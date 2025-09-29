let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

if (media >= 6) {
    alert("Notas: " + nota1 + " e " + nota2 + "\nMédia: " + media.toFixed(2) + "\nAluno APROVADO");
} else {
    alert("Notas: " + nota1 + " e " + nota2 + "\nMédia: " + media.toFixed(2) + "\nAluno NÃO APROVADO");
}