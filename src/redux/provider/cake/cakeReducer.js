import { BUY_CAKE } from "./cakeTypes";

const inicialState = { numOfCakes: 10 };

const cakeReducer = (state = inicialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

export default cakeReducer;
