import ParentComponent from "./parent";
import { useCallback, useState, useEffect } from "react";


// useCallback compara a função, useMemo a execução/ resultado da função.

const Button = ({ ...props }) => {
  useEffect(() => {
    console.log("Button: Re-Render");
  });

  useEffect(() => {
    console.log("Button: Re-Render ONCLICK");
  }, [props.onClick]);

  return <button {...props} />;
};

const UseCallbackHook = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("APP-Render");
  });

  return (
    <section>
      <p>O useCallback memoiza a função, guarda sua referência para a próxima renderização</p>

      <ParentComponent />
      <div>------------------------------</div>

      <div>count: {count}</div>
      <Button onClick={useCallback(() => setCount((old) => old + 1), [])}>
        Incrementa
      </Button>
    </section>
  );
};

export default UseCallbackHook;
