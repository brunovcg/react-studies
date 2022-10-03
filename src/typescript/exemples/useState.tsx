import { useState } from "react";
interface Digimon {
  name: string;
  level: string;
  img: string;
}

export const UseStateExmple = () => {
  const [digimons, setDigimons] = useState<Digimon[]>([] as Digimon[]);
  //Utilizamos o operador Generics <MeuTipo> para tipar o useState. Portanto a estrutura do meu state
  //será um array de objetos do tipo Digimon

  //OR

  const [error, setError] = useState<string>("");

  return <div>xxx</div>;
};
