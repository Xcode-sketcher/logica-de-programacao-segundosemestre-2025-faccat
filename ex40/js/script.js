let altura = parseFloat(prompt("Digite a altura (em metros):"));
let peso = parseFloat(prompt("Digite o peso (em kg):"));

let imc = peso / (altura * altura);
let classificacao;

if (imc < 18.5) {
    classificacao = "Abaixo do peso";
} else if (imc < 25) {
    classificacao = "Peso normal";
} else if (imc < 30) {
    classificacao = "Sobrepeso";
} else if (imc < 35) {
    classificacao = "Obesidade grau I";
} else if (imc < 40) {
    classificacao = "Obesidade grau II";
} else {
    classificacao = "Obesidade grau III";
}

alert("Altura: " + altura + "m\nPeso: " + peso + "kg\n" +
    "IMC: " + imc.toFixed(2) + "\nClassificação: " + classificacao);