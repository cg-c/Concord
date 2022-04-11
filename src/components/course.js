import React from 'react';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/userAuthContext';
import { useNavigate } from 'react-router-dom';
import { PageHeader } from './styles/PageHeader.styled';

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
            <PageHeader style={{fontSize: '50px'}}>
                Hello
            </PageHeader>

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