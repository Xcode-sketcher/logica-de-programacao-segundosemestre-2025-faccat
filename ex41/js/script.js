let data = prompt("Digite a data (DD/MM/AAAA):");
let partesData = data.split("/");
let dia = parseInt(partesData[0]);
let mes = parseInt(partesData[1]);
let ano = parseInt(partesData[2]);

let valida = true;

if (mes < 1 || mes > 12) {
    valida = false;
} else if (dia < 1 || dia > 31) {
    valida = false;
} else if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
    valida = false;
} else if (mes === 2) {
    let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
    if ((bissexto && dia > 29) || (!bissexto && dia > 28)) {
        valida = false;
    }
}

if (valida) {
    alert("A data " + data + " é VÁLIDA");
} else {
    alert("A data " + data + " é INVÁLIDA");
}