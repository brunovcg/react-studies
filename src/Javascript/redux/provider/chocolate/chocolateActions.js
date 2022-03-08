import { BUY_CHOCOLATE } from "./chocolateTypes";

export const buyChocolate = (number = 1) => {
  return {
    type: BUY_CHOCOLATE,
    payload: number,
  };
};
