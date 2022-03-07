import { createContext, useContext, useState } from "react";
import {useNavigate} from "react-router-dom"

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const navigate = useNavigate()
  const goJavascript = () => {
    setHeaderType("javascript");
    navigate("/")
  };

  const goTypescript = () => {
    setHeaderType("typescript");
    navigate("/typescript")
  };

  const [headerType, setHeaderType] = useState("javascript");

  return (
    <HeaderContext.Provider value={{ headerType, goJavascript, goTypescript }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
