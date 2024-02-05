import { Animal } from "./Animal";
export class Mamifero extends Animal {
    private _pelagem: string;
  
    constructor(nome: string, idade: number, pelagem: string) {
      super(nome, idade);
      this._pelagem = pelagem;
    }
  
    public get pelagem(): string {
      return this._pelagem;
    }
  
    public set pelagem(pelagem: string) {
      this._pelagem = pelagem;
    }
  
    public breastfeed(): void {
      console.log(`**${this.nome} está amamentando**`);
    }
  }
  