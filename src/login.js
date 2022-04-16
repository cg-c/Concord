import { Routes, Route } from 'react-router-dom';
import { StyledContainer } from './components/styles/Container.styled';
import Login from './components/googleLogin';
import Course from './components/courses';
import StudentClass from './components/studentClass';
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
                            }>
                                <Route path="class" element={
                                        <StudentClass />
                                } />
                            </Route>

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

                            <Route path="/class" element={
                                <ProtectedRoute>
                                    <StudentClass />
                                </ProtectedRoute>
                            } />
                                

                        </Routes>
                    </UserAuthContextProvider>
        </StyledContainer>
    );
}

export default SignInRoute;