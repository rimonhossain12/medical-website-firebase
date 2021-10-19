import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebas.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut   } from "firebase/auth";


initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
            })
            .catch(error => setError(error.message))
    }

    const logOut = () => {
        signOut(auth).then(() => {
           setUser({});
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect( () => {
        onAuthStateChanged(auth,user=>{
            if(user){
                console.log('inside state change', user)
                setUser(user);
            }
        })
    },[])

    return {
        user,
        error,
        logOut,
        singInUsingGoogle

    }
}

export default useFirebase;