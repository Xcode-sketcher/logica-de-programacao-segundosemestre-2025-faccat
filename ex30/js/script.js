let a = parseFloat(prompt("Digite o valor de A:"));
let b = parseFloat(prompt("Digite o valor de B:"));
let c = parseFloat(prompt("Digite o valor de C:"));

if (a === 0) {
    alert("Não é uma equação de segundo grau (A não pode ser zero)");
} else {
    let delta = (b * b) - (4 * a * c);

    if (delta < 0) {
        alert("A equação não possui raízes reais (delta < 0)");
    } else if (delta === 0) {
        let x = -b / (2 * a);
        alert("A equação possui uma raiz real: x = " + x.toFixed(2));
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("A equação possui duas raízes reais:\nx1 = " + x1.toFixed(2) + "\nx2 = " + x2.toFixed(2));
    }
}