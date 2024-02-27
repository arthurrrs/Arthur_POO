var calcularMedia = function (aluno) {
    var notas = Object.values(aluno.notas);
    var somaNotas = notas.reduce(function (soma, nota) { return soma + nota; }, 0);
    return somaNotas / notas.length;
};
var aluno = {
    nome: "João Silva",
    notas: {
        Matemática: 8,
        Português: 7,
        História: 9,
    },
};
var media = calcularMedia(aluno);
console.log("A m\u00E9dia do aluno ".concat(aluno.nome, " \u00E9: ").concat(media));
