let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));

let mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;
alert("As notas são: " + nota1 + ", " + nota2 + " e " + nota3 + "\nA média final é: " + mediaFinal.toFixed(2));