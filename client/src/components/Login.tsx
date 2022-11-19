import React from 'react';
import './Login.css';

const Login: React.FC = () => {
  return (
    <div className="Login">
      <form>
        <h2 className="logo">J</h2>
        <h1 className="header">Login</h1>
        <div className="input-container">
          <label htmlFor="username">
            Username
          </label>
          <input type="text" name="username" placeholder="Type your username." />
        </div>
        <div className="input-container">
          <label htmlFor="password">
            Password
          </label>
          <input type="password" name="password" placeholder="Type your password." />
        </div>
        <button className="submit" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;