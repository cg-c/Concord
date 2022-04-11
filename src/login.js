import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Login from './components/googleLogin';
import Course from './components/course';
import ProtectedRoute from './components/protected';
import CreateUser from './components/option';
import { UserAuthContextProvider } from './context/userAuthContext';

function SignInRoute() {
    return (
        <Container>
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

                        </Routes>
                    </UserAuthContextProvider>
                </Col>
            </Row>
        </Container>
    );
}

export default SignInRoute;