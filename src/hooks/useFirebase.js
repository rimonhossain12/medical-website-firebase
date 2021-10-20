import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();

    const singInUsingGoogle = () => {
        
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);

            }).catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage);

            });
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser('');
            })
    }



    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
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