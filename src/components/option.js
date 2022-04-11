import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/userAuthContext';

const CreateUser = () => {

    const {saveUser} = useUserAuth();
    var teachBool;

    return (
        <form>
            <p> Are you a teacher or a student? </p>

            <input type="radio" name="ts" id="teacher" value="true" teachBool="true" />
            <label for="teacher"> Teacher </label>

            <input type="radio" name="ts" id="student" value="false" teachBool="false" />
            <label for="student"> Student </label>

            <input type="submit" onSubmit={saveUser(teachBool)}></input>
        </form>
    );
}

export default CreateUser;