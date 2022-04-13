import styled from 'styled-components';
import  { Container } from 'react-bootstrap';

// ThemeProvider provides theme components, this utilizes them
export const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: ${p => p.theme.primary};
    margin: 0;
    justify-content: start;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
`;