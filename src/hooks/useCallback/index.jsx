import ParentComponent from "./parent";
import { useCallback, useState, useEffect } from "react";
import styles from "../styles";

// useCallback compara a função, useMemo a execução da função.

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
    <div style={styles.style1}>
      <h2>useCallback</h2>
      <ParentComponent />
      <div>------------------------------</div>

      <div>count: {count}</div>
      <Button onClick={useCallback(() => setCount((old) => old + 1), [])}>
        Incrementa
      </Button>
    </div>
  );
};

export default UseCallbackHook;
