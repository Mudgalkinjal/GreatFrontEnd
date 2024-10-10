import Input from '../../UI/Input'
import { ChangeEvent, useState } from 'react'
const TemperatureConverter = () => {
  const [cels, setCels] = useState<string>('')
  const [farh, setFarh] = useState<string>('')
  const handleCelsiusChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setCels(value)
    if (value) {
      const numericValue = Number(value)
      const farhenheitValue = ((numericValue * 9) / 5 + 32).toString()
      setFarh(farhenheitValue)
    } else {
      setFarh('')
    }
  }
  const handleFarhenheitChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFarh(value)
    if (value) {
      const numericValue = Number(value)
      const celsiusValue = ((numericValue * 9) / 5 + 32).toString()
      setCels(celsiusValue)
    } else {
      setCels('')
    }
  }
  return (
    <div>
      <div>
        <label>Celsius: </label>
        <Input value={cels} onChange={handleCelsiusChange} type="text"></Input>
      </div>
      <div>
        <label>Farhenheit: </label>
        <Input
          value={farh}
          onChange={handleFarhenheitChange}
          type="text"
        ></Input>
      </div>
    </div>
  )
}

export default TemperatureConverter
