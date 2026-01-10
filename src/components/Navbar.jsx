import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    
    <Link to="/" className="btn btn-ghost text-4xl font-bold font-poppins text-red-500">LvlUp🏎️</Link>
  </div>
  <div className="navbar-center  lg:flex">
    <div className=" px-1">
      <Link  to="/" className='m-3'>Home</Link>
        <Link  to="/signin" className='m-3'>SignIn</Link>
      <Link to="/appsdetails" className='m-3'>AppsDetails</Link>
      <Link  to="/login" className='m-3'>Login</Link>
    </div>
  </div>
  <div className="navbar-end">
    <a className="btn">User</a>
  </div>
</div>
    );
};

export default Navbar;