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

  .header-tag {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 12.5%;

    a {
      color: white;
      text-decoration: none;
      font-weight: bold;

      :hover {
        font-size: 20px;
        color: yellow;
        text-wrap: break-word;
      }
    }
  }
`;

const Header = () => {
  return (
    <Styled>
      <div className="header-tag">
        <Link to="/">Home</Link>
      </div>
      <div className="header-tag">
        <Link to="/hooks">Hooks</Link>
      </div>
      <div className="header-tag">
        <Link to="/hoc">HOC</Link>
      </div>
      <div className="header-tag">
        <Link to="/portals">Portals</Link>
      </div>
      <div className="header-tag">
        <Link to="/styled">Styled-Components</Link>
      </div>
      <div className="header-tag">
        <Link to="/redux">Redux</Link>
      </div>
      <div className="header-tag">
        <Link to="/typescript">TypeScript</Link>
      </div>
      <div className="header-tag">
        <Link to="/tests">Tests</Link>
      </div>
    </Styled>
  );
};

export default Header;
