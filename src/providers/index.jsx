import { createContext, useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const location = useLocation();

  const isTypescript = location.pathname.includes("typescript");

  const navigate = useNavigate();
  const goJavascript = () => {
    setHeaderType("JS");
    navigate("/");
  };

  const goTypescript = () => {
    setHeaderType("TS");
    navigate("/typescript");
  };

  const [headerType, setHeaderType] = useState(isTypescript ? "TS" : "JS");

  return (
    <HeaderContext.Provider value={{ headerType, goJavascript, goTypescript }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = () => useContext(HeaderContext);
