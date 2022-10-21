import { useRef, useEffect } from 'react'

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    // precisa do ? por que inicia null
    // inputRef.current.focus()

    // mass se colocar o null! no useRef não precisa

    inputRef.current.focus()
  }, [])

  return (
    <div>
      {' '}
      <input ref={inputRef} />
    </div>
  )
}

export default DomRef
