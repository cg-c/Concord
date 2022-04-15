import { Routes, Route } from 'react-router-dom';
import { Row, Col, ThemeProvider } from 'react-bootstrap';
import { StyledContainer } from './components/styles/Container.styled';
import Login from './components/googleLogin';
import Course from './components/courses';
import ProtectedRoute from './components/protected';
import CreateUser from './components/option';
import App from './components/video';
import { UserAuthContextProvider } from './context/userAuthContext';

function SignInRoute() {
    return (
        <StyledContainer>
                    <UserAuthContextProvider>
                        <Routes>
                            <Route path="/" element={<Login />} />

                            <Route path="/courses" element={
                                <ProtectedRoute>
                                    <Course />
                                </ProtectedRoute>
                            } />

                            <Route path="/createUser" element={
                                <ProtectedRoute>
                                    <CreateUser />
                                </ProtectedRoute>
                            } />

                            <Route path="/video" element={
                                <ProtectedRoute>
                                    <App />
                                </ProtectedRoute>
                            } />

                        </Routes>
                    </UserAuthContextProvider>
        </StyledContainer>
    );
}

export default SignInRoute;