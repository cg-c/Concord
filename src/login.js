import { Routes, Route } from 'react-router-dom';
import { Row, Col, ThemeProvider } from 'react-bootstrap';
import { StyledContainer } from './components/styles/Container.styled';
import Login from './components/googleLogin';
import Course from './components/course';
import ProtectedRoute from './components/protected';
import CreateUser from './components/option';
import App from './components/video';
import CreateClass from './components/createClass';
import JoinClass from './components/joinClass';
import { UserAuthContextProvider } from './context/userAuthContext';

function SignInRoute() {
    return (
        <StyledContainer>
            <Row>
                <Col>
                    <UserAuthContextProvider>
                        <Routes>
                            <Route path="/" element={<Login />} />

                            <Route path="/course" element={
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

                            <Route path="/createCourse" element={
                                <ProtectedRoute>
                                    <CreateClass />
                                </ProtectedRoute>
                            } />

                            <Route path="/joinCourse" element={
                                <ProtectedRoute>
                                    <JoinClass />
                                </ProtectedRoute>
                            } />

                        </Routes>
                    </UserAuthContextProvider>
                </Col>
            </Row>
        </StyledContainer>
    );
}

export default SignInRoute;