//1
for (var i = 1; i <= 5; i++) {
    console.log(i);
}
//2 
var pessoa = {
    nome: "Arthur Rodrigues",
    idade: 20,
    profissão: "Desenvolvedor",
};
for (var propriedade in pessoa) {
    console.log("".concat(propriedade, ": ").concat(pessoa[propriedade]));
}
//3
var frutas = ["Melancia", "Banana", "Laranja", "Bergamota", "Uva"];
frutas.forEach(function (fruta) {
    console.log(fruta);
});
//4
var frase = "Olá, mundo!";
for (var _i = 0, frase_1 = frase; _i < frase_1.length; _i++) {
    var caractere = frase_1[_i];
    console.log(caractere);
}
//5
var somaPares = function () {
    var soma = 0;
    for (var i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            soma += i;
        }
    }
    return soma;
};
var resultado = somaPares();
console.log("A soma dos n\u00FAmeros pares de 1 a 10 \u00E9: ".concat(resultado));
//6
// Criando um array com 5 números
var numeros = [10, 5, 2, 7, 1];
// Definindo a variável para armazenar o menor número
var menorNumero = numeros[0];
// Loop for para iterar sobre o array
for (var i = 1; i < numeros.length; i++) {
    // Comparando o número atual com o menor número
    if (numeros[i] < menorNumero) {
        // Atualizando o menor número se encontrar um menor
        menorNumero = numeros[i];
    }
}
// Imprimindo o menor número encontrado
console.log("O menor número é:", menorNumero);
