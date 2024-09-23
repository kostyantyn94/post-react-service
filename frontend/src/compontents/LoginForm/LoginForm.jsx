import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormFieldset from "../FormFieldset/FormFieldset";

function LoginForm({ onError }) {
  const [{ email, password }, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(`Email: ${email}, Password: ${password}`);

    navigate("/");
  };

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((form) => ({ ...form, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormFieldset
        type="email"
        name="email"
        required
        placeholder="Email"
        value={email}
        handler={inputHandler}
        autoFocus
      ></FormFieldset>

      <FormFieldset
        type="password"
        name="password"
        required
        placeholder="Password"
        value={password}
        handler={inputHandler}
        autoFocus
      ></FormFieldset>

      <button className="btn btn-lg btn-primary pull-xs-right">Login</button>
    </form>
  );
}

export default LoginForm;
