let codigoEmpregado = prompt("Digite o código do empregado:");
let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
let anoIngresso = parseInt(prompt("Digite o ano de ingresso na empresa:"));

let anoAtual = new Date().getFullYear();
let idade = anoAtual - anoNascimento;
let tempoTrabalho = anoAtual - anoIngresso;

let condicao1 = idade >= 65;
let condicao2 = tempoTrabalho >= 30;
let condicao3 = idade >= 60 && tempoTrabalho >= 25;

if (condicao1 || condicao2 || condicao3) {
    alert("Empregado código: " + codigoEmpregado + "\n" +
        "Idade: " + idade + " anos\n" +
        "Tempo de trabalho: " + tempoTrabalho + " anos\n" +
        "Requerer aposentadoria");
} else {
    alert("Empregado código: " + codigoEmpregado + "\n" +
        "Idade: " + idade + " anos\n" +
        "Tempo de trabalho: " + tempoTrabalho + " anos\n" +
        "Não requerer");
}