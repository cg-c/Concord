import React from 'react';
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledNavbar } from './styles/NavButton.styled';

export const MyNavbar = () => {


    return (
        <StyledNavbar>
            <Container style={{color: "red"}}>
                <Navbar.Brand href="/">Concord</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/files">Files</Nav.Link>
                        <NavDropdown title="More" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Log Out</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </StyledNavbar>
    )
}