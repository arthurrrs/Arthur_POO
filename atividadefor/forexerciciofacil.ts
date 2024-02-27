//1

for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  


//2 

const pessoa = {
  nome: "Arthur Rodrigues",
  idade: 20,
  profissão: "Desenvolvedor",
};

for (const propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}



//3

const frutas = ["Melancia", "Banana", "Laranja", "Bergamota", "Uva"];

frutas.forEach((fruta) => {
  console.log(fruta);
});



//4

const frase = "Olá, mundo!";

for (const caractere of frase) {
  console.log(caractere);
}
 


//5

const somaPares = (): number => {
  let soma = 0;

  for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      soma += i;
    }
  }

  return soma;
};

const resultado = somaPares();
console.log(`A soma dos números pares de 1 a 10 é: ${resultado}`);



//6

// Criando um array com 5 números
const numeros = [10, 5, 2, 7, 1];

// Definindo a variável para armazenar o menor número
let menorNumero = numeros[0];

// Loop for para iterar sobre o array
for (let i = 1; i < numeros.length; i++) {
  // Comparando o número atual com o menor número
  if (numeros[i] < menorNumero) {
    // Atualizando o menor número se encontrar um menor
    menorNumero = numeros[i];
  }
}

// Imprimindo o menor número encontrado 
console.log("O menor número é:", menorNumero);



