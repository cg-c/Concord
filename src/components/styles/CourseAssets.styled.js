import styled from "styled-components";
import { Container, Button } from "react-bootstrap";

export const CourseContainer = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    margin: 0px;
    height: 200px;
    justify-content: center;
    // background-color: lightcoral;
`;

export const CourseButton = styled(Button)`
    background-color: ${p => p.theme.secondary};
    border-radius: 5px;
    margin: 30px 20px;
    height: 30%;
    width: 20%;
`;