//string
var myName = "Arthur";
//Boolean
var isOk = true;
//Number
var mtAge = 19;
//array forma 1
var array = [1, 2, 3];
var listaDeCompras = ["maça", "pipoca", "doce"];
//array forma 2
var meuArray = [1, 2, 3];
var esportes = ["futebol", "basquete", "volei"];
//objeto
var pessoa = {
    name: "Arthur",
    age: 29
};
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 6));
function sayHello(name) {
    console.log("Hello,", "Arthur" || "world");
}
sayHello("Arthur");
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price + (1 - discount);
}
console.log(applyDiscount(5));
console.log(applyDiscount(5, 1));
var myName2 = "Arthur";
var mySurname = "Rodrigues";
var idade = 19;
console.log("Olá!", "Meu nome é", myName, mySurname, "e eu tenho", idade, "anos");
var got = "Game Of Thrones";
var temporadaDeGot = 8;
console.log(typeof Game, Of, Thrones);
console.log(typeof 8);
var myNumberString = "23";
var myNumber = Number(myNumberString);
console.log(typeof myNumber);
var sum = myNumber + 5;
console.log(sum);
var numberToString = myNumber.toString();
console.log(typeof numberToString);
//Atividade 
//1 - o que sera impresso 
var j = 10;
var i = 10;
console.log(j);
i = 5;
console.log(j, i); //vai imprimir 10 e depois 5 ou //vai somar
//2 - o que sera impresso
var a = 10;
var b = 20;
var c = a;
b = c;
a = c;
console.log(a, b, c); //vai inverter os valores 
//3 Susponha que temos duas variaveis a e b, cada um com valor  inicial
// agora, queremos trocar os valores delas, de forma que a passe a ter o valor de b e b passe a ter o valor de a
// ou seja, no caso desse exemplo, a passaria a ser 25 e b passaria  a ser 10
var e = 10;
var p = 25;
var aux = e;
e = p;
b = aux;
console.log(e, p);
