//1
function contemfilme(listaFilmes, filmeProcurado) {
    return listaFilmes.includes(filmeProcurado);
}
var filmes = ["Filme1", "Filme2", "Filme3", "Filme4"];
var filmeProcurado = "Filme2";
var resultado = contemfilme(filmes, filmeProcurado);
if (resultado) {
    console.log("O filme '".concat(filmeProcurado, "' est\u00E1 na lista."));
}
else {
    console.log("O filme '".concat(filmeProcurado, "' n\u00E3o est\u00E1 na lista."));
}
//2
function adicionarLogo(jogos, novoJogo) {
    jogos.push(novoJogo);
    return jogos;
}
var jogosExistentes = ["Jogo1", "Jogo2", "Jogo3"];
var novoJogo = "Jogo4";
var jogosAtualizados = adicionarLogo(jogosExistentes, novoJogo);
console.log("Jogos Atuais:", jogosAtualizados);
//3
function removerLogo(jogos) {
    jogos.pop();
    return jogos;
}
var jogosExistentes = ["Jogo1", "Jogo2", "Jogo3"];
var jogosAtualizados = removerLogo(jogosExistentes);
console.log("Jogos Atuais após Remoção:", jogosAtualizados);
//4
function filtrarNumerosPares(arrayDeNumeros) {
    var numerosPares = arrayDeNumeros.filter(function (numero) { return numero % 2 === 0; });
    return numerosPares;
}
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosPares = filtrarNumerosPares(numeros);
console.log("Números Pares:", numerosPares);
//5
function dobrarParesMenoresQueCinco(arrayDeNumeros) {
    var numerosDobrados = arrayDeNumeros
        .filter(function (numero) { return numero % 2 === 0 && numero < 5; })
        .map(function (numero) { return numero * 2; });
    return numerosDobrados;
}
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numerosDobrados = dobrarParesMenoresQueCinco(numeros);
console.log("Números Pares e Menores que Cinco, Dobrados:", numerosDobrados);


