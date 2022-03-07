import styled from "styled-components";

const Styled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  background-color: #d8edfd;
  height: 90vh;

  h2 {
    width: 80%;
    text-align: center;
  }

  div {
    margin: 0 100px;
  }
`;

const TypeScript = () => {
  return (
    <Styled>
  
    <h2>Bem vindo ao menu do React com Typescript</h2>
    <div>
      {" "}
      Clique nos menus do NAV escolha o que estudar e acompanhe pelo código
    </div>
  </Styled>
);
  
};

export default TypeScript;
