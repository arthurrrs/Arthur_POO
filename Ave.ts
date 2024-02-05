import { Animal } from "./Animal";
export class Ave extends Animal {
    private _envergadura: number;
  
    constructor(nome: string, idade: number, envergadura: number) {
      super(nome, idade);
      this._envergadura = envergadura;
    }
  
    public get envergadura(): number {
      return this._envergadura;
    }
  
    public set envergadura(envergadura: number) {
      this._envergadura = envergadura;
    }
  
    public fly(): void {
      console.log(`**${this.nome} está voando**`);
    }
  }
  