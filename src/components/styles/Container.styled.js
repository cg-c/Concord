import styled from 'styled-components';
import  { Container } from 'react-bootstrap';

export const StyledContainer = styled(Container)`
    display: flex;
    background-color: ${p => p.theme.primary};
    margin: 0;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;
`;