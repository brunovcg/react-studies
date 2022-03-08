import { useProvider } from "./provider";

const Sender = () => {
  const { setCount, count } = useProvider();

  return (
    <div>
      <button onClick={() => setCount(count + 1)}> ADD +1</button>
      <button onClick={() => setCount(count - 1)}> SUB -1</button>
    </div>
  );
};

export default Sender;
