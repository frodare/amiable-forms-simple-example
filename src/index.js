import React from 'react'
import ReactDOM from 'react-dom'
import { Form, useField, useSubmit, useFieldValue } from 'amiable-forms'
import './styles.css'

const Input = props => {
  const { value, onChange } = useField({ name: props.name })
  return <input {...props} value={value} onChange={onChange} />
}

const Welcome = () => {
  const username = useFieldValue({ name: 'username' })
  return <h1>Welcome {username ? username : ''}</h1>
}

const Remember = () => {
  const { value, setValue } = useField({ name: 'remember' })
  return (
    <label>
      <input
        type="checkbox"
        value={value}
        onChange={ev => setValue(ev.target.checked)}
      />
      remember login
    </label>
  )
}

const SubmitButton = () => {
  const { onSubmit } = useSubmit()
  return (
    <button type="submit" onClick={onSubmit}>
      Login
    </button>
  )
}

const process = values => console.log('Submit', values)

const LoginForm = () => (
  <Form className="login" process={process}>
    <Welcome />
    <Input name="username" placeholder="username" />
    <Input name="password" placeholder="password" type="password" />
    <Remember />
    <SubmitButton />
  </Form>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<LoginForm />, rootElement)
