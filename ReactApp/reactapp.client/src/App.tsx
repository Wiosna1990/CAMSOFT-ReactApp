import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chatbot from './Chatbot';
import { Link } from 'react-router-dom';

import ImageAnimation from './ImageAnimation';



export const App: React.FC = () => {

    return (

        <Container fluid className="page-content">

            <Row>
                <Col>
                    <h5 style={{ marginBottom: '1em' }}> </h5>
                    <h5>Kadry</h5>
                    <Row>
                        <Col>
                            <Link to="/pracownik" className="d-block text-center">
 
                                    <ImageAnimation src="/image/dodaj.jpg" className="card" />

                            </Link>
                        </Col>
                        <Col>
                            <Link to="/pracownicy" className="d-block text-center">
                                <ImageAnimation src="/image/pracownicy.jpg" className="card" />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/zleceniobiorcy" className="d-block text-center">
                                <ImageAnimation src="/image/zleceniobiorcy1.jpg" className="card" />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/wszyscy" className="d-block text-center">
                                <ImageAnimation src="/image/wszyscy.jpg" className="card" />
                            </Link>
                        </Col>

                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h5 style={{ marginBottom: '1em' }}> </h5>
                    <h5 >Płace</h5>
                    <Row>
                        <Col>
                            <Link to="/placa" className="d-block text-center">
                                <ImageAnimation src="/image/oblicz.jpg" className="card" />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/pracownicyplaca" className="d-block text-center">
                                <ImageAnimation src="/image/pracownicy.jpg" className="card" />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/zleceniobiorcyplaca" className="d-block text-center">
                                <ImageAnimation src="/image/zleceniobiorcy1.jpg" className="card" />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/wszyscyplaca" className="d-block text-center">
                                <ImageAnimation src="/image/wszyscy.jpg" className="card" />
                            </Link>
                        </Col>

                    </Row>
                    <h5 style={{ marginBottom: '1em' }}> </h5>
                    <h5 >Magazyn</h5>
                    <Row className="d-flex justify-content-center">

                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Link to="/towar" className="d-block text-center">
                                <ImageAnimation src="/image/karta1.jpg" className="card" />
                            </Link>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3}>
                            <Link to="/towary" className="d-block text-center">
                                <ImageAnimation src="/image/stan.jpg" className="card" />
                            </Link>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3} className="d-none d-lg-block"></Col>
                        <Col xs={12} sm={6} md={4} lg={3} className="d-none d-lg-block"></Col>

                    </Row>
                    <h5 style={{ marginBottom: '1em' }}> </h5>
                    <h5>Faktury</h5>
                    <Row>
                        <Col>
                            <Link to="/faktura" className="d-block text-center">
                                <ImageAnimation src="/image/dodajfv.jpg" className="card" />
                            </Link>
                        </Col>
                        <Col>
                            <Link to="/faktury" className="d-block text-center">
                                <ImageAnimation src="/image/lista.jpg" className="card" />
                            </Link>

                            <Chatbot />
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={3} className="d-none d-lg-block"></Col>
                        <Col xs={12} sm={6} md={4} lg={3} className="d-none d-lg-block"></Col>

                    </Row>
                </Col>
            </Row>

            </Container>


    );
}
export default App;
