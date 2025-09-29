let anoAtual = parseInt(prompt("Digite o ano atual:"));
let anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));

let idade = anoAtual - anoNascimento;

if (idade >= 16) {
    alert("Idade: " + idade + " anos\nJá pode votar este ano");
} else {
    alert("Idade: " + idade + " anos\nNão pode votar este ano");
}