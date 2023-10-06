import { TYPES_BADGES, TYPES_OPTIONS } from "../utils/constants";

export interface Plan {
  name: string;
  price: number;
  age: number;
  description: string[];
}

export type TypesBadgesValues =
  (typeof TYPES_BADGES)[keyof typeof TYPES_BADGES];

export type TypesOptionsValues =
  (typeof TYPES_OPTIONS)[keyof typeof TYPES_OPTIONS];
