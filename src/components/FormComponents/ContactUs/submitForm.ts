const SUBMIT_URL = 'https://www.greatfrontend.com/api/questions/contact-form'

export default async function submitForm(
  event: React.FormEvent<HTMLFormElement>
) {
  event.preventDefault()
  const form = event.currentTarget

  try {
    if (form.action !== SUBMIT_URL) {
      alert('Incorrect form action value')
      return
    }

    if (form.method.toLowerCase() !== 'post') {
      alert('Incorrect form method value')
      return
    }

    const formData = new FormData(form)
    const response = await fetch(SUBMIT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      }),
    })

    const text = await response.text()
    alert(text)
  } catch (error) {
    console.error('Error submitting form:', error)
    alert('Error submitting form!')
  }
}
