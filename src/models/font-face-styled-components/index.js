import EUROSTILE from './Eurostile.otf'
import styled from 'styled-components'

// can use with global styles
const MyStyle = styled.div`
  @font-face {
    font-family: 'Eurostile';
    src: url('${EUROSTILE}');
  }

  div {
    font-family: 'Eurostile';
  }
`

export default MyStyle
