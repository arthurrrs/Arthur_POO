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
