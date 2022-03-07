import { useReducer } from "react";

type CounterState = { count: number };
/* 
Neste caso atribuimos literals para que não possa ter outro
type, que não o add e o sub, para este exemplo.


*/



type UpdateAction = {type: "add" | "sub" | "reset"; payload: number}
type ResetAction = {type: "reset"}


// type CounterAction = { type: "add" | "sub" | "reset"; payload?: number };
type CounterAction = UpdateAction | ResetAction


const initialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "add":
        // isso resolveria mas fica mal escrito
      return { count: state.count + (action.payload || 0) };

    case "sub":
      return { count: state.count - action.payload };

    case "reset":
      return initialState;

    default:
      return state;
  }
};

export const StrictReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <button onClick={() => dispatch({ type: "add", payload: 10 })}>
        ADD 10
      </button>
      <button onClick={() => dispatch({ type: "sub", payload: 10 })}>
        SUB 10
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <br />
      {state.count}
    </>
  );
};
