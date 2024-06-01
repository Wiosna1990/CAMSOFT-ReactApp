import Container from 'react-bootstrap/Container';
import '../../styles/PracownicyPage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState} from 'react';

import DatePicker from 'react-datepicker';

export const ZleceniobiorcyPlaca = () => {

    const handleDateChange = (date) => {
        setFormData({ ...formData, okres: date });
    };
    

    const [formData,setFormData] = useState({
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
        suma: ''
    });
    return (

        <Container fluid className="page-content">
            <div className="pracownicy-frame">
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
                    <h5 style={{ marginBottom: '1em' }}>WYNAGRODZENIE UMOWA ZLECENIE</h5>
                  
            
                  
                    <Row className="form-col">
                        <Col>

                            <div /*className="react-datepicker__input-container"*/>

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
                                <input type="text" id="wynagrodzenieGodzinowe" name="wynagrodzenieGodzinowe" value={formData.wynagrodzenieGodzinowe} readOnly />
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
                                <input type="text" id="iloscGodzin" name="iloscGodzin" value={formData.iloscGodzin} readOnly />
                            </div>
                        </Col>

                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="wynagrodzenieZlecenie">Wynagrodzenie :</label>
                                    <input type="text" id="wynagrodzenieZlecenie" name="wynagrodzenieZlecenie" value={formData.wynagrodzenieZlecenie} readOnly />
                                </div>
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
                                <input type="text" id="procent" name="procent" value={formData.procent} readOnly />
                            </div>
                        </Col>

                        <Row>
                            <Col>
                                <div className="form-group">
                                    <label htmlFor="wartoscProcentowa">Wartość premii:</label>
                                    <input type="text" id="wartoscProcentowa" name="wartoscProcentowa" value={formData.wartoscProcentowa} readOnly />
                                </div>
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
            </div>
        </Container>
    )
}
export default ZleceniobiorcyPlaca;