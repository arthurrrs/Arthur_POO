export abstract class Animal {
    private _nome: string;
    private _idade: number;
  
    constructor(nome: string, idade: number) {
      this._nome = nome;
      this._idade = idade;
    }
  
    public get nome(): string {
      return this._nome;
    }
  
    public set nome(nome: string) {
      this._nome = nome;
    }
  
    public get idade(): number {
      return this._idade;
    }
  
    public set idade(idade: number) {
      this._idade = idade;
    }
  
    public emitSound(): void {
      console.log("**Som genérico de animal**");
    }
  }
  