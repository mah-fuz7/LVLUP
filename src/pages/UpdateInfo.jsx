import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
// import { auth } from '../firebase/firebase.config';
import { useNavigate } from 'react-router';
import bgimg from '../assets/banner bg 2.jpg'

const UpdateInfo = () => {
const navigate=useNavigate()
const {updateProfileFunc}=useContext(AuthContext)

const hadleUpdateInfo=(event)=>{
    event.preventDefault()
const displayName=event.target.name.value
const photoURL=event.target.imgUrl.value
console.log(displayName,photoURL)
updateProfileFunc({displayName,photoURL})
.then(()=>{
    // setUser(auth.currentUser)
        navigate('/home')

})
.catch(error=>{
console.log(error.message)
})
}
    return (
        <div
  className="hero min-h-screen"
  style={{ backgroundImage: `url('${bgimg}')` }}
>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
<form onSubmit={hadleUpdateInfo}>
     <fieldset className="fieldset">
  <legend className="text-3xl text-black font-bold mb-3">Update Your Name</legend>
  <input name='name' type="text" className="input  text-2xl text-black" placeholder="Type here" />
</fieldset>
<fieldset className="fieldset">
  <legend className="text-3xl text-black font-bold mb-3">Update Yout Photo URL</legend>
  <input name='imgUrl' type="text" className="input text-2xl text-black" placeholder="Type here" />
</fieldset>
      <button  className="btn btn-primary my-5">Update</button>
  </form>
    </div>
  </div>
</div>
    );
};

export default UpdateInfo;