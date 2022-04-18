import React, { useState } from 'react';
import 'firebase/firestore';
import 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { PageHeader } from './styles/PageHeader.styled';
import { FooterLogo } from './styles/FooterLogo.styled';
import { useUserAuth } from '../context/userAuthContext';


const Login = () => {
    const {googleSignIn} = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        
        try {
        const user = await googleSignIn();

          navigate("/createUser");
        } catch (error) {
          console.log(error.message);
        }
      };

    return (
        <>
            <PageHeader> Login </PageHeader>
            <GoogleButton onClick={handleGoogleSignIn} />
            <FooterLogo>
              <img src="LongLogo.png"></img>
            </FooterLogo>
        </>
    );
};

export default Login;