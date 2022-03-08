import styled from "styled-components";
import reactLogo from "../../assets/react.ico"

const Styled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  background-color: #fafca0;
  height: 90vh;

  h2 {
    width: 80%;
    text-align: center;
  }

  div {
    margin: 0 100px;
  }
`;

const Home = () => {
  return (
    <Styled>
       <img src={reactLogo} style={{width: "100px"}} alt="react" />
      <h2>Aqui estão exemplos de alguns usos de recursos do React</h2>
      <div>
        {" "}
        Clique nos menus do NAV escolha o que estudar e acompanhe pelo código
      </div>
    </Styled>
  );
};

export default Home;
