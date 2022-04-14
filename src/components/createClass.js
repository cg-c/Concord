import React, { useState } from 'react';
import { TextField, DialogActions } from '@matierial-ui/core';
import { Button } from 'react-bootstrap';
import { auth, db } from '../firebase/firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';

// https://www.youtube.com/watch?v=Jppu8FCEoOg around 1 hr 20 min in


const createClass = () => {

    const [className, setClassName] = useState('');

    const addClass = (e) => {
        e.preventDeafult();
    }

    return (
        <div className='form'>
            <p>
                Create a class
            </p>

            <div className='form__inputs'>
                <TextField 
                    id='filled-basic' 
                    label='Class Name (required)' 
                    className='form__input' 
                    varient='filled' 
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                />
            </div>

            <DialogActions>
                <Button onClick={addClass}>
                    Create
                </Button>
            </DialogActions>

        </div>
    );
} 

export default createClass;