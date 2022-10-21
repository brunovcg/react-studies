import DomRef from './DomRef'
import MutableRef from './MutableRef'

export const UseRefHook = () => {
  return (
    <div>
      <h4>Dom REF</h4>
      <DomRef />

      <h4>Mutable REF REF</h4>
      <MutableRef />
    </div>
  )
}
