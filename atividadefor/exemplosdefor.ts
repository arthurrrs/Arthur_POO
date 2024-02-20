for (let i:string = "a"; i!= "abababa"; i+= "ba"){
    console.log(i); //imprime a, aba, acaba e abababa
}

const meuArray:Array<string> = ["a","b","c","d","e"];

for (const letra in meuArray) {
    console.log(meuArray[letra]); //passa por todas as posições 
}