import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";

import { useState, useEffect } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isAdminLoading, setAdminIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    //google log in function

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(result.user);
                saveUser(user.email, user.displayName, 'PUT');
            })
            .finally(() => setIsLoading(false));
    }
    //login with email
    const loginWithEmail = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }
    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    //register with email
    const registerWithEmail = (email, password, name) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUserName(name);
                saveUser(email, name, 'POST');
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }
    //set name
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    useEffect(() => {
        setAdminIsLoading(true);
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
            .finally(() => setAdminIsLoading(false))
    }, [user.email])

    //log out function
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        admin,
        isLoading,
        isAdminLoading,
        signInUsingGoogle,
        registerWithEmail,
        loginWithEmail,
        logOut
    }
}
export default useFirebase;