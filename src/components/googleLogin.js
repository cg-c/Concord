import React, { useState } from 'react';
import 'firebase/firestore';
import 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import GoogleButton from 'react-google-button';
import { PageHeader } from './styles/Headers.styled';
import { FooterLogo } from './styles/FooterLogo.styled';
import { useUserAuth } from '../context/userAuthContext';


const Login = () => {
    const {googleSignIn} = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const buttonStyle = {
      display: "flex",
      backgroundColor: "#ffffff",
      color: "#3d3b40",
      borderRadius: "8px",
      alignItems: "center",
      justifyContent: "center",
      
    }

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
            <PageHeader> login </PageHeader>
            <GoogleButton onClick={handleGoogleSignIn} style={buttonStyle} />
            <FooterLogo>
              <img src="LongLogo.png"></img>
            </FooterLogo>
        </>
    );
};

export default Login;