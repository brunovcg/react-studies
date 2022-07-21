import useCounter from "./useCounter";

const CustomHook = () => {
  const [count, increment, decrement, reset] = useCounter(10, 2);

  return (
    <div>
      <p>Aqui estamos criando um hook, um caso simples de contador</p>
      <p>
        {"Contador=>"} {count}
      </p>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default CustomHook;
