import { useReducer, useEffect, useRef } from 'react'
import axios from 'axios'

const inicialValue = { name: 'Bruno', idade: 33 }

const reducer = (state, action) => {
  const cases = {
    mudaNome: (payload) => ({ ...state, name: payload }),
    sumIdade: (payload) => ({ ...state, idade: state.idade + Number(payload) }),
  }

  return cases[action.type](action.payload) ?? state
}

function App() {
  const [store, dispatch] = useReducer(reducer, inicialValue)
  const nameRef = useRef(null)
  const idadeRef = useRef(null)

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/').then((res) => console.log(res))
  }, [])

  return (
    <div>
      <input ref={nameRef} type="text" />
      <button
        onClick={() =>
          dispatch({ type: 'mudaNome', payload: nameRef.current.value })
        }
      >
        name
      </button>
      <input ref={idadeRef} type="number" />
      <button
        onClick={() =>
          dispatch({ type: 'sumIdade', payload: idadeRef.current.value })
        }
      >
        idade
      </button>
      <div>
        {store.name} - {store.idade}
      </div>
    </div>
  )
}

export default App
