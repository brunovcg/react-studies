import { BUY_ICECREAM } from "./iceCreamTypes";

const inicialState = { numOfIceCream: 20 };

const iceCreamReducer = (state = inicialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
