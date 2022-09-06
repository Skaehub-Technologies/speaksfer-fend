import React from 'react';
import { Link } from 'react-router-dom';
import { publicLinks, privateLinks } from '../constants/links';

function Navbar() {
  return (
    <nav className=" py-3 px-1 sticky top-0 border border-b-indigo-200 bg-gray-200 ">
      <ul className="flex justify-end font-semibold ">
        <li className="py-1 px-2 hover:text-indigo-700">
          <Link to={publicLinks.HOME}>Home</Link>
        </li>
        <li className="py-1 px-2 hover:text-indigo-700">
          <Link to={publicLinks.LOGIN}>Login</Link>
        </li>
        <li className="py-1 px-2 hover:text-indigo-700">
          <Link to={publicLinks.UNAUTHORIZED}>Unauthorized</Link>
        </li>
        <li className="py-1 px-2 hover:text-indigo-700">
          <Link to={publicLinks.PROFILE}>Profile</Link>
        </li>
        <li className="py-1 px-2 hover:text-indigo-700">
          <Link to={privateLinks.ADMIN}>Admin</Link>
        </li>
        <li className="py-1 px-2 hover:text-indigo-700">
          <Link to={privateLinks.EDITOR}>Editor</Link>
        </li>
        <li className="py-1 px-2 hover:text-indigo-700">
          <Link to={publicLinks.REGISTRATION}>SignUp</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
