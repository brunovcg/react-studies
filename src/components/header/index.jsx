import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHeader } from "../../providers";
import { TSLinks, JSLinks } from "./objects";
import { useEffect, useState } from "react";
import typescript from "../../assets/typescript.ico";
import javascript from "../../assets/javascript.ico";

const Styled = styled.nav`
  background-color: ${(props) =>
    props.color === "javascript" ? "rgb(139, 126, 7)" : "#003dc2"};
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
        font-size: 23px;
        color: ${(props) =>
          props.color === "javascript" ? "rgb(255, 244, 146)" : "#bed3ff"};
        word-wrap: break-word;
      }
    }
  }
`;

const Figure = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin:0 10px;


  figure {
    height: 60%;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 0;
    
    img {
      height: 100%;
    }

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

  useEffect(() => {
    if (headerType === "javascript") {
      return setLib(JSLinks);
    }
    if (headerType === "typescript") {
      return setLib(TSLinks);
    }
  }, [headerType]);

  return (
    <Styled color={headerType}>
      <img
        src={headerType === "javascript" ? javascript : typescript}
        alt="logo"
        style={{ margin: "10px" }}
      />

      {lib.map((item, index) => (
        <div key={index} className="header-tag">
          <Link to={item.link}>{item.text}</Link>
        </div>
      ))}

      <Figure
        onClick={headerType === "typescript" ? goJavascript : goTypescript}
      >
        <figure>
          <img
            src={headerType === "javascript" ? typescript : javascript}
            alt="image2"
          />
        </figure>
        <p>change</p>
      </Figure>
    </Styled>
  );
};

export default Header;
