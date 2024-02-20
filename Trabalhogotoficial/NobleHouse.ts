import { Heir } from "./Heir";

export class NobleHouse {
  name: string;
  motto: string;
  heirList: Array<string>;
  army: number;
  constructor(name: string, motto: string, army: number) {
    this.motto = motto;
    this.name = name;
    this.army = army;
  }

  addHeir(nameHeir: string): void {
    this.heirList.push(nameHeir);
  }

  checkHeritage(): Array<string> {
    return this.heirList;
  }
}