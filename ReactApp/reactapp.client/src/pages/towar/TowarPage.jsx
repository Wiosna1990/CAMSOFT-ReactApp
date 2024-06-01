
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import '../../styles/TowarPage.css';

import { useState } from 'react';

export const Towar = () => {

    const [formData, setFormData] = useState({
        kodEAN: '',
        kodKreskowy: '',
        nazwaHandlowa: '',
        jednostkaMiary: 'op',
        stawkaVAT: '',
        symbolPKWiU: '',
        cenaUrzDet: '',
        limitCenowy: '',
        zaplataRycz: '',
        zaplata30: '',
        zaplata50: '',
        zaplataBZ: '',
        nazwa: '',
        nMiedzynarodowa: '',
        postac: '',
        dawka: '',
        opakowanie: '',
        kraj: '',
        producent: '',
        recepta: '',
        rodzaj: '',
        numer: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleClear = () => {
        setFormData({
            kodEAN: '',
            kodKreskowy: '',
            nazwaHandlowa: '',
            jednostkaMiary: 'op',
            stawkaVAT: '',
            symbolPKWiU: '',
            cenaUrzDet: '',
            limitCenowy: '',
            zaplataRycz: '',
            zaplata30: '',
            zaplata50: '',
            zaplataBZ: '',
            nazwa: '',
            nMiedzynarodowa: '',
            postac: '',
            dawka: '',
            opakowanie: '',
            kraj: '',
            producent: ''
        });
    };

    return (
        <Container fluid className="page-content">
            <div className="frame">
                <h5 style={{ marginBottom: '1em' }}>KARTA LEKU</h5>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="numer">Numer:</label>
                            <input type="number" id="numer" name="numer" value={formData.numer} onChange={handleInputChange} />
                        </div>
                    </Col>
                    </Row>
                <Row className="form-col">
                <Col>
                    <div className="form-group">
                        <label htmlFor="recepta">Recepta:</label>
                        <Form.Select id="recepta" name="recepta" value={formData.recepta} onChange={handleInputChange} className="custom-select-vat">
                            <option value="">Wybierz</option>
                            <option value="Tak">Tak</option>
                            <option value="Nie">Nie</option>

                        </Form.Select>
                        </div>
                    </Col>
                    <Col>
                        {formData.recepta === 'Nie' && (
                            <div className="form-group">
                                <label htmlFor="rodzaj">Rodzaj:</label>
                                <Form.Select
                                    id="rodzaj"
                                    name="rodzaj"
                                    value={formData.rodzaj}
                                    onChange={handleInputChange}
                                    className="custom-select-vat"
                                    readOnly={formData.recepta !== 'Tak'}
                                >
                                    <option value="">Wybierz</option>
                                    <option value="Lek">Lek</option>
                                    <option value="Suplement">Suplement</option>
                                </Form.Select>
                            </div>
                        )}
                    </Col>

                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="kodEAN">Kod EAN:</label>
                            <input type="number" id="kodEAN" name="kodEAN" value={formData.kodEAN} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="kodKreskowy">Kod kreskowy:</label>
                            <input type="number" id="kodKreskowy" name="kodKreskowy" value={formData.kodKreskowy} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="nazwaHandlowa">Nazwa handlowa:</label>
                            <input type="text" id="nazwaHandlowa" name="nazwaHandlowa" value={formData.nazwaHandlowa} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="jednostkaMiary">Jedn. miary lek.:</label>
                            <input type="text" id="jednostkaMiary" name="jednostkaMiary" value={formData.jednostkaMiary} readOnly />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="stawkaVAT">Stawka VAT:</label>
                            <Form.Select id="stawkaVAT" name="stawkaVAT" value={formData.stawkaVAT} onChange={handleInputChange} className="custom-select-vat">                               <option value="">Wybierz</option>
                                <option value="5">5%</option>
                                <option value="8">8%</option>
                                <option value="23">23%</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="symbolPKWiU">Symbol PKWiU:</label>
                            <input type="text" id="symbolPKWiU" name="symbolPKWiU" value={formData.symbolPKWiU} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="cenaUrzDet">Cena urz.det:</label>
                            <input
                                type="number"
                                id="cenaUrzDet"
                                name="cenaUrzDet"
                                value={formData.cenaUrzDet}
                                onChange={handleInputChange}
                                readOnly={formData.recepta === 'Nie'}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="limitCenowy">Limit cenowy:</label>
                            <input
                                type="number"
                                id="limitCenowy"
                                name="limitCenowy"
                                value={formData.limitCenowy}
                                onChange={handleInputChange}
                                readOnly={formData.recepta === 'Nie'}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="zaplataRycz">Zapłata rycz.:</label>
                            <input
                                type="number"
                                id="zaplataRycz"
                                name="zaplataRycz"
                                value={formData.zaplataRycz}
                                onChange={handleInputChange}
                                readOnly={formData.recepta === 'Nie'}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="zaplata30">Zapłata 30%:</label>
                            <input
                                type="number"
                                id="zaplata30"
                                name="zaplata30"
                                value={formData.zaplata30}
                                onChange={handleInputChange}
                                readOnly={formData.recepta === 'Nie'}
                            />
                        </div>
                    </Col>

                </Row>
                <Row>  <Col>
                    <div className="form-group">
                        <label htmlFor="zaplata50">Zapłata 50%:</label>
                        <input
                            type="number"
                            id="zaplata50"
                            name="zaplata50"
                            value={formData.zaplata50}
                            onChange={handleInputChange}
                            readOnly={formData.recepta === 'Nie'}
                        />
                    </div>
                </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="zaplataBZ">Zapłata BZ:</label>
                            <input
                                type="number"
                                id="zaplataBZ"
                                name="zaplataBZ"
                                value={formData.zaplataBZ}
                                onChange={handleInputChange}
                                readOnly={formData.recepta === 'Nie'}
                            />
                        </div>
                    </Col></Row>
            </div>
            <div className="frame">
                <h5 style={{ marginBottom: '1em' }}>DANE LEKU</h5>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="nazwa">Nazwa:</label>
                            <input type="text" id="nazwa" name="nazwa" value={formData.nazwa} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="nMiedzynarodowa">N.międzyn.:</label>
                            <input type="text" id="nMiedzynarodowa" name="nMiedzynarodowa" value={formData.nMiedzynarodowa} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="postac">Postać:</label>
                            <input type="text" id="postac" name="postac" value={formData.postac} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="dawka">Dawka:</label>
                            <input type="text" id="dawka" name="dawka" value={formData.dawka} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="opakowanie">Opakowanie:</label>
                            <input type="text" id="opakowanie" name="opakowanie" value={formData.opakowanie} onChange={handleInputChange} />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="kraj">Kraj:</label>
                            <input type="text" id="kraj" name="kraj" value={formData.kraj} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="producent">Producent:</label>
                            <input type="text" id="producent" name="producent" value={formData.producent} onChange={handleInputChange} />
                        </div>
                    </Col>
                </Row>
            </div>

            <button type="submit" onClick={handleSubmit} style={{ marginRight: '1610px' }}>Zapisz</button>
            <button type="button" onClick={handleClear}>Wyczyść</button>
        </Container>
    );

}; export default Towar
