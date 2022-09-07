/* eslint-disable prettier/prettier */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { publicLinks } from '../constants/links';

function LoginButton() {
  return (
    <div>
      <NavLink
        to={publicLinks.LOGIN}
        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Login
      </NavLink>
    </div>
  );
}

export default LoginButton;
