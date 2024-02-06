//2
var arrayDeJogos = [
  {
      nome: "FIFA 23",
      plataforma: "PS5",
  },
  {
      nome: "Call of Duty: Modern Warfare II",
      plataforma: "Xbox Series X/S",
  },
];
var novoJogo = {
  nome: "Elden Ring",
  plataforma: "PC",
};
var arrayAtualizado = adicionarLogo(arrayDeJogos, novoJogo);
console.log(arrayAtualizado);


//1 crie uma função chamada contemfilme que recebe um array de filmes e um filme com parametros. A função deve retornar "true" se o filme estiver oresente no array e "false" caso contrario

//2 crie uma função chamada "adicionar logo" que recebe um array com jogos e um novo jogo, A função  deve adicionar o noov jogo ao final de array e deve retornar o array atualizado

//3 crie uma funão chamada "remover logo" que remove o ultimp jogo adicionado retorne o array atualizado 

//4 crie uma função que recebe um array de numeros como parametro, a função deve retornar um novo array, apenas com os numeros pares

//5 crie uma função chamada dobrarParesMenoresQueCinco que recebe um array de numeros, seleciona apenas os numeros pares e menores que cinco, e dobre cada um desses numeros


//2
var arrayDeFilmes = [
  {
      titulo: "O Poderoso Chefão",
      diretor: "Francis Ford Coppola",
  },
  {
      titulo: "O Senhor dos Anéis: A Sociedade do Anel",
      diretor: "Peter Jackson",
  },
];
var Filme = {
  titulo: "O Poderoso Chefão",
  diretor: "Francis Ford Coppola",
};
var resultado = contemFilme(arrayDeFilmes, filme);
console.log(resultado); // true

//4

const arrayDeNumeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayDePares: number[] = filtrarPares(arrayDeNumeros);

console.log(arrayDePares);

//5 

function dobrarParesMenoresQueCinco(arrayDeNumeros: number[]): number[] {
  return arrayDeNumeros.reduce((acumulado: number[], numero: number) => {
    if (numero % 2 === 0 && numero < 5) {
      acumulado.push(numero * 2);
    }

    return acumulado;
  }, []);
}



const cachorro = new Mamifero("Rex", 5, "Marrom");
const papagaio = new Ave("Loro", 2, 1.2);

console.log(`Nome do Cachorro: ${cachorro.nome}`);
console.log(`Idade do Cachorro: ${cachorro.idade}`);
console.log(`Pelagem do Cachorro: ${cachorro.pelagem}`);
console.log(`Som do Cachorro: ${cachorro.emitSound()}`);
console.log(`Cachorro amamentando: ${cachorro.breastfeed()}`);

console.log(`Nome do Papagaio: ${papagaio.nome}`);
console.log(`Idade do Papagaio: ${papagaio.idade}`);
console.log(`Envergadura do Papagaio: ${papagaio.envergadura}`);
console.log(`Som do Papagaio: ${papagaio.emitSound()}`);
console.log(`Papagaio voando: ${papagaio.fly()}`);
