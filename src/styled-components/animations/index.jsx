import styled, { keyframes } from "styled-components";

const rotate = keyframes`

from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
    
`;

const StyledAnime = styled.div`
  background: red;
  width: 50px;
  height: 50px;
  animation: ${rotate} infinite 5s linear;
`;

const Animation = () => {
  return (
    <div
      style={{
        width: "100%",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <p>Usando keyframe do styled components</p>
      <StyledAnime />
    </div>
  );
};

export default Animation;
