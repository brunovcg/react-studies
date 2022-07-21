import { useReducer } from "react";
import UseReducerComplex from "./complexUse";
import styles from "../styles";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      return initialState;
  }
};

const UseReduceHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <div style={styles.style13}>
        <h2>useReducer</h2>
        <div style={styles.style14}>
          <h3>Uso Simples</h3>
          <p>
            Recebe um funçao (reducer), e o estado inicial. Na funçao Reducer,
            recebe-se o estado e a ação, e se faz um Switch case, onde se o nome
            da ação for o caso (ação enviada pela dispatch, desestruturado na
            useReducer.), um novo estado é retornado, esse estado está
            disponível na desestruturação do useReducer. Olhar o código para ver
            o funcionamento.
          </p>
          <div style={styles.style15}>{state}</div>
          <button onClick={() => dispatch("increment")}>Incrementar</button>
          <button onClick={() => dispatch("decrement")}>Decrementar</button>
          <button onClick={() => dispatch("reset")}>Resetar</button>
        </div>
      </div>
      <div style={styles.style13}>
        <div style={styles.style17}>
          <UseReducerComplex />
        </div>
      </div>
    </section>
  );
};

export default UseReduceHook;
