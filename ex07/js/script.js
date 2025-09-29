let anos = parseInt(prompt("Digite a idade em anos:"));
let meses = parseInt(prompt("Digite os meses adicionais:"));
let dias = parseInt(prompt("Digite os dias adicionais:"));

let totalDias = (anos * 365) + (meses * 30) + dias;
alert("A idade em dias é: " + totalDias + " dias");