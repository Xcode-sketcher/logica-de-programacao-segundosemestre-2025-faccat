let horasTrabalhadasMes = parseFloat(prompt("Digite o número de horas trabalhadas no mês:"));
let valorHoraNormal = parseFloat(prompt("Digite o valor da hora normal:"));

let horasExtras = horasTrabalhadasMes > 40 ? horasTrabalhadasMes - 40 : 0;
let horasNormais = horasTrabalhadasMes > 40 ? 40 : horasTrabalhadasMes;
let valorHoraExtra = valorHoraNormal * 1.5;
let salarioTotal = (horasNormais * valorHoraNormal) + (horasExtras * valorHoraExtra);

alert("Horas trabalhadas: " + horasTrabalhadasMes + "\n" +
    "Horas normais: " + horasNormais + "\n" +
    "Horas extras: " + horasExtras + "\n" +
    "Valor hora normal: R$ " + valorHoraNormal.toFixed(2) + "\n" +
    "Valor hora extra: R$ " + valorHoraExtra.toFixed(2) + "\n" +
    "Salário total: R$ " + salarioTotal.toFixed(2));