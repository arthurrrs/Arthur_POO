export interface HouseRules {
    lema: string;
    sede: string;
    palavraDeHonra: string;
    cores: string[];
    religiao: string;
  }

  export class Stark extends NobleHouse implements HouseRules {
    constructor(nome: string) {
      super(nome, "Winter is Coming");
      this.lema = "Winter is Coming";
      this.sede = "Winterfell";
      this.palavraDeHonra = "Winterfell sempre será sua casa";
      this.cores = ["cinza", "branco"];
      this.religiao = "Antiga Fé dos Sete";
    }
  }
  
  export class Lannister extends NobleHouse implements HouseRules {
    constructor(nome: string) {
      super(nome, "Hear Me Roar!");
      this.lema = "Hear Me Roar!";
      this.sede = "Casterly Rock";
      this.palavraDeHonra = "Um Lannister sempre paga suas dívidas";
      this.cores = ["vermelho", "ouro"];
      this.religiao = "Fé dos Sete";
    }
  }
  
  export class Baratheon extends NobleHouse implements HouseRules {
    constructor(nome: string) {
      super(nome, "Ours is the Fury");
      this.lema = "Ours is the Fury";
      this.sede = "Storm's End";
      this.palavraDeHonra = "A fúria da justiça";
      this.cores = ["preto", "amarelo"];
      this.religiao = "Fé dos Sete";
    }
  }
  
  export class Targaryen extends NobleHouse implements HouseRules {
    constructor(nome: string) {
      super(nome, "Fire and Blood");
      this.lema = "Fire and Blood";
      this.sede = "Dragonstone";
      this.palavraDeHonra = "Dracarys";
      this.cores = ["vermelho", "preto"];
      this.religiao = "Fé dos Sete";
    }
  }
  
  export class Greyjoy extends NobleHouse implements HouseRules {
    constructor(nome: string) {
      super(nome, "We Do Not Sow");
      this.lema = "We Do Not Sow";
      this.sede = "Pyke";
      this.palavraDeHonra = "What is dead may never die";
      this.cores = ["cinza", "verde"];
      this.religiao = "Deus Afogado";
    }
  }

  export abstract class NobleHouse {
    protected herdeiros: Heir[] = [];
  
    constructor(public nome: string, public lema: string) {}
  
    adicionarHerdeiro(herdeiro: Heir) {
      this.herdeiros.push(herdeiro);
    }
  
    imprimirInformacoes() {
      console.log(Nome da Casa: ${this.nome});
      console.log(Lema: ${this.lema});
      console.log(Herdeiros:);
      for (const herdeiro of this.herdeiros) {
        console.log(` - ${herdeiro.nome}`);
      }
    }
  }

const stark = new Stark("Casa Stark");
const herdeiro1 = new Heir("Arya Stark", 18);
const herdeiro2 = new Heir("Sansa Stark", 20);

stark.adicionarHerdeiro(herdeiro1);
stark.adicionarHerdeiro(herdeiro2);

stark.imprimirInformacoes();

const lannister = new Lannister("Casa Lannister");
const herdeiro3 = new Heir("Jaime Lannister", 30);
const herdeiro4 = new Heir("Cersei Lannister", 32);

lannister.adicionarHerdeiro(herdeiro3);
lannister.adicionarHerdeiro(herdeiro4);

lannister.imprimirInformacoes();