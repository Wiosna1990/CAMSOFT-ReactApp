import Container from 'react-bootstrap/Container';
import '../../styles/PracownicyPage.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import Form from 'react-bootstrap/Form';

export const WszyscyPlaca = () => {
    const handleDateChange = (date) => {
        setFormData({ ...formData, okres: date });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
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
        suma: '',
        etat: '',
        zlecenie:''
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
                            <td>Buraś</td>
                            <td>Natalia</td>
                            <td>0001</td>
                            <td>Technik farmaceutyczny</td>
                        </tr>

                        <tr>
                            <td>Buraś</td>
                            <td>Kamil</td>
                            <td>0002</td>
                            <td>Magister farmacji</td>
                        </tr>
                        <tr>
                            <td>Chmiel</td>
                            <td>Anna</td>
                            <td>0003</td>
                            <td>Pomoc apteczna</td>
                        </tr>
                        <tr>
                            <td>Rusałek</td>
                            <td>Kinga</td>
                            <td>0004</td>
                            <td>Magister farmacji</td>
                        </tr>
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
                    <h5 style={{ marginBottom: '1em' }}>WYNAGRODZENIE ZASADNICZE MIESIĘCZNE</h5>
                    <Row className="form-col">
                    <div className="form-group">
                        <label htmlFor="umowa">Umowa</label>
                            <Form.Select id="umowa" name="umowa" value={formData.umowa} onChange={handleInputChange} className="custom-select-width dropup">
                            <option value="">Wybierz</option>
                            <option value="etat">Etat</option>
                            <option value="zlecenie">Zlecenie</option>
                        </Form.Select>
                    </div>
                    </Row>
                    <Row className="form-col">
                        <Col>
                            <div className="form-group">
                                <label htmlFor="wyplata">Wypłata</label>
                                <Form.Select id="wyplata" name="wyplata" value={formData.wyplata}  className="custom-select-width dropup">
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
                                <input type="text" id="wynagrodzenieZasadnicze" name="wynagrodzenieZasadnicze" value={formData.wynagrodzenieZasadnicze} readOnly />
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
                                <input type="text" id="procent" name="procent" value={formData.procent} readOnly />
                            </div>
                        </Col>

                    </Row>
                </div>
                <div className="frame">
                    <h5 style={{ marginBottom: '1em' }}>SKŁADNIKI - PARAMETRY</h5>
                    <Row className="form-col">
                        <Col>
                            <div className="form-group">
                                <label htmlFor="wartoscProcentowa">Wartość:</label>
                                <input type="text" id="wartoscProcentowa" name="wartoscProcentowa" value={formData.wartoscProcentowa} readOnly />
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
                                <input type="text" id="suma" name="suma" value={formData.suma} readOnly />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
  
        </Container>
    )
}
export default WszyscyPlaca;