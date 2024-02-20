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
 
  