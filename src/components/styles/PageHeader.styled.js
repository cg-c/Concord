import styled from "styled-components";

export const PageHeader = styled.h1`
    display: flex;
    color: ${props => props.theme.text};
    font-size: 40px;
    font-family: ${props => props.theme.headingFont};
    margin-top: 80%;
    margin-bottom: 80px;
    letter-spacing: 2px;
    justify-content: center;
    align-items: center;
`;