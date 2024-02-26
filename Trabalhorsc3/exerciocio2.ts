interface HouseRules {

    displayMotto(): void;
    displaySigil(): void;
    displayLands(): void;
}

abstract class NobleHouse implements HouseRules {

    protected name: string;
    protected motto: string;
    protected heirs: string[];

    constructor(name: string, motto: string) {
        this.name = name;
        this.motto = motto;
        this.heirs = [];
    }

    addHeir(heir: string): void {
        this.heirs.push(heir);
    }

    printHouseInfo(): void {
        console.log("Nome da Casa:", this.name);
        console.log("Lema da Casa:", this.motto);
        console.log("Herdeiros:");
        this.heirs.forEach(heir => {
            console.log("-", heir);
        });
    }

    abstract displayMotto(): void;
    abstract displaySigil(): void;
    abstract displayLands(): void;
}

class CasaStark extends NobleHouse {

    constructor() {
        super("Casa Stark", "Winter is Coming");
    }

    displayMotto(): void {
        console.log("Lema da Casa Stark:", this.motto);
    }

    displaySigil(): void {
        console.log("Brasão da Casa Stark: Lobo");
    }

    displayLands(): void {
        console.log("Terras da Casa Stark: O Norte");
    }
}


class CasaLannister extends NobleHouse {
   
    constructor() {
        super("Casa Lannister", "Hear Me Roar! (or) A Lannister Always Pays His Debts");
    }

    displayMotto(): void {
        console.log("Lema da Casa Lannister:", this.motto);
    }

    displaySigil(): void {
        console.log("Brasão da Casa Lannister: Leão");
    }

    displayLands(): void {
        console.log("Terras da Casa Lannister: As Terras Ocidentais");
    }
}

const stark = new CasaStark();
stark.addHeir("Jon Snow");
stark.addHeir("Sansa Stark");
stark.printHouseInfo();
stark.displayMotto();
stark.displaySigil();
stark.displayLands();
