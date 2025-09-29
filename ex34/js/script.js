let idade = parseInt(prompt("Digite a idade da pessoa:"));

if (idade < 16) {
    alert("Idade: " + idade + " anos - NÃO ELEITOR");
} else if (idade >= 16 && idade < 18) {
    alert("Idade: " + idade + " anos - ELEITOR FACULTATIVO");
} else if (idade >= 18 && idade <= 65) {
    alert("Idade: " + idade + " anos - ELEITOR OBRIGATÓRIO");
} else {
    alert("Idade: " + idade + " anos - ELEITOR FACULTATIVO");
}