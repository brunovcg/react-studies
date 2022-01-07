import { useReducer } from "react";

const initialState = { firstCounter: 0 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {firstCounter: state.firstCounter +1};
    case "decrement":
      return {firstCounter: state.firstCounter-1};
    case "reset":
      return {firstCounter: 0};
    default:
      return {firstCounter: initialState};
  }
};

const UseReducerComplex = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div >
    <h3>Uso Complexo</h3>
    <p>Mesmo uso do simples, porém com um objeto como o initialState, semelhante também ao redux</p>
      <div>{state.firstCounter}</div>
      <button onClick={() => dispatch({type:"increment"})}>Incrementar</button>
      <button onClick={() => dispatch({type:"decrement"})}>Decrementar</button>
      <button onClick={() => dispatch({type:"reset"})}>Resetar</button>
    </div>
  );
};

export default UseReducerComplex;
