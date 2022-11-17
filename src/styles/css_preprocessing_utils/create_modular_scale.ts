import { modularScale } from "polished";

export const createModularScale =
  (ratio: number, base: number) => (steps: number) =>
    `${modularScale(steps, base, ratio)}px`;
