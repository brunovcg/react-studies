import Child from "./child";
import { useRef } from "react";

const UseImperativeHandleHook = () => {
  const childRef = useRef(null);

  return (
    <div style={{ background: "#d3ead8", padding: "20px" }}>
      <h2>useImperativeHandle</h2>
      <p>
        usa o useRef para criar uma referencia passada a um component 'child',
        criando esse component com um fowardRef, podemos usar o
        useImperativeHandle para acessar a função que faz um toggle no state que
        controla o modal
      </p>
      <button onClick={() => childRef.current.toggleModal()}>
        alterar modal
      </button>
      <Child ref={childRef} />
    </div>
  );
};

export default UseImperativeHandleHook;
