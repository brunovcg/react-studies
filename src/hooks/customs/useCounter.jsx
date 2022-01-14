import {useState} from 'react'

const useCounter = (inicialState = 0, value =1) => {

    const [count, setCount] = useState(inicialState)


    const increment = () => {
        setCount(count + value)
    }

    const decrement = () => {
        setCount(count - value)
    }

    const reset = () => {
        setCount(inicialState)
    }


return [count, increment, decrement, reset]

}

export default useCounter