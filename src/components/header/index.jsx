import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useHeader } from "../../providers";
import { TSLinks, JSLinks } from "./objects";
import { useEffect, useState } from "react";
import reactLogo from "../../assets/react.ico";
import { LanguageLogo } from "../languageLogo";
import { Popover, OverlayTrigger } from 'react-bootstrap';

const rotate = keyframes`
from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
`;

const Styled = styled.div`
  background-color: ${(props) =>
    props.color === "JS" ? "rgb(139, 126, 7)" : "#003dc2"};
  width: 100%;
  min-height: 14vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0 20px 0;

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
  .nav_options {
    height: 90%;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 5px;
  }

  .header-tag {
    display: flex;
    flex-direction: row;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    width: 130px;
    height: 60px;
    border: ${(props) =>
    props.color === "JS"
      ? "1px solid rgb(216, 207, 119)"
      : "1px solid #bed3ff"};
    background-color: ${(props) =>
    props.color === "JS" ? "rgb(170, 154, 10)" : "#3a76f8"};

    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      text-align: center;

      :hover {
        font-size: 20px;
        color: ${(props) =>
    props.color === "JS" ? "rgb(255, 244, 146)" : "#bed3ff"};
        word-wrap: break-word;
      }
    }

    .extendable{
      color: #ffffff;
      font-weight: bold;
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
    justify-content: center;
    align-items: center;
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

  const location = useLocation();

  const isTypescript = location.pathname.includes("typescript");


  const popBottom = (array) => {

    const render = array?.map((item, index) => <div style={{ width: '100%', height: '20px' }} key={index}><Link to={item.link}>{item.text}</Link></div>)

    return (<Popover
      id="popover-basic"
      placement="right"
      title="Popover right">
      <div style={{ width: '200px', height: 'fit-content', padding: "10px" }}>
        Go to:
        {render}
      </div>
    </Popover>)
  }

  useEffect(() => {
    if (isTypescript) {
      setLib(TSLinks);
    } else {
      setLib(JSLinks);
    }
    /*eslint-disable-next-line */
  }, [headerType]);

  return (
    <Styled color={headerType}>
      <div className="figure">
        <div className="image-box">
          <img className="react-logo" src={reactLogo} alt="logo" />
          <LanguageLogo>{isTypescript ? "TS" : "JS"}</LanguageLogo>
        </div>
      </div>
      <nav className="nav_options">
        {lib.map((item, index) => (
          <div key={index} className="header-tag">
            {!item.extends ? <Link onClick={() => console.clear()} to={item.link}>
              {item.text}
            </Link> : <OverlayTrigger placement="bottom" trigger="click" rootClose overlay={popBottom(item.extends)}>
              <div className="extendable">{item.text} +</div>

            </OverlayTrigger>}
          </div>
        ))
        }
      </nav >



      <Figure onClick={isTypescript ? goJavascript : goTypescript}>
        <div className="figure">
          <LanguageLogo applyHover >{!isTypescript ? "TS" : "JS"}</LanguageLogo>
          <p>go to</p>
        </div>
      </Figure>
    </Styled >
  );
};

export default Header;
