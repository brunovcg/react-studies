import styled from 'styled-components'

const StyledInput = styled.div`
  input {
    border-radius: 10px;
    height: 30px;
    border: 2px solid ${(props) => (props.error ? 'red' : 'grey')};
  }
`

export default StyledInput
