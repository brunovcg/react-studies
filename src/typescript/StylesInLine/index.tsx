import { stylesObject, stylesSimple } from './styles'

const StylesInLineType = () => {
  return (
    <div style={{ backgroundColor: 'rgb(1,1,1,0.2)', padding: '20px' }}>
      <h3>Style inline</h3>
      <div style={stylesObject.style1}>Teste com CSS.Proporties</div>
      <div style={stylesObject.style2}>Teste de React.CSSProperties</div>
      <div style={stylesSimple}>Teste com style simples</div>
    </div>
  )
}

export default StylesInLineType
