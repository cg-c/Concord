import styled from 'styled-components';

export const StyledForm = styled.div`
    display: flex;
    flex-direction: column;
    font-family: ${ p => p.theme.headingFont};
    background-color: ${ p => p.theme.secondary };
    border: solid 2px white;
    border-radius: 8px;
    margin-bottom: 100px;
    margin-top: 50px;
    justify-content: center;
    align-items: center;
`;