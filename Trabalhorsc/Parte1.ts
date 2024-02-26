class NobleHouse {
    nome: string;
    lema: string;
  
    constructor(nome: string, lema: string) {
      this.nome = nome;
      this.lema = lema;
    }
  
    toString(): string {
      return `Casa Nobre: ${this.nome} - Lema: ${this.lema}`;
    }
  }

  interface HouseHeir {
    nome: string;
    idade: number;
    posicaoSucessao: number;
  
  }

  class Heir implements HouseHeir {
    nome: string;
    idade: number;
    posicaoSucessao: number;
  
    constructor(nome: string, idade: number, posicaoSucessao: number) {
      this.nome = nome;
      this.idade = idade;
      this.posicaoSucessao = posicaoSucessao;
    }
  
    getNome(): string {
      return this.nome;
    }
  
    getIdade(): number {
      return this.idade;
    }
  
    getPosicaoSucessao(): number {
      return this.posicaoSucessao;
    }
  
    toString(): string {
      return `Herdeiro(a): ${this.nome} - Idade: ${this.idade} - Posição na Sucessão: ${this.posicaoSucessao}`;
    }
  }

  const casaStark = new NobleHouse("Stark", "Winter is Coming");

const herdeiroStark = new Heir("Arya Stark", 17, 1);

console.log(casaStark.toString());
console.log(herdeiroStark.toString());

