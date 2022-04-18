import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { Button } from 'react-bootstrap';
import {v4 as uuidV4} from 'uuid';
import {  db } from '../firebase/firebaseConfig';
import 'firebase/auth';
import {  updateDoc, setDoc, doc, arrayUnion } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/userAuthContext';
import { StyledForm } from './styles/Form.styled';


// https://www.youtube.com/watch?v=Jppu8FCEoOg around 1 hr 20 min in

// Style the input https://mui.com/material-ui/react-text-field/


const CreateClass = () => {

    const [className, setClassName] = useState('');
    const {user} = useUserAuth();
    const navigate = useNavigate();

    const addClass = (e) => {
        e.preventDefault();
        const id = uuidV4();

        const docRef = doc(db, "Course", id)
            setDoc(docRef, {
                teachers: user.email,
                className: className,
                courseCode: id
            })
        .then(() => {
            const docRef = doc(db, "User", user.email)
            updateDoc(docRef, {
                courses: arrayUnion(id)
            });

            navigate("/courses");
        });
    }

    return (
        <StyledForm>
        <div className='form'>
            <p>
                Create a class
            </p>

            <div>
                <TextField 
                    id='standard-required' 
                    label='Class Name' 
                    varient='standard' 
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                />
            </div>

            <Button onClick={addClass}>
                Create
            </Button>


        </div>
        </StyledForm>
    );
} 

export default CreateClass;