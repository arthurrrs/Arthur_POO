function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (var i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
var numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
    var numero = numeros_1[_i];
    if (ehPrimo(numero)) {
        console.log("".concat(numero, " \u00E9 primo"));
    }
    else {
        console.log("".concat(numero, " n\u00E3o \u00E9 primo"));
    }
}
//2
function contarVogais(texto) {
    var vogais = "aeiou";
    var contagem = 0;
    for (var i = 0; i < texto.length; i++) {
        if (vogais.includes(texto.charAt(i).toLowerCase())) {
            contagem++;
        }
    }
    return contagem;
}
var frase = "Olá, mundo!";
var numeroVogais = contarVogais(frase);
console.log("A frase \"".concat(frase, "\" possui ").concat(numeroVogais, " vogais."));
//3 
function calcularMedia(notas) {
    var soma = 0;
    for (var _i = 0, notas_1 = notas; _i < notas_1.length; _i++) {
        var nota = notas_1[_i];
        soma += nota;
    }
    return soma / notas.length;
}
var notas = [10, 8, 7, 9, 5];
var media = calcularMedia(notas);
console.log("A m\u00E9dia das notas \u00E9: ".concat(media));
