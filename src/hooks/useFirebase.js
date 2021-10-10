import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user)
        })
    }

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
            console.log('log out success')
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
          });
    }, [])

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;