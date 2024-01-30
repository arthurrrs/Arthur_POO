//string
let myName:string = "Arthur"

//Boolean
let isOk:boolean = true

//Number
let mtAge:number = 19

//array forma 1
let array: Array<number> = [1,2,3]
let listaDeCompras: Array<string> = ["maça", "pipoca", "doce"]

//array forma 2
let meuArray: number [] = [1,2,3]
let esportes: string[] = ["futebol", "basquete", "volei"]

//objeto
let pessoa: {name:string,age:number} = {
    name: "Arthur", 
    age: 29
} 

function sum(a: number,b:number): number {
    return a + b
}

console.log(sum(5,6))

function sayHello (name?:string):void {
    console.log("Hello,", "Arthur" || "world")
}

sayHello("Arthur")

function applyDiscount (price:number,discount:number = 0.05): number {
    return price + (1 - discount)
}

console.log(applyDiscount(5))
console.log(applyDiscount(5,1))




const myName2:string = "Arthur"
const mySurname:string = "Rodrigues"
const idade: number = 19

console.log("Olá!","Meu nome é", myName, mySurname, "e eu tenho" , idade, "anos")



const got: string = "Game Of Thrones"
const temporadaDeGot: = 8 

console.log(typeof got)
console.log(typeof 8)


const myNumberString: string = "23"
const myNumber: number = Number(myNumberString)

console.log(typeof myNumber)
const sum:number = myNumber + 5 

console.log(sum)

const numberToString:string = myNumber.toString()
console.log(typeof numberToString)

//Atividade 

//1 - o que sera impresso 
let j:number = 10
let i:number = 10

console.log(j)
i = 5
console.log(j, i) //vai imprimir 10 e depois 5 ou //vai somar

//2 - o que sera impresso

let a:number = 10
let b:number = 20 
let c = a 
b = c
a = c

console.log(a, b, c) //vai inverter os valores 


//3 Susponha que temos duas variaveis a e b, cada um com valor  inicial
// agora, queremos trocar os valores delas, de forma que a passe a ter o valor de b e b passe a ter o valor de a
// ou seja, no caso desse exemplo, a passaria a ser 25 e b passaria  a ser 10

let e = 10;
let p = 25;

let aux = e;

e = p;

b = aux;

console.log(e, p); 




let frutas:string[] = ["maçã","banana", "maracuja"]
let n1:number = [1,2,3]



//acessando elementos no array

console.log(frutas{0}); //saida; maça
console.log(frutas{1}); //saida: banana

//adicionando elementos no array

frutas.push("abacaxi");
console.log(frutas); //saida ["maçã", "banana", "marucuja", "abacaxi"]

//revendo o ultimo elemento no array

frutas.pop()
console.log(frutas) //saida ["maçã", "banana", "maracuja"]


//Iterando sobre um array

for (let i = 0; 1 < frutas.lengeth; i++) {
    console.log (frutas{i})
}

//includes
//verifica se algo existe dentro do array

const seriesBoas:string[] = ["breaking bad", "brookyln nine-ni"]
seriesBoas.includes("breaking bad") // true
seriesBoas.includes("game of throness") // false

//splice
//o metodo splice(i,n) remove n elementos a partir da posição i do array

const letras:string[ = "A", "B", "C",]
letras.splice(2,1)

//arrays com diferesnte tipos de dados

let mix:(string | number) [] = ["maça", 1, "banana", 10]
let mix2:(string | number | boolean) [] = ["maça", 5, true, 10, false, 10, false, "banana"]

//map função que percorre um array e cria um novo, aplicando uma modificação

let numero: number[] = [1,2,3,4,5]

let dobrados:number[] = numeros.map(numero => numero * 2)
//saida ["2,4,5,6,8,10"]

let frutas2:string[] = ["maçã", "pera", "morango"]

let frutasComPrefixo: string[] = frutas.map(frutas => fruta: $(frutas))
//saida ["fruta: maçã", fruta", pera", "fruta: morango"]

let numeros2: string[] = ["1", "2", "3"]

let numerosConvertidos: number[] = numeros2.map(numero => number:(numero))
//saida: [1,2,3]

//filter metodo que cria um novo array contendo apenas os elemetos que sastifazem uma determinada condição

let numeros3: number[] = [1,2,3,4,5]
let numeroMenores:number[] = numeros3.filter(numero => numero < 3)
//saída: [1,2]

//reduce metodo usado para reduzir o array a um unico valor

let numero4: number[] = [1,2,3,4,5]

let soma: number = numero4.reduce((acumalador,numero) => {
    return acumulador + numero;
},0)


