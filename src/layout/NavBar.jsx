import React from 'react';
import { NavLink } from 'react-router-dom';
import { publicLinks } from '../constants/links';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink to={publicLinks.home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={publicLinks.Login}>Login</NavLink>
        </li>
        <li>
          <NavLink to={publicLinks.Registration}>Sign up</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
