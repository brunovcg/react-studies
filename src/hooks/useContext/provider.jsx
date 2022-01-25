import { useContext, createContext, useState } from "react";

export const ProviderContext = createContext();

export const Provider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <ProviderContext.Provider value={{ count, setCount }}>
      {children}
    </ProviderContext.Provider>
  );
};

export const useProvider = () => useContext(ProviderContext);
