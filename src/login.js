import { Routes, Route } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Login from './components/googleLogin';

function SignInRoute() {
    return (
        <Container>
            <Row>
                <Col>
                    <Routes>
                        <Route path='/' element={<Login />} />
                    </Routes>
                </Col>
            </Row>
        </Container>
    )
}

export default SignInRoute;