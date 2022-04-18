import React, {useState} from 'react';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/userAuthContext';
import { updateDoc, getDoc, doc, arrayUnion } from "firebase/firestore"; 
import {db} from "../firebase/firebaseConfig";
import { StyledForm } from './styles/Form.styled';

const JoinClass = () => {

    const [courseId, setCourseId] = useState('');
    const {user} = useUserAuth();
    const navigate = useNavigate();

    function joinClass(e){
        e.preventDefault();
        const docRef = doc(db, "Course", courseId);
        getDoc(docRef).then((documentSnapshot) => {
            if(documentSnapshot.exists()){
                try{
                    updateDoc(docRef, {
                        students: arrayUnion(user.email)
                    })
                    const userRef = doc(db, "User", user.email);
                    updateDoc(userRef, {
                        joinedCourses : arrayUnion(documentSnapshot.data().courseCode)
                    })
                    
                    // may have to change this to /class/?...
                    navigate(`/courses/?courseId=${courseId}`);
                }
                catch(error){
                    console.log(error);
                }
                //this intentionally throws an error to prevent joining oops
            }
            else{
                console.log("No such course")
            }
        })
    }


    return (
        <StyledForm>
        <div className='form'>
            <p>
                Enter a course ID to join:
            </p>

            <div>
                <TextField 
                    id='standard-required' 
                    label='Class ID' 
                    varient='standard' 
                    value={courseId}
                    onChange={(e) => setCourseId(e.target.value)}
                />
            </div>

            <Button onClick={joinClass}>
                Join
            </Button>


        </div>
        </StyledForm>
    );
}

export default JoinClass;