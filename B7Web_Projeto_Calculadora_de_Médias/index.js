const notas = [5, 4, 7, 8, 2, 9, 7, 6, 1, 3] //lista de notas teste

function calcularmedia(notas) {
    let soma = 0

    for (let i = 0; i < notas.length; i++)
        soma += notas[i];

    return soma / notas.length
}  

media = calcularmedia(notas);
console.log (media);

function classificarmedia (media) {
    if (media <= 4) {
        return "Média: Ruim";
} else if (media <=7) {
    return "Média: Boa";
} else {                             //supondo que o limite vai até 10
    return "Média: Ótima";
}
}

console.log (classificarmedia(media));