import { useLocalStorage } from "./useLocalStorage";

const UseDebugValueHook = () => {
  /*eslint-disable-next-line*/
  const [name, setName] = useLocalStorage("name", "Bruno");

  return (
    <section>
      <p>
        Utilizado para criar uma label no REACT devTools no navegador para
        custom hooks, abra o nevagador e o console do ReactDevTools. Esta sendo
        chamado dentro do useLocalStorage, so funciona dentro de um custom hook
      </p>
    </section>
  );
};

export default UseDebugValueHook;
