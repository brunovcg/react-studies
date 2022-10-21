import { useState, useRef, useEffect } from 'react'

const MutableRef = () => {
  const [timer, setTimer] = useState(0)
  const interValRef = useRef<number | undefined>(undefined)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const stopTimer = () => {
    window.clearInterval(interValRef.current)
  }

  const handleInput = () => {
    if (inputRef.current) {
      console.log(inputRef.current.value)
    }
  }

  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1)
    }, 1000)

    return () => {
      stopTimer()
    }
  }, [])

  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => stopTimer()}>StopTimer</button>
      <br />
      <input ref={inputRef} />
      <button onClick={handleInput}>Mostrar input value no console</button>
    </div>
  )
}

export default MutableRef
