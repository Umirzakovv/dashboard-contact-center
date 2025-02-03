import { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsInJvbGUiOiJmcm9udGVuZF9kZXYifQ.x8NUwOu1voxJGjvl7eNXY9RnhulFoi9Oa9fpKws9Hf4";

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [errorText, setErrorText] = useState("");

  const handleUsernameChange = (e) => {
    const value = e.currentTarget.value;

    setFormValues((prevValues) => ({
      ...prevValues,
      username: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const value = e.currentTarget.value;

    setFormValues((prevValues) => ({
      ...prevValues,
      password: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formValues.username === "admin" && formValues.password === "admin") {
      localStorage.setItem("dashboard_token", token);
      navigate("/");
    } else {
      setErrorText("Неверное имя пользователя или пароль");
    }
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Вход в систему UCC WFM</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">Имя пользователя</label>
            <input
              type="text"
              id="username"
              placeholder="Введите имя пользователя"
              onChange={(e) => handleUsernameChange(e)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              id="password"
              placeholder="Введите пароль"
              onChange={(e) => handlePasswordChange(e)}
            />
            <p className="error-text">{errorText}</p>
          </div>
          <button type="submit" className="login-btn">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
