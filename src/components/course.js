import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/userAuthContext';

const Course = () => {
    const {user, logOut} = useUserAuth();

    const handleLogOut = async() => {
        try {
            await logOut();
        }
        catch (err) {
            console.log(err.message);
        }
    }

    return (
        <>
            <div> Hello </div>
            <div>
                <Button onClick={handleLogOut}>
                    Log Out
                </Button>
            </div>
        </>
    )

}

export default Course;