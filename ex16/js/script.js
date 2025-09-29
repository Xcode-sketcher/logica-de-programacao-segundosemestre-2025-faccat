let numeroMacas = parseInt(prompt("Digite o número de maçãs compradas:"));
let custoTotal;

if (numeroMacas < 12) {
    custoTotal = numeroMacas * 1.30;
} else {
    custoTotal = numeroMacas * 1.00;
}

alert("Número de maçãs: " + numeroMacas + "\nCusto total da compra: R$ " + custoTotal.toFixed(2));