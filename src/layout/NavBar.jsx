/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { publicLinks } from '../constants/links';
import logo from '../images/logo.svg';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import useAuth from '../hooks/useAuth';

function Navbar() {
  // eslint-disable-next-line no-unused-vars
  const { auth } = useAuth();
  return (
    <div>
      <nav className="bg-gray-800 shadow">
        <div className="container flex flex-wrap justify-between items-center h-16 mx-auto">
          <div className="flex items-center">
            <img src={logo} alt="speaksfer" className="mr-3 h-6 sm:h-9" />
          </div>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <AiOutlineMenu size={25} className="text-white" />
          </button>
          <div className="hidden md:block" id="navbar-default">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to={publicLinks.HOME}
                className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to={publicLinks.PROFILE}
                className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Profile
              </NavLink>
              <NavLink
                to={publicLinks.HOME}
                className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Write
              </NavLink>
              {auth.isLoggedIn ? <LogoutButton /> : <LoginButton />}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
