import { BUY_CHOCOLATE } from "./chocolateTypes";

const inicialState = { numOfChocolate: 20 };

const chocolateReducer = (state = inicialState, action) => {
  switch (action.type) {
    case BUY_CHOCOLATE:
      return {
        ...state,
        numOfChocolate: state.numOfChocolate - action.payload,
      };

    default:
      return state;
  }
};

export default chocolateReducer;
