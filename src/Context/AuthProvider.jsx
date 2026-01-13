import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { auth } from "../firebase/firebase.config"
import { AuthContext } from "./AuthContext"
import { useEffect, useState } from "react";

const AuthProvider=({children})=>{
    
    const provider = new GoogleAuthProvider();
// user state
const [user,setUser]=useState(null)

// RegisterFunc
const createuserwithEmailAndPasswordFunc=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

// updateProfile add img link and name
const updateProfileFunc=({photoURL,displayName })=>{
    return updateProfile(auth.currentUser,{displayName,photoURL})
}

// sign in with google popUp

const signinwithGoogleFunc=()=>{
    return signInWithPopup(auth,provider)
}
// login with Email and password
const signInWithEmailAndPasswordFunc=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
// reset password
const resetPasswordFunc=(email)=>{
    return sendPasswordResetEmail(auth,email)
}
// signout
const signoutFunc=()=>{
    return signOut(auth)
}


// authInfo obj
const authInfo={
    user,
    setUser,
createuserwithEmailAndPasswordFunc,
updateProfileFunc,
signinwithGoogleFunc,
signInWithEmailAndPasswordFunc,
resetPasswordFunc,
signoutFunc


}
// stateChange
useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currUser)=>{
       setUser(currUser)
    });

    return ()=>{
        unsubscribe();
    }

},[]);

    return  <AuthContext value={authInfo}>
     {children}
    </AuthContext>
}
export default AuthProvider