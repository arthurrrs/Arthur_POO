class House {
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

 