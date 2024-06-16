

import '../../styles/PlacaPage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Chatbot from '../../Chatbot';
export const PlacaZlecenie = () => {
    const [formData, setFormData] = useState({ //obiekt przech.dane formularza, set funkcja aktualizujaca stan
        pracownik: '',
        wyplata: '',
        nazwa: '',
        okres: '',
        wartość: '',
        wynagrodzenieGodzinowe: '',
        zlecenie: '',
        iloscGodzin: '',
        wynagrodzenieZlecenie: '',
        procent: '',
        wartoscProcentowa: '',
        suma: '',
        umowa:''
    });
    const handleDateChange = (date:string) => { //f.aktualizuje pole okres->date
        setFormData({ ...formData, okres: date }); //aktualizuje formData
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { //aktualizuje pole
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'umowa' && value === 'etat') {
            window.location.href = '/placa';
        }
    };

    const handleCalculate = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { wynagrodzenieGodzinowe, iloscGodzin } = formData;
        const wynagrodzenieZlecenie = parseFloat(wynagrodzenieGodzinowe) * parseInt(iloscGodzin);
        setFormData({ ...formData, wynagrodzenieZlecenie: wynagrodzenieZlecenie.toString() });
        console.log({ ...formData, wynagrodzenieZlecenie: wynagrodzenieZlecenie.toString() });
    };


    const handleCalculateProcent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const { wynagrodzenieZlecenie, procent } = formData;
        const wartoscProcentowa = (parseFloat(wynagrodzenieZlecenie) * parseFloat(procent)) / 100;
        setFormData({ ...formData, wartoscProcentowa: wartoscProcentowa.toString() });

        handleCalculateSuma(wynagrodzenieZlecenie, wartoscProcentowa.toString());
    };


    const handleCalculateSuma = (wynagrodzenieZlecenie: string, wartoscProcentowa: string) => {
        const suma = parseFloat(wynagrodzenieZlecenie) + parseFloat(wartoscProcentowa);
        setFormData((prevFormData) => ({ ...prevFormData, suma: suma.toString() }));
        console.log({ ...formData, suma: suma.toString() });
    };

    const handleClear = () => {
        setFormData({
            pracownik: '',
            wyplata: '',
            nazwa: '',
            okres: '',
            wartość: '',
            wynagrodzenieGodzinowe: '',
            zlecenie: '',
            iloscGodzin: '',
            wynagrodzenieZlecenie: '',
            procent: '',
            wartoscProcentowa: '',
            suma: '',
            umowa:''
        });
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Container fluid className="page-content">
            <div className="frame" style={{ marginTop: '20px' }}>
                <h5 style={{ marginBottom: '1em' }}>WYNAGRODZENIE UMOWA ZLECENIE</h5>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="umowa">Umowa</label>
                            <Form.Select id="umowa" name="umowa" value={formData.umowa} onChange={handleInputChange} className="custom-select-width dropup">
                                <option value="">Wybierz</option>
                                <option value="etat">Etat</option>
                                <option value="zlecenie">Zlecenie</option>
                            </Form.Select>
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="pracownik">Pracownik</label>
                            <Form.Select id="pracownik" name="pracownik" value={formData.pracownik} onChange={handleInputChange} className="custom-select-width dropup">
                                <option value="">Wybierz</option>
                                <option value="0005">CHLEB PATRYK (0005)</option>
                                <option value="0006">STONOGA KAMIL (0006)</option>
                            </Form.Select>
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="wyplata">Wypłata</label>
                            <Form.Select id="wyplata" name="wyplata" value={formData.wyplata} onChange={handleInputChange} className="custom-select-width dropup">
                                <option value="">Wybierz</option>
                                <option value="0005">LPE/SP/2024/05/1/0005 CHLEB PATRYK (0005)</option>
                                <option value="0006">LPE/SP/2024/05/1/0006 STONOGA KAMIL (0006)</option>
                            </Form.Select>
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>

                        <div >

                            <label htmlFor="okres">Okres:</label>
                            <DatePicker
                                selected={formData.okres}
                                onChange={handleDateChange}
                                dateFormat="MM/yyyy"
                                showMonthYearPicker
                                showFullMonthYearPicker
                                id="okres"
                                name="okres"
                                className="custom-select-datepicker"


                            />

                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="wynagrodzenieGodzinowe">Wynagrodzenie godzinowe:</label>
                            <input type="text" id="wynagrodzenieGodzinowe" name="wynagrodzenieGodzinowe" value={formData.wynagrodzenieGodzinowe} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="frame">
                <h5 style={{ marginBottom: '1em' }}>SKŁADNIKI - PARAMETRY</h5>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="iloscGodzin">Ilość przepracowanych godzin:</label>
                            <input type="text" id="iloscGodzin" name="iloscGodzin" value={formData.iloscGodzin} onChange={handleInputChange} />
                        </div>
                    </Col>
                    
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="wynagrodzenieZlecenie">Wynagrodzenie :</label>
                                <input type="text" id="wynagrodzenieZlecenie" name="wynagrodzenieZlecenie" value={formData.wynagrodzenieZlecenie} readOnly />
                            </div>
                        </Col>
                        <Col>
                            <button onClick={handleCalculate}>Oblicz</button>
                        </Col>
                    </Row>
                </Row>
            </div>
            <div className="frame">
                <h5 style={{ marginBottom: '1em' }}>PREMIA PROCENTOWA</h5>
                <Row>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="procent">Procent premii:</label>
                            <input type="text" id="procent" name="procent" value={formData.procent} onChange={handleInputChange} />
                        </div>
                    </Col>
                    
                    <Row>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="wartoscProcentowa">Wartość premii:</label>
                                <input type="text" id="wartoscProcentowa" name="wartoscProcentowa" value={formData.wartoscProcentowa} readOnly />
                            </div>
                        </Col>
                        <Col>
                            <button onClick={handleCalculateProcent}>Oblicz</button>
                        </Col>
                    </Row>
                </Row>
            </div>
            <div className="frame">
                <h5 style={{ marginBottom: '1em' }}>SUMA WYNAGRODZENIA</h5>
                <Row className="form-col">
                    <Col>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="suma">Wartość:</label>
                                <input type="text" id="suma" name="suma" value={formData.suma} readOnly />
                            </div>
                        </Col>
                    </Col>
                </Row>
            </div>
            <button type="submit" onClick={handleSubmit} style={{ marginRight: '1560px' }}>Zapisz</button>
            <button type="button" onClick={handleClear}>Wyczyść</button>
            <Chatbot/>
        </Container>
    );
};

//export default PlacaZlecenie;
