export class Guerreiro {
    private name: string;
    private tipo: string;
    private forca: number;
    private saude: number;
  
    constructor(name: string, tipo: string) {
      this.name = name;
      this.tipo = tipo;
      this.forca = 10;
      this.saude = 100;
    }
  
    atacar(monstro: Monstro): void {
      monstro.saude -= this.forca;
      console.log(`${this.name} atacou ${monstro.name} e causou ${this.forca} de dano!`);
    }
  
    receberDano(dano: number): void {
      this.saude -= dano;
      console.log(`${this.name} recebeu ${dano} de dano!`);
    }
  
    estaVivo(): boolean {
      return this.saude > 0;
    }
  }
  
  
  export class Monstro {
    name: string;
    forca: number;
    saude: number;
  
    constructor(nome: string) {
      this.name = nome;
      this.forca = 50;
      this.saude = 10;
    }
  
    getName() {
      return this.name
    }

    atacar(guerreiro: Guerreiro): void {
      guerreiro.saude -= this.forca;
      console.log(`${this.name} atacou ${guerreiro.getName} e causou ${this.forca} de dano!`);
    }
  
    receberDano(dano: number): void {
      this.saude -= dano;
      console.log(`${this.name} recebeu ${dano} de dano!`);
    }
  
    estaVivo(): boolean {
      return this.saude > 0;
    }
  }


 