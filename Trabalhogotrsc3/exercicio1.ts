interface HouseHeir {
    name: string;
    age: number;
    positionInSuccession: number;
}

class Heir implements HouseHeir {
    constructor(public name: string, public age: number, public positionInSuccession: number) {}
}

class NobleHouse {
    constructor(public name: string, public motto: string) {}
}

const stark = new NobleHouse("Casa Stark", "Winter is Coming");
const jonSnow = new Heir("Jon Snow", 25, 1);
const sansaStark = new Heir("Sansa Stark", 23, 2);
console.log(stark);
console.log(jonSnow);
console.log(sansaStark);
