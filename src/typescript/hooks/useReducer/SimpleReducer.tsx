import { useReducer } from 'react'

type CounterState = { count: number }
type CounterAction = { type: string; payload: number }

const initialState = { count: 0 }

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'add':
      return { count: state.count + action.payload }

    case 'sub':
      return { count: state.count - action.payload }

    default:
      return state
  }
}

export const SimpleReducer = () => {
  // se precisar pegar o type de state ou dispatch, basta olhar o hover destes

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <button onClick={() => dispatch({ type: 'add', payload: 10 })}>
        ADD 10
      </button>
      <button onClick={() => dispatch({ type: 'sub', payload: 10 })}>
        SUB 10
      </button>
      <br />
      {state.count}
    </>
  )
}
