import React from "react";
import ReactDOM from "react-dom";
import { Form, useField, useForm } from "amiable-forms";
import "./styles.css";

const Input = props => {
  const { value, onChange } = useField({ name: props.name });
  return <input {...props} value={value} onChange={onChange} />;
};

const SubmitButton = () => {
  const { onSubmit } = useForm();
  return <button onClick={onSubmit}>Login</button>;
};

const process = values => console.log("Submit", values);

const LoginForm = () => (
  <Form process={process}>
    <Input name="username" placeholder="username" />
    <Input name="password" placeholder="password" type="password" />
    <SubmitButton />
  </Form>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<LoginForm />, rootElement);
