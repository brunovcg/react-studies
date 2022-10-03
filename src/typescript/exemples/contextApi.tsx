import { createContext, ReactNode, useContext, useState } from "react";

//Interface de definição do objeto Digimon
interface Digimon {
  name: string;
  level: string;
  img: string;
}

//Interface de definição da props do Provider
interface FavoriteDigimonsProviderProps {
  children: ReactNode;
}

//***Importante
//Interface que define o que vamos compartilhar no value do nosso context
//Perceba que tudo que defino aqui é passado no value
interface FavoriteDigimonsProviderData {
  favorites: Digimon[];
  addDigimon: (digimon: Digimon) => void;
  deleteDigimon: (digimon: Digimon) => void;
}

//Uma com a interface definida, basta utilizar Generics para tipar
const FavoriteDigimonsContext = createContext<FavoriteDigimonsProviderData>(
  {} as FavoriteDigimonsProviderData
  //Aqui estamos tipando o objeto default do nosso context
);

export const FavoriteDigimonsProvider = ({
  children,
}: FavoriteDigimonsProviderProps) => {
  const [favorites, setFavorites] = useState<Digimon[]>([]);

  const addDigimon = (digimon: Digimon) => {
    setFavorites([...favorites, digimon]);
  };

  const deleteDigimon = (digimonToBeDeleted: Digimon) => {
    const newList = favorites.filter(
      (digimon) => digimon.name !== digimonToBeDeleted.name
    );
    setFavorites(newList);
  };

  return (
    <FavoriteDigimonsContext.Provider
      value={{ favorites, addDigimon, deleteDigimon }}
    >
      {children}
    </FavoriteDigimonsContext.Provider>
  );
};

export const useFavoriteDigimons = () => useContext(FavoriteDigimonsContext);
