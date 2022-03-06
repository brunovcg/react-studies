import { stylesObject, stylesSimple } from "./styles";

const StylesInLine = () => {
  return (
    <>
      <div style={stylesObject.style1}>Teste com CSS.Proporties</div>
      <div style={stylesObject.style2}>Teste de React.CSSProperties</div>
      <div style={stylesSimple}>Teste com style simples</div>
    </>
  );
};

export default StylesInLine;
