import React from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth } from '../firebase/firebaseConfig';
import { signInWithCredential, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


function Login() {
    const signInWithGoogle = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((result) => {
            const fName = result.user.displayName;
            const email = result.user.email;
        })
        .catch((err) => {
            console.log(err);
        });
    }


    return (
        <div className="App">
            <button onClick={signInWithGoogle}> Sign In With Google </button>
        </div>
    )
}

export default Login;