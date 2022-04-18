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

    return (
        <>
            {/* Move this V and greeting function to dedicated landing page 
            <PageHeader id = "Greetings"/>*/}
            <PageHeader>
                courses
            </PageHeader>

            <CourseContainer>
                
                <CourseButton to="/courses/07498504-52c2-4ec1-a615-767f51b50c78" >
                    {/* parse course names/number of courses in function on this page
                        edit URL to be /courses/${courseId} for specific class IDs*/}
                    Software
                </CourseButton>
                <CourseButton to="/courses/87a284c6-b2d2-4fd7-9e0c-e75951ec48ed">
                    Chemistry II
                </CourseButton>
                <CourseButton to="/courses/d1761db2-1d25-48eb-a51b-e54d2a071b55">
                    Calc I
                </CourseButton>
                <CourseButton to="/courses/17e26ffb-34cf-494b-96f6-70805c0463aa">
                    What is the good life?
                </CourseButton>
                <CourseButton to="/courses/8b8e6e88-a235-4478-9ca9-2bcf29f034f0">
                    Pottery
                </CourseButton>
            </CourseContainer>

            

            <FooterLogo>
                <img src="../LongLogo.png"></img>
            </FooterLogo>
        </>
    )

}

export default Courses;