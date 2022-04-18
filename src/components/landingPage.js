import React , {useState} from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/userAuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { PageHeader } from './styles/Headers.styled';
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc} from 'firebase/firestore';
import FileUpload from './uploadFile';
import { FooterLogo } from './styles/FooterLogo.styled';

const LandingPage = () => {
    const { user, logOut } = useUserAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        try {
            await logOut();
        }
        catch (err) {
            console.log(err.message);
        }
    }


    async function greetUser() {
        const docRef = doc(db, 'User', user.email); //gets current user's database object
        await getDoc(docRef).then(docSnap => {
            if (docSnap.exists()) {
                document.getElementById('Greetings').innerHTML = ("Hello " + docSnap.data().fullName);  //set greeting header to include user's name
            } else {
                console.log("No such document!");
            }
        });
    }

    greetUser();

    return (
        <>
            <PageHeader id = "Greetings"/>

            <FooterLogo>
                <img src="LongLogo.png"></img>
            </FooterLogo>
        </>
    )

}

export default LandingPage;