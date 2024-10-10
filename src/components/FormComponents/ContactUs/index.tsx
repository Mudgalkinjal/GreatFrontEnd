import { useState } from 'react'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import submitForm from './submitForm'

const ContactUs: React.FC = () => {
  const labelArr = ['Name', 'Email', 'Message']
  const [formData, setFormData] = useState({ Name: '', Email: '', Message: '' })
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    label: string
  ) => {
    setFormData({ ...formData, [label]: e.target.value })
  }
  return (
    <form
      onSubmit={submitForm}
      action="https://www.greatfrontend.com/api/questions/contact-form"
      method="POST"
    >
      {labelArr.map((elem, key) => (
        <div key={key}>
          <label>{elem} </label>
          <Input
            name={elem.toLowerCase()}
            onChange={(e) => handleChange(e, elem)}
            value={formData[elem as keyof typeof formData]}
            type="text"
            placeholder={`Enter ${elem}`}
          />
        </div>
      ))}
      <div>
        <Button>Submit</Button>
      </div>
    </form>
  )
}

export default ContactUs
