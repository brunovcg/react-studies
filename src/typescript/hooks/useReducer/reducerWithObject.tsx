import { useReducer } from 'react'

const initialState = {
  amount: '0',
  installments: '0',
  mdr: '0',
}

type ActionTypesTypes = 'amount' | 'installments' | 'mdr'

type ActionTypes = {
  type: ActionTypesTypes
  payload: string
}

type StateTypes = {
  amount: string
  installments: string
  mdr: string
}

const reducer = (state: StateTypes, action: ActionTypes): StateTypes => {
  const { type, payload } = action
  const actions = {
    amount: (payload: string): StateTypes => ({ ...state, amount: payload }),
    installments: (payload: string): StateTypes => ({
      ...state,
      installments: payload,
    }),
    mdr: (payload: string): StateTypes => ({ ...state, mdr: payload }),
  }
  return actions[type](payload) as typeof initialState
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: ActionTypesTypes
  ) => {
    console.log(e)
    dispatch({ type, payload: e.target.value })
  }

  return (
    <>
      <form>
        <h2 className="form-title">Simule sua Antecipação</h2>
        <input
          value={state.amount}
          onChange={(e) => handleChange(e, 'amount')}
          type="number"
        />
        <input
          value={state.installments}
          onChange={(e) => handleChange(e, 'installments')}
          type="number"
        />
        <input
          value={state.mdr}
          onChange={(e) => handleChange(e, 'mdr')}
          type="number"
        />
      </form>
      <div className="results">
        <h2 className="results-title">VOCÊ RECEBERÁ</h2>
        <div className="results-days"></div>
      </div>
    </>
  )
}

export default Form
