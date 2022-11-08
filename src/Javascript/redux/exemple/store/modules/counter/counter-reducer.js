import { counterAdd, counterSub } from "./counter-action-types";

const reducerCounter = (state = 0, action) => {
  switch (action.type) {
    case counterAdd:
      return state + action.payload;

    case counterSub:
      return state - action.payload;

    default:
      return state;
  }
};

export default reducerCounter;
