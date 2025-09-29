let nome = prompt("Digite o nome:");
let altura = parseFloat(prompt("Digite a altura (em metros):"));
let sexo = prompt("Digite o sexo (M ou F):").toUpperCase();

let pesoIdeal;

if (sexo === "M") {
    pesoIdeal = (72.7 * altura) - 58;
} else if (sexo === "F") {
    pesoIdeal = (62.1 * altura) - 44.7;
} else {
    alert("Sexo inválido!");
}

if (pesoIdeal) {
    alert("Nome: " + nome + "\n" +
        "Altura: " + altura + "m\n" +
        "Sexo: " + sexo + "\n" +
        "Peso ideal: " + pesoIdeal.toFixed(2) + " kg");
}