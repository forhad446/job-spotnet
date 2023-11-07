import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../config/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);

    // signUp new user
    const createUser = (email, password) => {
        // setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // sign in user 
    const signInUser = (email, password) => {
        // setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // sign in with google
    const googleSignIn = () => {
        const Provider = new GoogleAuthProvider();
        return signInWithPopup(auth, Provider);
    }
    // current user
    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // setIsLoading(false);
                setUser(currentUser);
            } else {
                // User is signed out
                // setIsLoading(false);
            }
        });

        return () => {
            subscribe();
        };

    }, [user])

    const authInfo = {
        user,
        createUser,
        signInUser,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;