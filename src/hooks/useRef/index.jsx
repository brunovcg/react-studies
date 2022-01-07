import { useRef, useState } from "react";

const UseRefHook = () => {
  // pode-se usar React.createRef()
  const inputRef = useRef(null);
  const submitRef = useRef(null);
  const tagRef = useRef(null);
  const [show, setShow] = useState();

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div style={{ background: "lightgrey", padding: "20px" }}>
      <h2>useRef</h2>
      <div style={{ border: "1px solid black", padding: "20px" }}>
        <h3>{"Usando algum atributo da <tag/>"}</h3>
        <p>useRef está acionando a prop 'focus' do input</p>
        <input ref={inputRef} />
        <button onClick={handleFocus}>Focar no input</button>
      </div>

      <div style={{ border: "1px solid black", padding: "20px" }}>
        <h3>{"Pegando valor de um input"}</h3>
        <p> useRef está buscando o valor do input</p>
        <input name="name" label="nome completo" ref={submitRef} />
        <button onClick={() => setShow(submitRef?.current?.value)}>
          Submeter
        </button>
        <div>O que tem no input: {show}</div>
      </div>

      <div style={{ border: "1px solid black", padding: "20px" }}>
        <h3>{"Exibindo a <tag/>"}</h3>
        <p> useRef está exibindo a tag clicada no console</p>

        <div
          style={{ background: "orange", width: "fit-content" }}
          onClick={() => {
            console.log(tagRef?.current);
          }}
          ref={tagRef}
        >
          clique aqui
        </div>

        <div>Olhe o Console após clicar</div>
      </div>
    </div>
  );
};

export default UseRefHook;
