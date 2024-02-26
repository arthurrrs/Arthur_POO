import { NobleHouse, Heir } from './NobleHouse';

function BattleOfTheHouses(house1: NobleHouse, soldiers1: number, house2: NobleHouse, soldiers2: number): string {

    if (soldiers1 > soldiers2) {
        return `${house1.name} venceu a batalha com ${soldiers1} soldados!`;
    } else if (soldiers2 > soldiers1) {
        return `${house2.name} venceu a batalha com ${soldiers2} soldados!`;
    } else {
        return `A batalha terminou em empate! Ambas as casas tinham ${soldiers1} soldados.`;
    }
}

const stark = new NobleHouse("Casa Stark", "Winter is Coming");
const lannister = new NobleHouse("Casa Lannister", "Hear Me Roar!");

const starkSoldiers = 1000;
const lannisterSoldiers = 1200;

console.log(BattleOfTheHouses(stark, starkSoldiers, lannister, lannisterSoldiers));
