import Dropdown from '../../UI/Dropdown'
import { useState } from 'react'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import Form from '../../UI/Form'

const FlightBooker = () => {
  const options = ['One-way flight', 'Return flight']
  const [ret, setRet] = useState(false)
  const [departureDate, setDepartureDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const handleClick = (value: string) => {
    setRet(value == 'Return flight')
  }

  const handleChangeDate = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    if (type == 'departure') {
      setDepartureDate(e.target.value)
    } else if (type == 'return') {
      setReturnDate(e.target.value)
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (ret) {
      console.log(
        `Departure date is ${departureDate} & Return date is ${returnDate}`
      )
    } else {
      console.log(`Departure date is ${departureDate}`)
    }
  }
  return (
    <Form action="" method="POST" onSubmit={handleSubmit}>
      <Dropdown
        placeholder="Select flight type"
        options={options}
        onSelect={handleClick}
      ></Dropdown>
      <Input
        id="Departure"
        type="date"
        value={departureDate}
        onChange={(e) => handleChangeDate(e, 'departure')}
      ></Input>
      <Input
        id="Return"
        type="date"
        value={returnDate}
        onChange={(e) => handleChangeDate(e, 'return')}
        style={{ display: ret ? 'block' : 'none' }}
      ></Input>
      <Button type="submit">Search Flights</Button>
    </Form>
  )
}
export default FlightBooker
