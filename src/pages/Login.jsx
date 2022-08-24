/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { API } from '../api/ApiService';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginView, setIsLoginView] = useState(true);
  const emailRef = useRef();

  const [token, setToken] = useCookies(['app-token']);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    if (token['app-token']) window.location.href = '/';
  }, [token]);

  const loginClicked = () => {
    API.loginUser({ email, password })
      .then((resp) => setToken('app-token', resp.token))
      .catch((error) => console.log(error));
    setEmail('');
    setPassword('');
  };
  const registerClicked = () => {
    API.registerUser({ email, password })
      .then(() => loginClicked())
      .catch((error) => console.log(error));
  };
  const isDisabled = email.length === 0 || password.length === 0;

  return (
    <div className="App">
      <header className="App-header">{isLoginView ? <h1>Login</h1> : <h1>Register</h1>}</header>
      <div className="login-container">
        <label htmlFor="email">Email</label>
        <br />
        <input
          id="email"
          type="email"
          placeholder="Email Address"
          autoComplete="off"
          ref={emailRef}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        {isLoginView ? (
          <button onClick={loginClicked} disabled={isDisabled}>
            Login
          </button>
        ) : (
          <button onClick={registerClicked} disabled={isDisabled}>
            Register
          </button>
        )}

        {isLoginView ? (
          <p onClick={() => setIsLoginView(false)}>You don't have an account? Register here!</p>
        ) : (
          <p onClick={() => setIsLoginView(true)}>You already have an account? Login here</p>
        )}
      </div>
    </div>
  );
}

export default Login;
