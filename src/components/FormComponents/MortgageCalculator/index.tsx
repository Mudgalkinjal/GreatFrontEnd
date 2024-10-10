import Form from '../../UI/Form'
import Input from '../../UI/Input'
import { useState } from 'react'

const MortgageCalculator = () => {
  const [monthlyPay, setMonthlyPay] = useState('')
  const [totalPay, setTotalPay] = useState('')
  const [totalInt, setTotalInt] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const loanAmount = formData.get('loanAmt')
    const loanTerm = formData.get('loanTrm')
    const interest = formData.get('interestRate')

    if (loanAmount === null || loanTerm === null || interest === null) {
      console.error('One or more fields are empty.')
      return
    }

    const loanAmountValue = Number(loanAmount)
    const loanTermValue = Number(loanTerm)
    const interestValue = Number(interest) / 100

    if (
      isNaN(loanAmountValue) ||
      isNaN(loanTermValue) ||
      isNaN(interestValue)
    ) {
      console.error('Invalid input values.')
      return
    }

    const r = interestValue / 12
    const n = loanTermValue * 12

    const monthlyPayment =
      (loanAmountValue * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1)

    const totalPayment = monthlyPayment * n

    const totalInterest = totalPayment - loanAmountValue

    console.log('Monthly Payment:', monthlyPayment.toFixed(2))
    console.log('Total Payment:', totalPayment.toFixed(2))
    console.log('Total Interest:', totalInterest.toFixed(2))
    setMonthlyPay(monthlyPayment.toFixed(2))
    setTotalPay(totalPayment.toFixed(2))
    setTotalInt(totalInterest.toFixed(2))
  }
  return (
    <Form action="" method="POST" onSubmit={handleSubmit}>
      <div>
        <label>Loan Amount: </label>
        <Input name="loanAmt" type="number"></Input>
      </div>
      <div>
        <label>Loan Term (years): </label>
        <Input name="loanTrm" type="number"></Input>
      </div>
      <div>
        <label>Interest Rate (%): </label>
        <Input name="interestRate" type="number"></Input>
      </div>
      <div>
        <button type="submit">Calculate</button>
      </div>
      <div>
        <div>
          <label>Monthly Payment Amount: {monthlyPay}</label>
        </div>
        <div>
          <label>Total Payment Amount: {totalPay}</label>
        </div>
        <div>
          <label>Total Interest Paid: {totalInt}</label>
        </div>
      </div>
    </Form>
  )
}

export default MortgageCalculator
