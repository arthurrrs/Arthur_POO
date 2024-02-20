import { NobleHouse } from "./NobleHouse";

export function battleOfTheHouses(casa1: NobleHouse, soldadosCasa1: number, casa2: NobleHouse, soldadosCasa2: number): string {
  if (soldadosCasa1 > soldadosCasa2) {
    return A casa vencedora é ${casa1.nome} com ${soldadosCasa1} soldados!;
  } else if (soldadosCasa2 > soldadosCasa1) {
    return A casa vencedora é ${casa2.nome} com ${soldadosCasa2} soldados!;
  } else {
    return "Empate! Ambas as casas possuem o mesmo número de soldados.";
  }
}

const stark = new NobleHouse("Stark");
const lannister = new NobleHouse("Lannister");

const soldadosStark = 10000;
const soldadosLannister = 8000;

const resultadoBatalha = battleOfTheHouses(stark, soldadosStark, lannister, soldadosLannister);

console.log(resultadoBatalha);