import FutureValue from "./futureValue";
import SimpleInference from "./simpleInference";

const UseStateHook = () => {
  return (
    <div>
      <h4>+ SimpleInference</h4>

      <p>
        Nesse caso, como o state inicial é declarado, ele usa inferência e
        assume o valor daquela stateno caso do exemplo a seguir, ele assume que
        é um boleano
      </p>
      <SimpleInference />

      <h4>+ Future Value</h4>
      <FutureValue />
      
    </div>
  );
};

export default UseStateHook;
