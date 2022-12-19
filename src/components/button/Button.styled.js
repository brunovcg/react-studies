import styled from 'styled-components'

const variants = {
  primary: 'blue',
  secondary: 'black',
  success: 'green',
  danger: 'red',
}

const StyledButton = styled.button`
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
  background-color: ${(props) => variants[props.variant]};
  cursor: pointer;
`

export default StyledButton
