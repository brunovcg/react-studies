import { useEffect, useState, useLayoutEffect } from "react";

const UseLayoutEffectHook = () => {
  const [change, setChange] = useState(true);

  const handleChange = () => {
    setChange(!change);
  };

  useLayoutEffect(() => {
    console.log("LayoutEfect=> Layout 1");
  }, [change]);

  useEffect(() => {
    console.log("Efect=> Effect");
  }, [change]);
  useEffect(() => {});

  useLayoutEffect(() => {
    console.log("LayoutEfect=> Layout 2");
  }, [change]);

  return (
    <section>
      <p>
        Clique no botão 'change' com o console aberto. Verá que o layout effect
        sempre é renderizado primeiro, O useLayoutEffect é acionado
        sincronicamente antes das mutações do DOM são mostradas na tela, o
        useEffect por sua vez é mostrado após essas mutações do DOM. Como os
        navegadores de hoje em dia são muito rápidos, é bastante improvável que
        usemos esse hook, mas pode acontecer principalmente com libs externas.
        Saberá o momento de usar quando a tela ou component 'piscar' ao utilizar
        o useEffect para renderizar algo.
      </p>

      <button onClick={handleChange}>Trocar</button>
    </section>
  );
};

export default UseLayoutEffectHook;
