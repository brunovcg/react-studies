import { Link } from "react-router-dom";
import styled from "styled-components";

const Styled = styled.nav`
  background: red;
  width: 100%;
  height: 6vh;
  padding: 2vh 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;

    :hover {
      font-size: 20px;
      color: yellow;
    }
  }
`;

const Header = () => {
  return (
    <Styled>
      <Link to="/">Home</Link>
      <Link to="/hooks">Hooks</Link>
      <Link to="/hoc">HOC</Link>
      <Link to="/portals">Portals</Link>
      <Link to="/styled">Styled-Components</Link>
      <Link to="/redux">Redux</Link>
      <Link to="/typescript">TypeScript</Link>
      <Link to="/tests">Tests</Link>
    </Styled>
  );
};

export default Header;
