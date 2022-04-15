import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/userAuthContext';
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {

    const {saveUser} = useUserAuth();
    const navigate = useNavigate();
    var teachbool;
    // FIX SAVING THIS VAR

    const handleOptionSubmit = async() => {
        await saveUser(teachbool);
        navigate("/courses");
    }

    return (
        <form>
            <p> Are you a teacher or a student? </p>

            <input type="radio" name="ts" id="teacher" value="true" teachbool="true" />
            <label for="teacher"> Teacher </label>

            <input type="radio" name="ts" id="student" value="false" teachbool="false" />
            <label for="student"> Student </label>

            <input type="submit" onSubmit={saveUser(teachbool)}></input>
        </form>
    );
}

export default CreateUser;