import UseStateHook from './useState'
import UseReducerhHook from './useReducer'
import { styles } from '../styles'
import UseContextHook from './useContext'
import { UseRefHook } from './useRef'

const HooksType = () => {
  return (
    <div style={styles.style1}>
      <h2>HOOKS</h2>

      <h3 style={styles.style4}>useState</h3>
      <UseStateHook />

      <h3 style={styles.style4}>useReducer</h3>
      <UseReducerhHook />

      <h3 style={styles.style4}>useContext</h3>
      <UseContextHook />

      <h3 style={styles.style4}>useRef</h3>
      <UseRefHook />
    </div>
  )
}

export default HooksType
