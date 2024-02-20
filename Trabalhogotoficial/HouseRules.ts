import { NobleHouse } from "../Classes/NobleHouse";

export interface HouseRules extends NobleHouse {
  name: string;
  motto: string;
  heirList: Array<string>;
  army: number;
}