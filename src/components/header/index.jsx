import { Link } from "react-router-dom";
import styled, { keyframes }  from "styled-components";
import { useHeader } from "../../providers";
import { TSLinks, JSLinks } from "./objects";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import reactLogo from "../../assets/react.ico";
import {LanguageLogo} from "../languageLogo"


const rotate = keyframes`

from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;



const Styled = styled.nav`
  background-color: ${(props) =>
    props.color === "javascript" ? "rgb(139, 126, 7)" : "#003dc2"};
  width: 100%;
  height: 8vh;
  padding: 2vh 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .image-box {
    display: flex;
    flex-direction: row;
    margin-left: 10px;

    .react-logo {
      width: 80px;
      animation: ${rotate} infinite 5s linear;

    }

    .jsts-logo {
      width: 30px;
      height: 30px;
    }
  }

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
        color: ${(props) =>
          props.color === "javascript" ? "rgb(255, 244, 146)" : "#bed3ff"};
        word-wrap: break-word;
      }
    }
  }
`;

const Figure = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin: 0 10px;
  cursor: pointer;

  .figure {
    height: 80%;
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  p {
    margin: 0;
    color: white;
    height: 10%;
    :hover {
      color: #eae9fa;
    }
  }
`;

const Header = () => {
  const { headerType, goJavascript, goTypescript } = useHeader();
  const [lib, setLib] = useState(JSLinks);

  const navigate = useNavigate();

  useEffect(() => {
    if (headerType === "javascript") {
      setLib(JSLinks);

      return navigate("/");
    }
    if (headerType === "typescript") {
      setLib(TSLinks);

      return navigate("/typescript");
    }
    /*eslint-disable-next-line */
  }, [headerType]);

  return (
    <Styled color={headerType}>
      <div className="figure">
        <div className="image-box">
          <img className="react-logo" src={reactLogo} alt="logo" />
          <LanguageLogo>{headerType === "javascript" ? "JS" : "typescript"}</LanguageLogo>
        </div>
      </div>

      {lib.map((item, index) => (
        <div key={index} className="header-tag">
          <Link to={item.link}>{item.text}</Link>
        </div>
      ))}

      <Figure
        onClick={headerType === "typescript" ? goJavascript : goTypescript}
      >
        <div className="figure">
        <LanguageLogo>{headerType === "javascript" ? "typescript" : "javascript"}</LanguageLogo>
        </div>
        <p>change</p>
      </Figure>
    </Styled>
  );
};

export default Header;
