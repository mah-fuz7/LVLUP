import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
const Navbar = () => {
  const {user,signoutFunc}=useContext(AuthContext)
  console.log(user?.photoURL)

    return (
      <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    
    <Link to="/" className="btn btn-ghost text-4xl font-bold font-poppins text-red-500">LvlUp🏎️</Link>
  </div>

  
  <div className="navbar-center  lg:flex">

    <div className=" px-1  ">

     <NavLink to="/home" className={({isActive} )=>
      isActive?"btn text-white  bg-blue-500 mr-3":"  mr-3"
     }>Home</NavLink>
      {
        user?"":<NavLink to="/Register" className={({isActive})=>
      isActive?"btn text-white  bg-blue-500 mr-3":"  mr-3"
     }>Register</NavLink>
      }
        
      <NavLink to="/Allapps" className={({isActive})=>
      isActive?"btn text-white  bg-blue-500 mr-3":"  mr-3"
     }>Allapps</NavLink>
     {
      user?'': <NavLink to="/login" className={({isActive})=>
      isActive?"btn text-white  bg-blue-500 mr-3":"  mr-3 "
     }>Login</NavLink>
     }
    </div>
  </div>
{

}
  <div className="navbar-end">
    <div>
      <Link to={"/userprofile"}>      <img src={user?.photoURL} className='h-12 w-12 mr-3 rounded-full' alt="" />
</Link>
<p>{user?.displayName}</p>
    </div>
    <a onClick={signoutFunc} className="btn bg-linear-to-t from-sky-500 to-indigo-500">Logout</a>
  </div>
</div>
    );
};

export default Navbar;