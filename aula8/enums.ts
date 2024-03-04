//1
enum DiasDaSemana {
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo,
}

console.log(DiasDaSemana.Segunda);


//2
enum Cores {
    Vermelho = "#FF000",
    Verde = "#00FF00",
    Azul = "#0000FF",
}

console.log(Cores.Verde);


//3
enum Direcoes {
    Norte,
    SUl,
    Leste,
    Oeste,
}

for(let direcao in Direcoes) {
    console.log(direcao);
}

