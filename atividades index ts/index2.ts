//1

function contemfilme(listaFilmes: string[], filmeProcurado: string): boolean {
    
    return listaFilmes.includes(filmeProcurado);
}

const filmes: string[] = ["Filme1", "Filme2", "Filme3", "Filme4"];
const filmeProcurado: string = "Filme2";

const resultado: boolean = contemfilme(filmes, filmeProcurado);

if (resultado) {
    console.log(`O filme '${filmeProcurado}' está na lista.`);
} else {
    console.log(`O filme '${filmeProcurado}' não está na lista.`);
}


//2

function adicionarLogo(jogos: string[], novoJogo: string): string[] {

    jogos.push(novoJogo);
    return jogos;
}

const jogosExistentes: string[] = ["Jogo1", "Jogo2", "Jogo3"];
const novoJogo: string = "Jogo4";

const jogosAtualizados: string[] = adicionarLogo(jogosExistentes, novoJogo);

console.log("Jogos Atuais:", jogosAtualizados);


//3

function removerLogo(jogos: string[]): string[] {
   
    jogos.pop();
    return jogos;
}

const jogosExistentes: string[] = ["Jogo1", "Jogo2", "Jogo3"];
const jogosAtualizados: string[] = removerLogo(jogosExistentes);

console.log("Jogos Atuais após Remoção:", jogosAtualizados);

//4

function filtrarNumerosPares(arrayDeNumeros) {
    
    const numerosPares = arrayDeNumeros.filter(numero => numero % 2 === 0);
    return numerosPares;
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = filtrarNumerosPares(numeros);

console.log("Números Pares:", numerosPares);


//5

function dobrarParesMenoresQueCinco(arrayDeNumeros) {
   
    const numerosDobrados = arrayDeNumeros
        .filter(numero => numero % 2 === 0 && numero < 5)
        .map(numero => numero * 2);

    return numerosDobrados;
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosDobrados = dobrarParesMenoresQueCinco(numeros);

console.log("Números Pares e Menores que Cinco, Dobrados:", numerosDobrados);



// DIA 29/01/2024

    export class Dog (
    name: string
    weight: number
)

back(): void (
    console.log("Au Au"):
)

eat (quantity: number): void (
    console.log("the dog has esten" + quantify):
)

export class oal 
name: string
weight: number 

chirp(): void (
    console.log("Ruru Ruru")
)


