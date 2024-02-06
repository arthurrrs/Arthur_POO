//1

        const quantidadeBichinhos = prompt("quantos bichinhos de estimação voce tem?");

        if (quantidadeBichinhos == 0) {
            console.log("que pena! voce pode adotar um pet!");
        } else {
            const nomesBichinhos = [];
            for (let i = 0; i < quantidadeBichinhos; i++) {
                nomesBichinhos.push(prompt("qual é o nome do bichinho de estimação" + (i + 1) + "?"));
            }
            console.log(nomesBichinhos);
        }


//2

    function imprimirArrayOriginal(arrayOriginal) {
    for (const numero of arrayOriginal) {
      console.log(numero);
    }
  }
  
  
  const arrayOriginal = [1, 2, 3, 4, 5];
  imprimirArrayOriginal(arrayOriginal);
  
  function imprimirArrayOriginalDivididoPor10(arrayOriginal) {
    for (const numero of arrayOriginal) {
      console.log(numero / 10);
    }
  }
  
  const arrayOriginal = [1, 2, 3, 4, 5];
  imprimirArrayOriginalDivididoPor10(arrayOriginal);
  
  
  function criarArrayPares(arrayOriginal) {
    const arrayPares = [];
    for (const numero of arrayOriginal) {
      if (numero % 2 === 0) {
        arrayPares.push(numero);
      }
    }
    return arrayPares;
  }
  
  const arrayOriginal = [1, 2, 3, 4, 5];
  const arrayPares = criarArrayPares(arrayOriginal);
  console.log(arrayPares);
  
  
  function criarArrayStrings(arrayOriginal) {
    const arrayStrings = [];
    for (let i = 0; i < arrayOriginal.length; i++) {
      const numero = arrayOriginal[i];
      arrayStrings.push(`O elemento do índex ${i} é: ${numero}`);
    }
    return arrayStrings;
  }
  
  const arrayOriginal = [1, 2, 3, 4, 5];
  const arrayStrings = criarArrayStrings(arrayOriginal);
  console.log(arrayStrings);
  
  
  function encontrarMaiorMenor(arrayOriginal) {
    let maior = arrayOriginal[0];
    let menor = arrayOriginal[0];
    for (const numero of arrayOriginal) {
      if (numero > maior) {
        maior = numero;
      } else if (numero < menor) {
        menor = numero;
      }
    }
    return [maior, menor];
  }
  
  const arrayOriginal = [1, 2, 3, 4, 5];
  const [maior, menor] = encontrarMaiorMenor(arrayOriginal);
  console.log(`O maior número é ${maior} e o menor número é ${menor}`);
  