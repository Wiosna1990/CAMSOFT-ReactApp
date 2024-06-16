import Container from 'react-bootstrap/Container';
import '../../styles/PracownicyPage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chatbot from '../../Chatbot';
export const Zleceniobiorcy = () => {
    return (
        
        <Container fluid className="page-content">
            <div className="pracownicy-frame" style={{ marginTop: '20px' }}>
                <table className="table-custom">
                    <thead>
                        <tr>
                            <th>Nazwisko</th>
                            <th>Imię</th>
                            <th>Kod</th>
                            <th>Stanowisko</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Chleb</td>
                            <td>Patryk</td>
                            <td>0005</td>
                            <td>Technik farmaceutyczny</td>
                        </tr>

                        <tr>
                            <td>Stonoga</td>
                            <td>Kamil</td>
                            <td>0006</td>
                            <td>Magister farmacji</td>
                        </tr>
                        <tr>
                            <td>Tuba</td>
                            <td>Dawid</td>
                            <td>0007</td>
                            <td>technik farmaceutyczny</td>
                        </tr>
                        <tr>
                            <td>Kania</td>
                            <td>Katarzyna</td>
                            <td>0008</td>
                            <td>Magister farmacji</td>
                        </tr>


                    </tbody>
                </table>
            </div>
            <div className="scrollable-container">
                <div className="frame">
                    <h5 style={{ marginBottom: '1em' }}>DANE IDENTYFIKACYJNE</h5>
                    <Row className="form-col">
                        <Col>
                            <div className="form-group">
                                <label htmlFor="kod">Kod:</label>
                                <input type="text" id="kod" name="kod" />
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="nazwisko">Nazwisko:</label>
                                <input type="text" id="nazwisko" name="nazwisko" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="form-col">
                        <Col>
                            <div className="form-group">
                                <label htmlFor="imie">Imię:</label>
                                <input type="text" id="imie" name="imie" />
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="drugieImie">Drugie imię:</label>
                                <input type="text" id="drugieImie" name="drugieImie" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="pesel">PESEL:</label>
                                <input type="text" id="pesel" name="pesel" />
                            </div>
                        </Col>
                    </Row>
                    <h5 style={{ marginBottom: '1em', marginTop: '1em' }}>DATA I MIEJSCE URODZENIA</h5>
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="dataUrodzenia">Data urodzenia:</label>
                                <input type="text" id="dataUrodzenia" name="dataUrodzenia" />
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="miejsceUrodzenia">Miejsce urodzenia:</label>
                                <input type="text" id="miejsceUrodzenia" name="miejsceUrodzenia" />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="frame">
                    <h5 style={{ marginBottom: '1em' }}>DANE EWIDENCYJNE</h5>
                    <Row className="form-col">
                        <Col>
                            <div className="form-group">
                                <label htmlFor="plec">Płec:</label>
                                <input type="text" id="plec" name="plec" />
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="obywatelstwo">Obywatelstwo:</label>
                                <input type="text" id="obywatelstwo" name="obywatelstwo" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="form-col">

                        <div className="form-group">
                            <label htmlFor="nazwiskoRodowe">Nazwisko rodowe:</label>
                            <input type="text" id="nazwiskoRodowe" name="nazwiskoRodowe" />
                        </div>

                    </Row>
                </div>

                <div className="frame">
                    <h5 style={{ marginBottom: '1em' }}>ADRES ZAMELDOWANIA</h5>
                    <Row className="form-row">
                        <Col>
                            <div className="form-group">
                                <label htmlFor="ulica">Ulica:</label>
                                <input type="text" id="ulica" name="ulica" />
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="nrDomu">Nr domu:</label>
                                <input type="text" id="nrDomu" name="nrDomu" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="form-row">
                        <Col>
                            <div className="form-group">
                                <label htmlFor="nrLokalu">Nr lokalu:</label>
                                <input type="text" id="nrLokalu" name="nrLokalu" />
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="kodPocztowy">Kod pocztowy:</label>
                                <input type="text" id="kodPocztowy" name="kodPocztowy" />
                            </div>
                        </Col>
                    </Row>
                    <Row className="form-row">
                        <Col>
                            <div className="form-group">
                                <label htmlFor="miejscowosc">Miejscowość:</label>
                                <input type="text" id="miejscowosc" name="miejscowosc" />
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="poczta">Gimna:</label>
                                <input type="text" id="gmina" name="gmina" />
                            </div>
                        </Col>
                    </Row>

                    <Row className="form-row">
                        <Col>
                            <div className="form-group">
                                <label htmlFor="wojewodztwo">Województwo:</label>
                                <input type="text" id="wojewodztwo" name="wojewodztwo" />
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="kraj">Kraj:</label>
                                <input type="text" id="kraj" name="kraj" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="nrTelefonu">Nr telefonu:</label>
                                <input type="text" id="nrTelefonu" name="nrTelefonu"  />
                            </div>
                        </Col>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="email">Adres e-mail:</label>
                                <input type="text" id="email" name="email" />
                            </div>
                        </Col>
                    </Row>

                </div>
                <div className="frame">
                    <h5 style={{ marginBottom: '1em' }}>ZATRUDNIENIE</h5>
                    <Row className="form-row">
                        <Col>
                            <div className="form-group">
                                <label htmlFor="stanowisko">Stanowisko:</label>
                                <input type="text" id="stanowisko" name="stanowisko" />


                            </div>
                        </Col>

                        <Col>
                            <div className="form-group">
                                <label htmlFor="umowa">Umowa:</label>
                                <input type="text" id="umowa" name="umowa" />


                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <Chatbot/>
        </Container>
    )
}
export default Zleceniobiorcy;