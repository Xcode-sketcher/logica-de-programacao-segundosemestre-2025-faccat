let quantidadeAtual = parseFloat(prompt("Digite a quantidade atual em estoque:"));
let quantidadeMaxima = parseFloat(prompt("Digite a quantidade máxima em estoque:"));
let quantidadeMinima = parseFloat(prompt("Digite a quantidade mínima em estoque:"));

let quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

if (quantidadeAtual >= quantidadeMedia) {
    alert("Quantidade atual: " + quantidadeAtual + "\n" +
        "Quantidade máxima: " + quantidadeMaxima + "\n" +
        "Quantidade mínima: " + quantidadeMinima + "\n" +
        "Quantidade média: " + quantidadeMedia.toFixed(2) + "\n" +
        "Não efetuar compra");
} else {
    alert("Quantidade atual: " + quantidadeAtual + "\n" +
        "Quantidade máxima: " + quantidadeMaxima + "\n" +
        "Quantidade mínima: " + quantidadeMinima + "\n" +
        "Quantidade média: " + quantidadeMedia.toFixed(2) + "\n" +
        "Efetuar compra");
}