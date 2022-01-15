import styled from "styled-components";

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
`;

const Home = () => {
  return (
    <Styled>
      <h2>Aqui estão exemplos de alguns usos de recursos do React</h2>
      <div> Click on NAVs menu to choose options</div>
    </Styled>
  );
};

export default Home;
