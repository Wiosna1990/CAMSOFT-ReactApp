
import '../../styles/Pracownik.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';




export const Pracownik = () => {



    const [formData, setFormData] = useState({
        kod: '',
        nazwisko: '',
        pesel: '',
        imie: '',
        drugieImie: '',
        dataUrodzenia: '',
        miejsceUrodzenia: '',
        nazwiskoRodowe: '',
        plec: '',
        obywatelstwo: '',
        stanowisko: '',
        umowa: ''
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(formData);
        console.log(formData);
    };
    return (

        <Container fluid className="page-content">


            <div className="frame">
                <h5 style={{ marginBottom: '1em' }}>DANE IDENTYFIKACYJNE</h5>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="kod">Kod:</label>
                            <input type="text" id="kod" name="kod" value={formData.kod} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="nazwisko">Nazwisko:</label>
                            <input type="text" id="nazwisko" name="nazwisko" value={formData.nazwisko} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="imie">Imię:</label>
                            <input type="text" id="imie" name="imie" value={formData.imie} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="drugieImie">Drugie imię:</label>
                            <input type="text" id="drugieImie" name="drugieImie" value={formData.drugieImie} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="pesel">PESEL:</label>
                            <input type="text" id="pesel" name="pesel" value={formData.pesel} onChange={handleInputChange}  />
                        </div>
                    </Col>
                </Row>
                <h5 style={{ marginBottom: '1em', marginTop: '1em' }}>DATA I MIEJSCE URODZENIA</h5>
                <Row>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="dataUrodzenia">Data urodzenia:</label>
                            <input type="text" id="dataUrodzenia" name="dataUrodzenia" value={formData.dataUrodzenia} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="miejsceUrodzenia">Miejsce urodzenia:</label>
                            <input type="text" id="miejsceUrodzenia" name="miejsceUrodzenia" value={formData.miejsceUrodzenia} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="frame">
                <h5 style={{ marginBottom: '1em' }}>DANE EWIDENCYJNE</h5>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="plec">Płeć:</label>
                            <input type="text" id="plec" name="plec" value={formData.plec} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="obywatelstwo">Obywatelstwo:</label>
                            <input type="text" id="obywatelstwo" name="obywatelstwo" value={formData.obywatelstwo} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    
                        <div className="form-group">
                            <label htmlFor="plec">Nazwisko rodowe:</label>
                            <input type="text" id="plec" name="plec" value={formData.plec} onChange={handleInputChange} />
                        </div>
                    
                    </Row>
            </div>
            
                <div className="frame">
                <h5 style={{ marginBottom: '1em' }}>ADRES ZAMELDOWANIA</h5>
                <Row className="form-row">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="ulica">Ulica:</label>
                            <input type="text" id="ulica" name="ulica" value={formData.ulica} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="nrDomu">Nr domu:</label>
                            <input type="text" id="nrDomu" name="nrDomu" value={formData.nrDomu} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
                <Row className="form-row">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="nrLokalu">Nr lokalu:</label>
                            <input type="text" id="nrLokalu" name="nrLokalu" value={formData.nrLokalu} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="kodPocztowy">Kod pocztowy:</label>
                            <input type="text" id="kodPocztowy" name="kodPocztowy" value={formData.kodPocztowy} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
                <Row className="form-row">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="miejscowosc">Miejscowość:</label>
                            <input type="text" id="miejscowosc" name="miejscowosc" value={formData.miejscowosc} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="poczta">Gimna:</label>
                            <input type="text" id="gmina" name="gmina" value={formData.poczta} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
                
                <Row className="form-row">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="wojewodztwo">Województwo:</label>
                            <input type="text" id="wojewodztwo" name="wojewodztwo" value={formData.wojewodztwo} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="kraj">Kraj:</label>
                            <input type="text" id="kraj" name="kraj" value={formData.kraj} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="nrTelefonu">Nr telefonu:</label>
                            <input type="text" id="nrTelefonu" name="nrTelefonu" value={formData.nrTelefonu} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="email">Adres e-mail:</label>
                            <input type="text" id="email" name="email" value={formData.email} onChange={handleInputChange} />
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
                            <Form.Select id="stanowisko" name="stanowisko" value={formData.zawod} onChange={handleInputChange} className="custom-select-width dropup" >
                                <option value=""  >Wybierz</option>

                                <option value="magister">Magister farmacji</option>
                                <option value="technik">Technik farmaceutyczny</option>
                                <option value="pomoc">Pomoc apteczna</option>
                                        <option value="pracownikuslug">Pracownik usług czytości</option>
                            
                            </Form.Select>
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="umowa">Umowa</label>
                            <Form.Select id="umowa" name="umowa" value={formData.zawod} onChange={handleInputChange} className="custom-select-width dropup" >
                                <option value=""  >Wybierz</option>
                                <option value="magister">Etat</option>
                                <option value="technik">Zlecenie</option>

                            </Form.Select>
                        </div>
                    </Col>
                </Row>
            </div>
            
            <button type="submit" onClick={handleSubmit}>Zapisz</button>
        </Container>

    )
}
export default Pracownik;