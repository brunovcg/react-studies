import { counterAdd, counterSub } from "./counter-action-types";

export const addNumber = (payload) => ({
  type: counterAdd,
  payload,
});

export const subNumber = (payload) => ({
  type: counterSub,
  payload: payload,
});
