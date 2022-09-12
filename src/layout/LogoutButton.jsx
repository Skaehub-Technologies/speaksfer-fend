/* eslint-disable prettier/prettier */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { publicLinks } from '../constants/links';
import useLogout from '../hooks/useLogout';

export default function LogoutButton() {
  return (
    <div>
      <NavLink
        onClick={useLogout}
        to={publicLinks.HOME}
        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
      >
        Logout
      </NavLink>
    </div>
  );
}
