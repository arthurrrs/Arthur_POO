//1 

function ehPrimo(numero: number): boolean {
    if (numero <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  const numeros: number[] = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  
  for (const numero of numeros) {
    if (ehPrimo(numero)) {
      console.log(`${numero} é primo`);
    } else {
      console.log(`${numero} não é primo`);
    }
  }
  


//2

function contarVogais(texto: string): number {
  const vogais = "aeiou";
  let contagem = 0;

  for (let i = 0; i < texto.length; i++) {
    if (vogais.includes(texto.charAt(i).toLowerCase())) {
      contagem++;
    }
  }

  return contagem;
}

const frase = "Olá, mundo!";
const numeroVogais = contarVogais(frase);

console.log(`A frase "${frase}" possui ${numeroVogais} vogais.`);

//3 

function calcularMedia(notas: number[]): number {
  let soma = 0;

  for (const nota of notas) {
    soma += nota;
  }

  return soma / notas.length;
}

const notas = [10, 8, 7, 9, 5];
const media = calcularMedia(notas);

console.log(`A média das notas é: ${media}`);

 