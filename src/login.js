import { Routes, Route } from 'react-router-dom';
import { StyledContainer } from './components/styles/Container.styled';
import Login from './components/googleLogin';
import Class from './components/class';
import Courses from './components/courses';
import LandingPage from './components/landingPage'
import StudentClass from './components/class';
import ProtectedRoute from './components/protected';
import CreateUser from './components/option';
import App from './components/video';
import CreateClass from './components/createClass';
import JoinClass from './components/joinClass';
import { UserAuthContextProvider } from './context/userAuthContext';
import { MyNavbar } from './components/NavBar';
import FileUpload from './components/uploadFile';
import CreateRoom from './components/CreateRoom';
import Room from './components/Room';

function SignInRoute() {
    return (
        <StyledContainer>
            <UserAuthContextProvider>
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route path="/home" element={
                        <ProtectedRoute>
                            <MyNavbar />
                            <LandingPage />
                        </ProtectedRoute>
                    } />

                    <Route path="/courses" element={
                        <ProtectedRoute>
                            <MyNavbar />
                            <Courses />
                        </ProtectedRoute>
                    } />

                    <Route path="/courses/:courseCode" element={
                        <ProtectedRoute>
                            <MyNavbar />
                            <Class />
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
                            <Room />
                        </ProtectedRoute>
                    } />

                    <Route path="/video/:roomCode" element={
                        <ProtectedRoute>
                            <MyNavbar />
                            <Room />
                        </ProtectedRoute>
                    } />

                    <Route path="/files" element={
                        <ProtectedRoute>
                            <MyNavbar />
                            <FileUpload />
                        </ProtectedRoute>
                    } />

                    <Route path="/createCourse" element={
                        <ProtectedRoute>
                            <MyNavbar />
                            <CreateClass />
                        </ProtectedRoute>
                    } />

                    <Route path="/joinCourse" element={
                        <ProtectedRoute>
                            <MyNavbar />
                            <JoinClass />
                        </ProtectedRoute>
                    } />

                    <Route path='*' element={
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