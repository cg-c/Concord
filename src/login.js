import { Routes, Route } from 'react-router-dom';
import { StyledContainer } from './components/styles/Container.styled';
import Login from './components/googleLogin';
import Course from './components/courses';
import StudentClass from './components/studentClass';
import ProtectedRoute from './components/protected';
import CreateUser from './components/option';
import App from './components/video';
import { StyledNavbar } from './components/styles/NavButton.styled';
import { UserAuthContextProvider } from './context/userAuthContext';
import { MyNavbar } from './components/NavBar';
import FileUpload from './components/uploadFile';

function SignInRoute() {
    return (
        <StyledContainer>
            <UserAuthContextProvider>
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route path="/courses" element={
                        <ProtectedRoute>
                            <MyNavbar />
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
                            <MyNavbar />
                            <App />
                        </ProtectedRoute>
                    } />

                    <Route path="/class" element={
                        <ProtectedRoute>
                            <MyNavbar />
                            <StudentClass />
                        </ProtectedRoute>
                    } />
                    
                    <Route path="/files" element={
                        <ProtectedRoute>
                            <MyNavbar />
                            <FileUpload />
                        </ProtectedRoute>
                    } />

                    <Route path ='*' element={
                        <ProtectedRoute>
                            <MyNavbar />
                        </ProtectedRoute>
                    } />

                </Routes>
            </UserAuthContextProvider>
        </StyledContainer>
    );
}

export default SignInRoute;