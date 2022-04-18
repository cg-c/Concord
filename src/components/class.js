import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/userAuthContext';
import { useNavigate, useParams } from 'react-router-dom';
import { PageHeader } from './styles/Headers.styled';
import { db } from '../firebase/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import FileUpload from './uploadFile'
import { StyledForm } from './styles/Form.styled';

const Class = () => {
    const { user, logOut } = useUserAuth();
    const navigate = useNavigate();
    const { courseCode } = useParams();
    const [teacher, setTeacher] = useState('');
    var isTeacher = 'true';

    const handleLogOut = async () => {
        try {
            await logOut();
        }
        catch (err) {
            console.log(err.message);
        }
    }

    const handleNavVideo = async () => {
        navigate(`/video/${courseCode}`);
    }


    async function greetUser() {
        const docRef = doc(db, 'User', user.email); //gets current user's database object
        await getDoc(docRef).then(docSnap => {
            if (docSnap.exists()) {
                document.getElementById('Greetings').innerHTML = ("Hello " + docSnap.data().fullName);  //set greeting header to include user's name
                setTeacher(docSnap.data().teacher);
            } else {
                console.log("No such document!");
            }
        });
    }

    function setCourse() {
        const docRef = doc(db, 'Course', courseCode);
        getDoc(docRef).then(docSnap => {
            if (docSnap.exists()) {
                document.getElementById('Course').innerHTML = (docSnap.data().className);
                const profRef = doc(db, 'User', docSnap.data().teachers);
                getDoc(profRef).then(profSnap => {
                    if (profSnap.exists()) {
                        document.getElementById('Professor').innerHTML = ("Professor: " + profSnap.data().fullName);
                    }
                })
            }
        })
    }

    const handleCreateClass = async () => {
        navigate("/createCourse");
    }

    const handleAddClass = async () => {
        navigate("/joinCourse");
    }

    greetUser();

    setCourse();

    return (
        <>
            <PageHeader id="Course" style={{ fontSize: '50px' }}>
                Course
            </PageHeader>
            <StyledForm>
                <div id="Professor">Professor</div>
                <div id="Greetings">Hello </div>
            </StyledForm>
            {console.log(isTeacher)}
            {(teacher === "true") ? (
                <div id="teachFunctionality">
                    <Button onClick={handleCreateClass}>
                        Create Course
                    </Button>
                    <br></br>
                    <Button onClick={handleNavVideo}>
                        Launch Video
                    </Button>

                    <FileUpload />
                </div>) : (teacher === "false") ? (
                    <div id="studentFunctionality">
                        <Button id="joinCourse" onClick={handleAddClass}>
                            Join Course
                        </Button>
                    </div>) : null}
        </>
    )

}

export default Class;