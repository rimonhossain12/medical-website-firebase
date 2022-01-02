import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const googleSingIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                // saveUser(user.email, user.displayName, 'PUT');
                const destination = location?.state?.from || '/';
                history.push(destination);
            }).catch((error) => {
                // setAuthError(error.message);
            });
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser('');
            }).finally(() => setIsLoading(false));
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        })
    }, [auth])


    // email and password
    const singInEmailPassword = (email, password, name) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {

                });
            })
            .catch((error) => {
                switch (error.code) {

                }
            });
    }

    return {
        user,
        // error,
        logOut,
        isLoading,
        singInEmailPassword,
        googleSingIn,
    }
}

export default useFirebase;