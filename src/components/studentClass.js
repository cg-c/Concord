import React from 'react';
import { PageHeader, ClassHeader } from './styles/Headers.styled';
// import { StyledVid } from './styles/Vid.styled';
import FileUpload from './uploadFile';
import { NavButton } from './styles/NavButton.styled';
import { useNavigate } from 'react-router-dom';

const StudentClass = () => {
    // snippet = rafce
    const navigate = useNavigate;
    const handleNavVideo = () => {
        navigate("/video");
    }
    return (
        // will have "live lecture" and "file" components, along with title
        <>
            <ClassHeader>course title</ClassHeader>
            <NavButton onClick={handleNavVideo}>
                Launch Video
            </NavButton>
            <FileUpload />
        
        </>
    )
}

export default StudentClass;