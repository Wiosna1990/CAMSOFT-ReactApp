
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Aktualnosci = () => {
    return (
        <Container fluid className="page-content">
            <Row>
                <Col>
                    <Card style={{ width: '20rem' }}>
                        <Link to="/nowosci" className="d-block">
                            <Card.Img variant="top" src="image/tabletka-logo.png" />
                            <Card.Body>
                                <Card.Title>CAMSOFT</Card.Title>
                                <Card.Text>
                                    Nowoœci w programie CAMSOFT.
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem' }}>
                        <Link to="/erecepta" className="d-block">
                            <Card.Img variant="top" src="image/waz-logo.png" />
                            <Card.Body>
                                <Card.Title>E-Recepta</Card.Title>
                                <Card.Text>
                                    Zmiany dawkowania na receptach.
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem' }}>
                        <Link to="/erecepta" className="d-block">
                            <Card.Img variant="top" src="image/farmac-logo.png" />
                            <Card.Body>
                                <Card.Title>Obowi¹zki farmaceuty</Card.Title>
                                <Card.Text>
                                    Co musisz wiedzieæ?
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem' }}>
                        <Link to="/ministerstwo" className="d-block">
                            <Card.Img variant="top" src="image/ministerstwo-logo.png" />
                            <Card.Body>
                                <Card.Title>Ministerstwo Zdrowia</Card.Title>
                                <Card.Text>
                                    Praca dla personelu medycznego.
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem' }}>
                        <Link to="/robot" className="d-block">
                            <Card.Img variant="top" src="image/intel-logo.png" />
                            <Card.Body>
                                <Card.Title>Inteligentna apteka</Card.Title>
                                <Card.Text>
                                    Robot w aptece.
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '20rem' }}>
                        <Link to="/szpitalna" className="d-block">
                            <Card.Img variant="top" src="image/szpitalna-logo.png" />
                            <Card.Body>
                                <Card.Title>Nowoczesna apteka szpitalna</Card.Title>
                                <Card.Text>
                                    Juz dzia³a!
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>

                </Col>
            </Row>
        </Container>
    );
}
export default App;