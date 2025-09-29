let horaInicio = parseInt(prompt("Digite a hora de início do jogo (apenas horas inteiras):"));
let horaFim = parseInt(prompt("Digite a hora de fim do jogo (apenas horas inteiras):"));

let duracao;

if (horaFim > horaInicio) {
    duracao = horaFim - horaInicio;
} else if (horaFim < horaInicio) {
    duracao = (24 - horaInicio) + horaFim;
} else {
    duracao = 24;
}

alert("Hora de início: " + horaInicio + "h\nHora de fim: " + horaFim + "h\nDuração do jogo: " + duracao + " horas");