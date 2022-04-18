import React from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledNavbar } from './styles/NavButton.styled';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from '../context/userAuthContext';

export const MyNavbar = () => {
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
    const handleNavHome = async() => {
        navigate("/home");
    }

    const handleNavCourses = async() => {
        navigate("/courses");
    }

    const handleNavFiles = async() => {
        navigate("/files");
    }

    const handleCreateClass = async() => {
        navigate("/createCourse");
    }

    const handleAddClass = async() => {
        navigate("/joinCourse");
    }

    return (
        <StyledNavbar>
            <Container>
                <Navbar.Brand onClick={handleNavHome} className="justify-content-start">
                    <img src="../LongLogoDark.svg"
                        width="150"
                        height="50" />
                    
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={handleNavCourses}>courses</Nav.Link>
                        <Nav.Link onClick={handleNavFiles}>files</Nav.Link>
                        <NavDropdown title="more" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={handleCreateClass}>create class</NavDropdown.Item>
                            <NavDropdown.Item onClick={handleAddClass}>join class</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLogOut}>Log Out</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <Nav.Link onClick={handleLogOut}>log out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    )
}