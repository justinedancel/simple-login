import React, { useState, ChangeEvent } from 'react';
import './Login.css';

interface LoginProps {
  onLoginSubmit: (username: string, password: string) => void;
};

const Login: React.FC<LoginProps> = props => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ username: string, password: string }>({
    username: "Username is required.",
    password: "Password is required.",
  });

  const onUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value;

    if (!newUsername) {
      setErrors(oldErrors => ({...oldErrors, username: "Username is required."}));
    } else if (newUsername.length < 6) {
      setErrors(oldErrors => ({...oldErrors, username: "Username must be at least 6 characters."}));
    } else {
      setErrors(oldErrors => ({...oldErrors, username: ""}));
    }

    setUsername(newUsername);
  };

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;

    if (!newPassword) {
      setErrors(oldErrors => ({...oldErrors, password: "Password is required."}));
    } else if (newPassword.length < 8) {
      setErrors(oldErrors => ({...oldErrors, password: "Password must be at least 8 characters."}));
    } else {
      setErrors(oldErrors => ({...oldErrors, password: ""}));
    }

    setPassword(newPassword);
  };

  const loginSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (errors.username === "" && errors.password === "") {
      props.onLoginSubmit(username, password)
    } else {
      console.log("Form is invalid.", errors)
    }
  };

  return (
    <div className="Login">
      <form onSubmit={loginSubmitHandler}>
        <h1 className="header">Login</h1>
        <div className="input-container">
          <label htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Type your username."
            onChange={onUsernameChange}
          />
          <span className="error-message">{errors.username}</span>
        </div>
        <div className="input-container">
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Type your password."
            onChange={onPasswordChange}
          />
          <span className="error-message">{errors.password}</span>
        </div>
        <button className="submit" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;