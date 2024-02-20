import { NobleHouse } from "../NobleHouse";

export class Baratheon extends NobleHouse {
  heirList: Array<string> = [];
  constructor(name: string, motto: string, army: number) {
    super(name, motto, army);
  }

  addHeir(nameHeir: string): void {
    this.heirList.push(nameHeir);
  }

  checkHeritage(): Array<string> {
    return this.heirList;
  }
}