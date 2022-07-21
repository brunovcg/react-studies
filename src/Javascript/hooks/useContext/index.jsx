import Consumer from "./consumer";
import Sender from "./sender";
import styles from "../styles";
import { createContext, useState } from "react";

export const ProviderContext = createContext();

const UseContextHook = () => {

  const [count, setCount] = useState(0);

  return (
    <div style={styles.style3}>
      <h2>useContext</h2>
      <p>
        É utilizado para passar o contexto de um component para outro, quando
        fica muito complicado passar por props. Observe o código para ver como o
        component "Consumer" mostra o resultado de count e que o "Sender"
        realiza a troca de estado, somando ou diminuindo
      </p>
      <ProviderContext.Provider value={{ count, setCount }}>
        <Consumer />
        <Sender />
      </ProviderContext.Provider>
    </div>
  );
};

export default UseContextHook;
