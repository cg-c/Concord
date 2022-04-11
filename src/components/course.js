import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/userAuthContext';
import { useNavigate } from 'react-router-dom';

const Course = () => {
    const {user, logOut} = useUserAuth();
    const navigate = useNavigate();

    const handleLogOut = async() => {
        try {
            await logOut();
        }
        catch (err) {
            console.log(err.message);
        }
    }

    const handleNavVideo = async() => {
        navigate("/video");
    }


    return (
        <>
            <h1 style={{fontSize: '50px'}}>
                Hello
            </h1>

            <div>
                <Button onClick={handleLogOut}>
                    Log Out
                </Button>
            </div>

            <Button onClick={handleNavVideo}>
                Launch Video
            </Button>
        </>
    )

}

export default Course;