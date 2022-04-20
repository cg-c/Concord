import React, { useState } from 'react';
import { useUserAuth } from '../context/userAuthContext';
import { useNavigate } from 'react-router-dom';
import { StyledForm } from './styles/Form.styled';


const CreateUser = () => {
    const {saveUser} = useUserAuth();
    const navigate = useNavigate();
    const [ts, setTs] = useState("");


    const handleOptionSubmit = async() => {
        
        if (document.getElementById("student").checked === true) {
            var teachbool = "false";

            await saveUser(teachbool);
             navigate("/home");

        }
        else if (document.getElementById("teacher").checked) {
            var teachbool = "true";

            await saveUser(teachbool);
            navigate("/home");
        }
        else {
            console.log("Error!");
            navigate("/");
        }
    }

    return (
        <StyledForm>
        <form name="options" onSubmit={handleOptionSubmit()} >
            <p> Are you a teacher or a student? </p>

            <input type="radio" name="ts" id="teacher" value="true" onChange={(e) => setTs("checked")} checked={ts === "checked"} />
            <label for="teacher"> Teacher </label>

            <input type="radio" name="ts" id="student" value="false" onChange={(e) => setTs("checked")} checked={ts === "checked"} />
            <label for="student"> Student </label>

        </form>
        </StyledForm>

    );
}

export default CreateUser;