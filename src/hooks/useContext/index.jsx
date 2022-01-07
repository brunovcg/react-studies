import { Provider } from "./provider";
import Consumer from "./consumer";
import Sender from "./sender";

const UseContextHook = () => {
  return (
    <div style={{ background: "#41a9d698", padding: "20px" }}>
      <h2>useContext</h2>
      <p>
        É utilizado para passar o contexto de um component para outro, quando
        fica muito complicado passar por props. Observe o código para ver como o
        component "Consumer" mostra o resultado de count e que o "Sender"
        realiza a troca de estado, somando ou diminuindo
      </p>
      <Provider>
        <Consumer />
        <Sender />
      </Provider>
    </div>
  );
};

export default UseContextHook;
