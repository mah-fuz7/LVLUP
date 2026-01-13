import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
  const {user,setUser}=useContext(AuthContext)
  console.log(user?.photoURL)

    return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    
    <Link to="/" className="btn btn-ghost text-4xl font-bold font-poppins text-red-500">LvlUp🏎️</Link>
  </div>
  <div className="navbar-center  lg:flex">
    <div className=" px-1">
      <Link  to="/" className='m-3'>Home</Link>
        <Link  to="/Register" className='m-3'>Register</Link>
      <Link to="/Allapps" className='m-3'>Allapps</Link>
      <Link  to="/login" className='m-3'>Login</Link>
    </div>
  </div>
  <div className="navbar-end">
    <div>
      <img src={user?.photoURL} className='h-12 w-12 mr-3 rounded-full' alt="" />
    </div>
    <a className="btn bg-linear-to-t from-sky-500 to-indigo-500">Logout</a>
  </div>
</div>
    );
};

export default Navbar;