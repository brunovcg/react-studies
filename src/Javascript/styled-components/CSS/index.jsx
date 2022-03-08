import styled, { css } from "styled-components";

export const Post = styled.article`
  width: 100%;
  text-align: center;

  font-size: ${(props) => `${props.fontSize}px`};
  color: ${(props) => props.color};
`;

export const PostCSSTag = styled.article`
  ${(props) => css`
    width: 100%;
    text-align: center;

    font-size: ${`${props?.fontSize}px`};
    color: ${props?.color};
  `}
`;
