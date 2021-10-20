import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const singInUsingGoogle = () => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);

            })
            .finally(() => setIsLoading(false))
            .catch((error) => {

                const errorMessage = error.message;
                setError(errorMessage);

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
    }, [])


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
        error,
        logOut,
        isLoading,
        singInEmailPassword,
        singInUsingGoogle
    }
}

export default useFirebase;