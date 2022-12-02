import { useState } from 'react'

function App({ onChange }) {
  const [value, setValue] = useState('R$ 0,00')

  const a = {b: 1, c: 2}


  return (
    <input type="text"  value={value}  />
  )
}

export default App
