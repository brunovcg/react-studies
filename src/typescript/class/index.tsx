import { styles } from '../styles'
import ClassState from './stateProps'

const ClassComponentType = () => {
  return (
    <div style={styles.style1}>
      <h2>State and Props</h2>
      <ClassState message="count values is:" />
    </div>
  )
}

export default ClassComponentType
