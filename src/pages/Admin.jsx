import React from 'react';
import Navbar from '../layout/NavBar';

function Admin() {
  return (
    <div className="admin-container">
      <Navbar />
      <h1>This is the Admin page component protected</h1>
    </div>
  );
}

export default Admin;
