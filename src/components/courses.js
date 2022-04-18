import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/userAuthContext';
import { Outlet, useNavigate } from 'react-router-dom';
import { PageHeader } from './styles/Headers.styled';
import { FooterLogo } from './styles/FooterLogo.styled';
import { CourseContainer, CourseButton } from './styles/CourseAssets.styled';
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import { NavButton } from './styles/NavButton.styled';
import { MyNavbar } from './NavBar';

const Courses = () => {
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



    /* function greetUser() {
        try {
        const docRef = doc(db, 'User', user.email);     //gets current user's database object
        getDoc(docRef).then(docSnap => {
            if (docSnap.exists()) {
                document.getElementById('Greetings').textContent = ("Hello " + docSnap.data().fullName);  //set greeting header to include user's name
            } else {
                console.log("No such document!");
            }
        });
        }
        catch(err) {
            console.log(err.message)
        }
    }

    greetUser(); */

    return (
        <>
            {/* Move this V and greeting function to dedicated landing page 
            <PageHeader id = "Greetings"/>*/}
            <PageHeader>
                courses
            </PageHeader>

            <CourseContainer>
                
                <CourseButton to="/class" >
                    {/* parse course names/number of courses in function on this page
                        edit URL to be /courses/${courseId} for specific class IDs*/}
                    Biology
                </CourseButton>
                <CourseButton to="/class">
                    Chemistry II
                </CourseButton>
                <CourseButton to="/class">
                    Calc I
                </CourseButton>
                <CourseButton to="/class">
                    What is the good life?
                </CourseButton>
                <CourseButton to="/class">
                    Pottery
                </CourseButton>
                {/* <CourseButton to="class">
                    Course 6
                </CourseButton> */}
            </CourseContainer>

            

            <FooterLogo>
                <img src="LongLogo.png"></img>
            </FooterLogo>
        </>
    )

}

export default Courses;