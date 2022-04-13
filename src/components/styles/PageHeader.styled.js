import styled from "styled-components";

export const PageHeader = styled.h1`
    display: flex;
    color: ${props => props.theme.text};
    font-size: 50px;
    font-family: ${props => props.theme.headingFont};
    margin-top: 10%;
    margin-bottom: 8%;
    letter-spacing: 2px;
    justify-content: center;
    align-items: center;
`;