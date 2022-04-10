import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import GoogleButton from 'react-google-button';
import { useUserAuth } from '../context/userAuthContext';


const Login = () => {
    const {googleSignIn} = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        
        try {
          await googleSignIn();
          navigate("/course");
        } catch (error) {
          console.log(error.message);
        }
      };

    return (
        <>
            <GoogleButton onClick={handleGoogleSignIn} />
        </>
    );
};

export default Login;