import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/userAuthContext';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from './styles/PageHeader.styled';
import { db } from '../firebase/firebaseConfig';
import {collection, doc, getDoc, where} from 'firebase/firestore';

const Course = () => {
    const {user, logOut} = useUserAuth();
    const navigate = useNavigate();

    const handleLogOut = async() => {
        try {
            await logOut();
        }
        catch (err) {
            console.log(err.message);
        }
    }

    const handleNavVideo = async() => {
        navigate("/video");
    }

    function greetUser(){
        const docRef = doc(db, 'User', user.email);
        getDoc(docRef).then(docSnap => {
            if (docSnap.exists()) {
            document.getElementById('Greetings').innerHTML = ("Hello " + docSnap.data().fullName); 
          } else {
            console.log("No such document!");
        }});
    }

    greetUser();

    return (
        <>
            <PageHeader id = "Greetings" style={{fontSize: '50px'}}>
                Hello 
            </PageHeader>

            <div>
                <Button onClick={handleLogOut}>
                    Log Out
                </Button>
            </div>

            <Button onClick={handleNavVideo}>
                Launch Video
            </Button>
        </>
    )

}

export default Course;