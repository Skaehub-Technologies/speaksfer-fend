/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function FormValidators() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [usernameError, setusernameError] = useState('');
  const [emailError, setemailError] = useState('');

  const handleValidation = (e) => {
    let formIsValid = true;

    if (!password.match(/^[()[\]{}|\\`~!@#$%^&*_\-+=;:'",<>./?][a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special symbol'
      );
      return false;
    }
    setpasswordError('');
    formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError('Email Not Valid');
      return false;
    }
    setemailError('');
    formIsValid = true;

    if (!username.match(/^{8, 20}$/)) {
      formIsValid = false;
      setusernameError('Username should contain at least 8 characters');
      return false;
    }
    setusernameError('');
    formIsValid = true;

    return formIsValid;
  };

  const formSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };
}
