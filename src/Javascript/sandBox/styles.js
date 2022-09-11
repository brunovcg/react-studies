import styled from "styled-components";

export const Styled = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Kanit:wght@200;400;600;700;800&family=Oleo+Script+Swash+Caps:wght@400;700&family=Open+Sans:ital,wght@0,400;0,500;0,800;1,400&family=Sigmar+One&display=swap");
  display: flex;
  #one {
    position: relative;
    height: 600px;
    width: 600px;
    img {
      height: 600px;
      width: 600px;
    }

    p {
      position: absolute;
      font-size: 70px;
      font-family: "kanit", sans-serif;
      color: white;
      margin-bottom: 0;
      font-weight: 500;
      bottom: 0;
      right: 0;
      margin-right: 20px;
      /* -webkit-text-stroke: 1px white; */
    }
  }
  
  #two {
    position: relative;
    height: 600px;
    width: 600px;
    img {
      height: 600px;
      width: 600px;
    }

    p {
      position: absolute;
      font-size: 70px;
      font-family: "kanit";
      color: white;
      margin-bottom: 0;
      font-weight: 600;
      bottom: 0;
      right: 0;
      margin-right: 20px;
      /* -webkit-text-stroke: 1px white; */
    }
  }`
