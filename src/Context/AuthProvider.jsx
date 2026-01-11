import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth"
import { auth } from "../firebase/firebase.config"
import { AuthContext } from "./AuthContext"

const AuthProvider=({children})=>{
    
    const provider = new GoogleAuthProvider();


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




// authInfo obj
const authInfo={
createuserwithEmailAndPasswordFunc,
updateProfileFunc,
signinwithGoogleFunc


}

    return <AuthContext value={authInfo}>
     {children}
    </AuthContext>
}
export default AuthProvider