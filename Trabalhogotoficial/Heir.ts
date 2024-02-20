import { HouseHeir } from "../Interface/HouseHeir";

export class Heir implements HouseHeir {
  name: string;
  age: number;
  heirPos: number;

  constructor(age: number, heirPos: number, name: string) {
    this.name = name;
    this.age = age;
    this.heirPos = heirPos;
    
  }
}