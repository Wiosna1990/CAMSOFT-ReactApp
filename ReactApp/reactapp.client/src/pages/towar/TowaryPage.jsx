import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import '../../styles/TowaryPage.css';

export const Towary = () => {
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
    return (
        <Container fluid className="page-content">
            <Accordion defaultActiveKey="0" className="custom-accordion">
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={{backgroundcolor: '#ECECEC'} }>Filtrowanie listy</Accordion.Header>
                    <Accordion.Body>
                        <Form>
                            <Row>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Szukaj po nazwie</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena detaliczna od</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Cena detaliczna do</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col sm={4}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Wybierz rodzaj</Form.Label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Wybierz</option>
                                            <option value="1">Lek na Receptę</option>
                                            <option value="2">Lek bez recepty</option>
                                            <option value="3">Suplement</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Numer</th>
                        <th>Nazwa handlowa</th>
                        <th>Rodzaj</th>
                        <th>Cenza zakupu</th>
                        <th>Cena detaliczna</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Acatar Zatoki tabl.powl. 0,2g+0,03</td>
                        <td>Lek bez recepty</td>
                        <td>10.32</td>
                        <td>13.80</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>ACC 600 tabl.mus. 0,6 g 10 tabl.(tuba)</td>
                        <td>Lek bez recepty</td>
                        <td>13.21</td>
                        <td>15.80</td>
                        
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>ACC MAX tabl. 0,2 g 20 tabl.</td>
                        <td>Lek bez recepty</td>
                        <td>10.03</td>
                        <td>12.60</td>
                        </tr>
                    

                </tbody>
            </Table>

         
            <div className="towary-frame">
                <div className="frame">
                    
                <h5 style={{ marginBottom: '1em' }}>KARTA LEKU</h5>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="numer">Numer:</label>
                                <input type="text" id="numer" name="numer" value={formData.numer} readOnly />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                        <Col>
                            <div className="form-group">
                                <label htmlFor="recepta">Recepta:</label>
                                <input type="recepta" id="recepta" name="recepta" value={formData.recepta}  readOnly/>
                            </div>
                        
                    </Col>
                        <Col>
                            <div className="form-group">
                                <label htmlFor="rodzaj">Recepta:</label>
                                <input type="rodzaj" id="rodzaj" name="rodzaj" value={formData.rodzaj} readOnly />
                            </div>

                    </Col>

                </Row>
                
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="kodEAN">Kod EAN:</label>
                                <input type="number" id="kodEAN" name="kodEAN" value={formData.kodEAN} readOnly />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="kodKreskowy">Kod kreskowy:</label>
                                <input type="number" id="kodKreskowy" name="kodKreskowy" value={formData.kodKreskowy} readOnly />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="nazwaHandlowa">Nazwa handlowa:</label>
                                <input type="text" id="nazwaHandlowa" name="nazwaHandlowa" value={formData.nazwaHandlowa} readOnly />
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
                                <label htmlFor="stawkaVAT">Jedn. miary lek.:</label>
                                <input type="text" id="stawkaVAT" name="stawkaVAT" value={formData.stawkaVAT} readOnly />
                            </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="symbolPKWiU">Symbol PKWiU:</label>
                            <input type="text" id="symbolPKWiU" name="symbolPKWiU" value={formData.symbolPKWiU} readOnly />
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
                                <input type="text" id="nazwa" name="nazwa" value={formData.nazwa} readOnly />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="nMiedzynarodowa">N.międzyn.:</label>
                                <input type="text" id="nMiedzynarodowa" name="nMiedzynarodowa" value={formData.nMiedzynarodowa} readOnly />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="postac">Postać:</label>
                                <input type="text" id="postac" name="postac" value={formData.postac} readOnly />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="dawka">Dawka:</label>
                                <input type="text" id="dawka" name="dawka" value={formData.dawka} readOnly />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="opakowanie">Opakowanie:</label>
                                <input type="text" id="opakowanie" name="opakowanie" value={formData.opakowanie} readOnly />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label htmlFor="kraj">Kraj:</label>
                                <input type="text" id="kraj" name="kraj" value={formData.kraj} readOnly />
                        </div>
                    </Col>
                </Row>
                <Row className="form-col">
                    <Col>
                        <div className="form-group">
                            <label htmlFor="producent">Producent:</label>
                                <input type="text" id="producent" name="producent" value={formData.producent} readOnly />
                        </div>
                    </Col>
                    </Row>
                </div>
                </div>
                
        </Container>
    )
}