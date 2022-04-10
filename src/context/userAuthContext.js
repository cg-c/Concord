import { createContext, useContext, useEffect, useState } from 'react';
import { signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState({});

    function googleSignIn() {
        const googProv = new GoogleAuthProvider();
        return signInWithPopup(auth, googProv);
        // .then((result) => {
        //     const credential = GoogleAuthProvider.credentialFromResult(result);
        //     const token = credential.accessToken;
        //     const user = result.user;
        //   }).catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     const email = error.email;
        //     const credential = GoogleAuthProvider.credentialFromError(error);
        //   });
    }

    function logOut() {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <userAuthContext.Provider value={{user, logOut, googleSignIn}}> 
            {children} 
        </userAuthContext.Provider>
    ); 
}

export function useUserAuth() {
    return useContext(userAuthContext);
}