import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/userAuthContext';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from './styles/PageHeader.styled';
import { FooterLogo } from './styles/FooterLogo.styled';
import { CourseContainer, CourseButton } from './styles/CourseAssets.styled';
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import FileUpload from './uploadFile'

const Course = () => {
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

    const handleNavVideo = async () => {
        navigate("/video");
    }

    function greetUser() {
        const docRef = doc(db, 'User', user.email);     //gets current user's database object
        getDoc(docRef).then(docSnap => {
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
            {/* Move this V and greeting function to dedicated landing page 
            <PageHeader id = "Greetings"/>*/}
            <PageHeader>
                Courses
            </PageHeader>

            <CourseContainer>
                <CourseButton>
                    {/* parse course names/number of courses in function on this page */}
                </CourseButton>
                <CourseButton >
                    Course 2
                </CourseButton>
                <CourseButton >
                    Course 3
                </CourseButton>
                <CourseButton >
                    Course 4
                </CourseButton>
                <CourseButton >
                    Course 5
                </CourseButton>
                <CourseButton >
                    Course 6
                </CourseButton>
            </CourseContainer>

            {/* <div>
                <Button onClick={handleLogOut}>
                    Log Out
                </Button>
            </div> */}

            {/* <Button onClick={handleNavVideo}>
                Launch Video
            </Button>
            <FileUpload /> */}
            <FooterLogo>
                <img src="LongLogo.png"></img>
            </FooterLogo>
        </>
    )

}

export default Course;