let numero = parseInt(prompt("Digite um número inteiro de 1 a 999:"));

if (numero < 1 || numero > 999) {
    alert("Número fora do intervalo válido (1-999)!");
} else {
    let centenas = Math.floor(numero / 100);
    let dezenas = Math.floor((numero % 100) / 10);
    let unidades = numero % 10;

    let resultado = "";

    if (centenas > 0) {
        resultado += centenas + " centena";
        if (centenas > 1) resultado += "s";
    }

    if (dezenas > 0) {
        if (resultado !== "") resultado += ", ";
        resultado += dezenas + " dezena";
        if (dezenas > 1) resultado += "s";
    }

    if (unidades > 0) {
        if (resultado !== "") resultado += ", ";
        resultado += unidades + " unidade";
        if (unidades > 1) resultado += "s";
    }

    alert("O número " + numero + " é formado por: " + resultado);
}