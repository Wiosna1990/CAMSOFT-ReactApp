


import  { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';

import '../../styles/PlacaPage.css';
import 'react-datepicker/dist/react-datepicker.css';
export const Placa = () => {
    const [formData, setFormData] = useState({
        pracownik: '',
        wyplata: '',
        nazwa: '',
        okres: null,
        wartość: '',
        wynagrodzenieZasadnicze: '',
        procent: '',
        nazwiskoRodowe: '',
        plec: '',
        obywatelstwo: '',
        stanowisko: '',
        umowa: '',
        wartoscProcentowa: '',
        suma: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === 'umowa' && value === 'zlecenie') {
            window.location.href = '/placazlecenie';
        }
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, okres: date });
    };

    const handleCalculateProcent = () => {
        const wynagrodzenieZasadnicze = parseFloat(formData.wynagrodzenieZasadnicze);
        const procent = parseFloat(formData.procent);
        const wartoscProcentowa = wynagrodzenieZasadnicze * (procent / 100);
        const suma = wynagrodzenieZasadnicze + wartoscProcentowa;
        setFormData({ ...formData, wartoscProcentowa: wartoscProcentowa.toFixed(2), suma: suma.toFixed(2) });
    };

    const handleClear = () => {
        setFormData({
            pracownik: '',
            wyplata: '',
            nazwa: '',
            okres: null,
            wartość: '',
            wynagrodzenieZasadnicze: '',
            procent: '',
            nazwiskoRodowe: '',
            plec: '',
            obywatelstwo: '',
            stanowisko: '',
            umowa: '',
            wartoscProcentowa: '',
            suma: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <Container fluid className="page-content">
            <div className="frame">
                <h5 style={{ marginBottom: '1em' }}>WYNAGRODZENIE ZASADNICZE MIESIĘCZNE</h5>
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
                                <option value="0001">BURAŚ NATALIA (0001)</option>
                                <option value="0002">BURAŚ KAMIL (0002)</option>
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
                                <option value="0001">LPE/SP/2024/05/1/0001 BURAŚ NATALIA (0001)</option>
                                <option value="0002">LPE/SP/2024/05/1/0002 BURAŚ KAMIL (0002)</option>
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
                            <label htmlFor="wynagrodzenieZasadnicze">Wynagrodzenie zasadnicze:</label>
                            <input type="text" id="wynagrodzenieZasadnicze" name="wynagrodzenieZasadnicze" value={formData.wynagrodzenieZasadnicze} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="frame">
                <h5 style={{ marginBottom: '1em' }}>SKŁADNIKI - PARAMETRY</h5>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="wynagrodzenieZasadnicze">Wartość:</label>
                            <input type="text" id="wynagrodzenieZasadnicze" name="wynagrodzenieZasadnicze" value={formData.wynagrodzenieZasadnicze} readOnly />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="frame">
                <h5 style={{ marginBottom: '1em' }}>PREMIA PROCENTOWA</h5>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="wynagrodzenieZasadnicze">Wynagrodzenie zasadnicze:</label>
                            <input type="text" id="wynagrodzenieZasadnicze" name="wynagrodzenieZasadnicze" value={formData.wynagrodzenieZasadnicze} readOnly />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="procent">Procent premii:</label>
                            <input type="text" id="procent" name="procent" value={formData.procent} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <button onClick={handleCalculateProcent}>Oblicz</button>
                    </Col>
                </Row>
            </div>
            <div className="frame">
                <h5 style={{ marginBottom: '1em' }}>SKŁADNIKI - PARAMETRY</h5>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="wartoscProcentowa">Wartość:</label>
                            <input type="text" id="wartoscProcentowa" name="wartoscProcentowa" value={formData.wartoscProcentowa} onChange={handleInputChange} readOnly />
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="frame">
                <h5 style={{ marginBottom: '1em' }}>SUMA WYNAGRODZENIA</h5>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="suma">Wartość:</label>
                            <input type="text" id="suma" name="suma" value={formData.suma} onChange={handleInputChange} readOnly />
                        </div>
                    </Col>
                </Row>
               
            </div>
            <button type="submit" onClick={handleSubmit} style={{ marginRight: '1610px' }}>Zapisz</button>
            <button type="button" onClick={handleClear}>Wyczyść</button>
        </Container>
    );
};
