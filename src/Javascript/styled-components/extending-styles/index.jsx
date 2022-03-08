import styled from "styled-components";

const DivOne = styled.div`
  width: 80px;
  height: 60px;
  background-color: purple;
`;

const DivTwo = styled(DivOne)`
  background-color: green;
`;

// tambem passa atributo assim:

const DivThree = styled(DivOne).attrs({
  type: "button",
})`
  background-color: yellow;
  margin-left: 10px;
`;

const ExtendingStyles = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>A verde roxa está extendendo a roxa e apenas alterando a cor = </p>
      <div style={{ margin: "10px" }}>
        <DivOne type="submit" />
      </div>
      <div>
        {/* este as='main' esta alterando o tipo de tag, chamado poliformismo */}
        <DivTwo as="main" />
      </div>

      <DivThree />
    </div>
  );
};

export default ExtendingStyles;
