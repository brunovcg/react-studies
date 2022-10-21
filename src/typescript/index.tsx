import styled from 'styled-components'
const reactLogo = require('../assets/react.ico')
// import reactLogo from "../assets/react.ico"

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
    text-align: center;
  }
`

const TypeScript = () => {
  return (
    <Styled>
      <img style={{ width: '100px' }} src={reactLogo} alt="logo" />

      <h2>Exemplos de alguns usos do React com Typescript</h2>
      <div>
        Clique nos menus do NAV escolha o que estudar e acompanhe pelo código
      </div>
    </Styled>
  )
}

export default TypeScript
