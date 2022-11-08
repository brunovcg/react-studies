import { useState, useEffect } from 'react'

const inicialTime = () => {
  const time = new Date()
  time.setMinutes(0, 0)
  return time
}

function Timer() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [timer, setTimer] = useState(inicialTime())
  const [start, setStart] = useState(false)

  const handleMinutes = (e) => {
    setMinutes(e.target.value)
  }
  const handleSeconds = (e) => {
    setSeconds(e.target.value)
  }

  const handleStart = () => {
    setStart(true)
  }

  const removeOneSecond = () => {
    const newTimer = new Date(timer)
    const miliseconds = newTimer.getMilliseconds()

    newTimer.setMilliseconds(miliseconds - 1000)

    setTimer(newTimer)
  }

  const isTimerOver = () => {
    const sec = timer.getSeconds()
    const min = timer.getMinutes()
    if (!sec && !min) {
      return true
    }

    return false
  }

  const handleRestart = () => {
    setStart(false)
    setMinutes(0)
    setSeconds(0)
    setTimer(inicialTime())
  }

  useEffect(() => {
    if (start) {
      const newTimer = new Date(timer)
      newTimer.setMinutes(minutes, seconds)
      setTimer(newTimer)
    }
  }, [minutes, seconds, start])

  useEffect(() => {
    if (start && !isTimerOver()) {
      const interval = setTimeout(() => removeOneSecond(), 1000)

      return () => clearTimeout(interval)
    }
  }, [start, timer])

  useEffect(() => {
    const sec = timer.getSeconds()
    const min = timer.getMinutes()

    if (start && !sec && !min) {
      handleRestart()
    }
  }, [timer])

  return (
    <div className="App">
      <input
        onChange={handleMinutes}
        type="number"
        min="0"
        max="59"
        value={minutes}
        disabled={start}
      />
      <input
        onChange={handleSeconds}
        type="number"
        min="0"
        max="59"
        value={seconds}
        disabled={start}
      />
      <button disabled={start} onClick={handleStart}>
        Start
      </button>

      <button onClick={handleRestart}>Restart</button>

      <div>
        {timer && timer?.getMinutes().toLocaleString().padStart(2, 0)}:
        {timer && timer?.getSeconds().toLocaleString().padStart(2, 0)}
      </div>
    </div>
  )
}

export default Timer
