import styled from "styled-components";
import { Button, Navbar } from 'react-bootstrap';

export const NavButton = styled(Button)`
    display: flex;
    background-color: ${ p => p.theme.secondary};
    border-radius: 6px;
    border: 1px solid ${ p => p.theme.text};
    margin: 10px;
    justify-content: center;
    align-items: center;
    &:hover {
        background-color: ${ p => p.theme.primary};
        color: ${ p => p.theme.secondary};
        border: 1px solid white;
        box-shadow: 5px 5px black;
    }
`;

export const StyledNavbar = styled(Navbar)`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    width: 100vw;
    height: auto;
    background-color: ${ p => p.theme.secondary };
`;