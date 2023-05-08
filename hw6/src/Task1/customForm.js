import { useState } from "react";

const Form = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeLogin = (event) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!login.length || !password.length) {
      return;
    } else {
      setLogin("");
      setPassword("");

      alert(`Ваш логин ${login}, пароль ${password}`);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input"
        name="login"
        placeholder="Your login"
        value={login}
        onChange={handleChangeLogin}
      />
      <input className="input"
        name="password"
        placeholder="Your password"
        value={password}
        onChange={handleChangePassword}
        type="password"
      />

      <button className="submit-btn" type="submit">Submit</button>
    </form>
  );
};

export default Form;
