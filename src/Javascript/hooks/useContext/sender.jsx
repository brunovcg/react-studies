import { ProviderContext } from "./";
import { useContext } from "react";

const Sender = () => {
  const { setCount, count } = useContext(ProviderContext);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> ADD +1</button>
      <button onClick={() => setCount(count - 1)}> SUB -1</button>
    </div>
  );
};

export default Sender;
