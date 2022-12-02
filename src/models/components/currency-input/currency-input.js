import { useState } from 'react'

function CurrencyInput({ onChange }) {
  const [value, setValue] = useState('R$ 0,00')

  const transformMoney = (value) => {
    const float = value.replace(/[^0-9,]/g, '')
    const splited = float.split(',')
    const units = splited[0]
    let cents = splited[1]
    if (!cents) {
      cents = '00'
    } else if (cents.length === 1) {
      cents += '0'
    } else if (cents.length > 2) {
      cents = cents.substring(0, 2)
    }
    return Number(units + cents)
  }

  const handleChange = (e) => {
    const currentValue = e.target.value
    const float = currentValue.replace(/[^0-9,]/g, '')
    const number = transformMoney(currentValue)
    const newValue = 'R$ ' + float
    onChange?.(number)
    setValue(newValue)
  }

  const handleBlur = (e) => {
    const currentValue = e.target.value
    let newValue = String(transformMoney(currentValue))

    if (!newValue) {
      newValue = '0,00'
    }
    else if (newValue.length === 1) {
      newValue = '0,0' + newValue
    } else if (newValue.length === 2) {
      newValue = '0,' + newValue
    } else if (newValue.length > 2) {
      const units = newValue.slice(0, -2)
      const cents = newValue.slice(-2)
      newValue = units + ',' + cents
    }
    setValue('R$ ' + newValue)
  }

  return (
    <input type="text" onBlur={handleBlur} value={value} onChange={handleChange} />
  )
}

export default CurrencyInput