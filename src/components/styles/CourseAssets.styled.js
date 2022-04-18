import styled from "styled-components";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CourseContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    margin: 0px;
    height: 200px;
    width: 90%;
    max-width: 1500px;
    justify-content: center;
    // background-color: lightcoral;
`;

export const CourseButton = styled(Link)`
    display: flex;
    background-color: ${p => p.theme.secondary};
    color: ${ p => p.theme.primary};
    text-decoration: none;
    font-family: ${p => p.theme.headingFont};
    border: solid 2px white;
    border-radius: 5px;
    margin: 30px 4%;
    height: 30%;
    width: 25%;
    &:hover {
        background-color: ${p => p.theme.primary};
        color: ${p => p.theme.text};
        border: solid 1px ${p => p.theme.secondary};
    }
    justify-content: center;
    align-items: center;
`;