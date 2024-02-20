import { Targaryen } from "./Classes/ChildClasses/Targaryen";
import { Baratheon } from "./Classes/ChildClasses/Baratheon";
import { Stark } from "./Classes/ChildClasses/Stark";
import { Lannister } from "./Classes/ChildClasses/Lannister";
import { Greyjoy } from "./Classes/ChildClasses/Greyjoy";

const houseNumber1: Baratheon = new Baratheon(
  "Example Motto",
  "Baratheon",
  200
);
const houseNumber2: Greyjoy = new Greyjoy("Example Motto", "Greyjoy", 500);
const houseNumber3: Lannister = new Lannister(
  "Example Motto",
  "Lannister",
  300
);
const houseNumber4 = new Stark("Example Motto", "Stark", 250);
const houseNumber5 = new Targaryen("Example Motto", "Targaryen", 150);

function battleOFtheHouses(
  nobleHouse1: number,
  nobleHouse2: number,
  nobleHouse3: number,
  nobleHouse4: number,
  nobleHouse5: number
): void {
  let phantomNumber: number = 0;
  let index: number;
  let armyNumber: Array<number> = [
    nobleHouse1,
    nobleHouse2,
    nobleHouse3,
    nobleHouse4,
    nobleHouse5,
  ];

  for (let i = 1; i < armyNumber.length; i++) {
    phantomNumber = armyNumber[i];
    index = i;

    while (index > 0 && armyNumber[index - 1] > phantomNumber) {
      armyNumber[index] = armyNumber[index - 1];
      index--;
    }
    armyNumber[index] = phantomNumber;
  }
  console.log(
    `The winner of the battle has won with the army number of ${armyNumber[5]}`
  );
}

houseNumber1.addHeir("Example");
console.log(houseNumber1.checkHeritage());

battleOFtheHouses(
  houseNumber1.army,
  houseNumber2.army,
  houseNumber3.army,
  houseNumber4.army,
  houseNumber5.army
);