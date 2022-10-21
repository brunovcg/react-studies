import styled, { css } from 'styled-components'

interface ButtonStyledProps {
  isDeleted: boolean
  size: string
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  margin-top: 5px;
  width: 200px;
  font-size: ${(props) => (props.size ? props.size : '20px')};
  height: 100px;
  border-radius: 10px;
  background-color: deepskyblue;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.isDeleted &&
    css`
      background: white;
      color: red;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    `};
`

const StyledComponentsType = () => {
  return (
    <>
      <h2>Tipando as PROPS do Styled-Components</h2>
      <ButtonStyled isDeleted size={'40px'}>
        Botão
      </ButtonStyled>

      <ButtonStyled isDeleted={false} size={'30px'}>
        Botão
      </ButtonStyled>
    </>
  )
}

export default StyledComponentsType
