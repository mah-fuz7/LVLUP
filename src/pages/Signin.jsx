import React from 'react';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

const Signin = () => {

const handleSignin=(event)=>{
event.preventDefault();

// sign in functionality
const email=event.target.email.value
const Password=event.target.Password.value
 createUserWithEmailAndPassword(auth,email,Password)
 .then(result=>{
  console.log(result.user)
 })
 .catch(error=>{
  console.log(error.message)
 })

}

    return (
                <form onSubmit={handleSignin}>

       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold lg:ml-[40%]">Sign In now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
            <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name='Password' type="password" className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Sign In</button>
        </fieldset>
      </div>
    </div>
  </div>
</div> 
        </form>

    );
};

export default Signin;