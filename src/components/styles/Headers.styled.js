import styled from "styled-components";

export const PageHeader = styled.h1`
    display: flex;
    color: ${props => props.theme.text};
    font-size: 50px;
    font-family: ${props => props.theme.headingFont};
    margin-top: 50px;
    margin-bottom: 50px;
    letter-spacing: 2px;
    justify-content: center;
    align-items: center;
`;

export const ClassHeader = styled(PageHeader)`
    margin: 20px;
    margin-top: 70px;
    font-size: 42px;
    justify-content: left;
    align-items: start;
`;