
import /*React,*/ { useState } from 'react';
import '../../styles/LoginPage.css';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';



export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault(); 

        setLoginError(''); 

        
        if (email === 'test@example.com' && password === 'password') {
            navigate('/app');
        } else {
            setLoginError('Nieprawidłowy adres e-mail lub hasło.');
       
        }
    };

    return (

        <Container fluid className="vh-100 p-0 m-0 overflow-hidden">
            <Row className="h-100 no-gutters">
                <Col md={9} className="p-0 d-flex align-items-center justify-content-center">
                    <img
                        src="/image/LOGO1.jpg"
                        alt="Zdjęcie"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </Col>
                <Col md={3} className="d-flex flex-column justify-content-between p-4" style={{ backgroundColor: '#1d8cd1' }}>
                    <div className="login-form d-flex flex-column justify-content-center">
                        <img src="/image/logo.png" alt="Logo" className="mb-4" />
                        <h3 className="text-center"> </h3>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Adres e-mail:</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder=""
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Hasło:</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder=""
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicCheckbox">
                                <div>
                                    <Form.Text style={{ fontSize: '16px', textDecoration: 'none', color: 'inherit' }}>
                                        <Link to="/recovery">Nie pamiętasz hasła?</Link>
                                    </Form.Text>
                                </div>
                                <div>
                                    <Form.Check type="checkbox" label="Zapamiętaj mnie" />
                                </div>
                            </Form.Group>
                            <Button variant="primary" type="submit" style={{ color: '#000000', backgroundColor: '#8ACBED' }}>
                                Zaloguj
                            </Button>
                            {loginError && <p style={{ color: 'red', marginTop: '10px' }}>{loginError}</p>}
                        </Form>
                    </div>
                    <footer className="text-center" style={{ marginTop: 'auto', padding: '20px' }}>
                        <div>© CAMSOFT</div>
                        <div>Kontakt: 512-345-678 | pomoc@camsoft.pl</div>
                    </footer>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;

