import { useState } from 'react'
import { QuerySuccess } from './query-success'
import { QueryError } from './query-error'
import { styles } from './styles'
const GraphQLComponent = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div style={styles.style1}>
      <p>
        Clique em cada uma das opções abaixo para ver o funcionamento de uma
        requisição graphQL, com sucesso ou erro{' '}
      </p>
      <div style={styles.style2}>
        <button onClick={() => setSuccess(true)}>SUCCESS</button>
      </div>
      {success && <QuerySuccess />}

      <div style={styles.style3}>
        <button onClick={() => setError(true)}>ERROR</button>
      </div>
      {error && <QueryError />}
    </div>
  )
}

export default GraphQLComponent
