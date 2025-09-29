let codigo = parseInt(prompt("Digite o código do produto (1-10):"));
let quantidade = parseInt(prompt("Digite a quantidade:"));
let preco, total;

switch (codigo) {
    case 1:
        preco = 5.30;
        break;
    case 2:
        preco = 6.00;
        break;
    case 3:
        preco = 3.20;
        break;
    case 4:
        preco = 2.50;
        break;
    case 5:
        preco = 1.50;
        break;
    case 6:
        preco = 2.80;
        break;
    case 7:
        preco = 3.00;
        break;
    case 8:
        preco = 2.70;
        break;
    case 9:
        preco = 4.50;
        break;
    case 10:
        preco = 3.60;
        break;
    default:
        alert("Código inválido!");
        preco = 0;
}

if (preco > 0) {
    total = preco * quantidade;
    alert("Código: " + codigo + "\nPreço unitário: R$ " + preco.toFixed(2) +
        "\nQuantidade: " + quantidade + "\nTotal: R$ " + total.toFixed(2));
}