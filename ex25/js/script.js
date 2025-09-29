let numeroConta = prompt("Digite o número da conta:");
let saldo = parseFloat(prompt("Digite o saldo:"));
let debito = parseFloat(prompt("Digite o débito:"));
let credito = parseFloat(prompt("Digite o crédito:"));

let saldoAtual = saldo - debito + credito;

if (saldoAtual >= 0) {
    alert("Conta: " + numeroConta + "\n" +
        "Saldo anterior: R$ " + saldo.toFixed(2) + "\n" +
        "Débito: R$ " + debito.toFixed(2) + "\n" +
        "Crédito: R$ " + credito.toFixed(2) + "\n" +
        "Saldo atual: R$ " + saldoAtual.toFixed(2) + "\n" +
        "Saldo Positivo");
} else {
    alert("Conta: " + numeroConta + "\n" +
        "Saldo anterior: R$ " + saldo.toFixed(2) + "\n" +
        "Débito: R$ " + debito.toFixed(2) + "\n" +
        "Crédito: R$ " + credito.toFixed(2) + "\n" +
        "Saldo atual: R$ " + saldoAtual.toFixed(2) + "\n" +
        "Saldo Negativo");
}