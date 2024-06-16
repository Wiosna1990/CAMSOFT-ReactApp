
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Aktualnosci = () => {

    return (
        <Container fluid className="page-content text-center d-flex align-items-center" style={{ minHeight: "65vh" }}>
            <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-5 mx-auto">
                <Col>
                    <Card className="h-100">
                        <Link to="/erecepta" className="d-block">
                            <Card.Img variant="top" src="image/farmac-logo.png" />
                            <Card.Body>
                                <Card.Title>Obowiązki farmaceuty</Card.Title>
                                <Card.Text>
                                    Co musisz wiedzieć?
                                </Card.Text>
                            </Card.Body>
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100">
                        <a href="https://www.gov.pl/web/zdrowie/praca-dla-personelu-med-z-ukrainy" className="d-block" target="_blank" rel="noopener noreferrer">
                            <Card.Img variant="top" src="image/ministerstwo-logo.png" />
                            <Card.Body>
                                <Card.Title>Ministerstwo Zdrowia</Card.Title>
                                <Card.Text>
                                    Praca dla personelu medycznego.
                                </Card.Text>
                            </Card.Body>
                        </a>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100">
                        <a href="https://www.woia.pl/news/3715/inteligentny-robot-w-aptece-eugeniusz-jarosik.html" className="d-block" target="_blank" rel="noopener noreferrer">
                            <Card.Img variant="top" src="image/intel-logo.png" />
                            <Card.Body>
                                <Card.Title>Inteligentna apteka</Card.Title>
                                <Card.Text>
                                    Robot w aptece.
                                </Card.Text>
                            </Card.Body>
                        </a>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100">
                        <a href="https://mgr.farm/aktualnosci/nowoczesna-apteka-szpitalna-w-kartuzach-juz-dziala/" className="d-block" target="_blank" rel="noopener noreferrer">
                            <Card.Img variant="top" src="image/szpitalna-logo.png" />
                            <Card.Body>
                                <Card.Title>Nowoczesna apteka szpitalna</Card.Title>
                                <Card.Text>
                                    Juz działa!
                                </Card.Text>
                            </Card.Body>
                        </a>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default Aktualnosci;