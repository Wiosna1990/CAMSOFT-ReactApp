

import { useState } from 'react';
import { Container, Nav, Navbar, Image, Row } from 'react-bootstrap';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import '../../styles/Layout.css';

const tabPaths: { [key: string]: string } = {
    'Home': '/app',
    'Dodaj pracownika': '/pracownik',
    'Pracownicy': '/pracownicy',
    'Oblicz płace': '/placa',
    'Lista płac: Pracownicy': '/pracownicyplaca',
    'Lista płac: Zleceniobiorcy': '/zleceniobiorcyplaca',
    'Lista płac: Wszyscy': '/wszyscyplaca',
    'Zleceniobiorcy': '/zleceniobiorcy',
    'Wszyscy': '/wszyscy',
    'Dodaj kartę towaru': '/towar',
    'Stan magazynowy': '/towary',
    'Dodaj fakturę': '/towar',
    'Lista faktur': '/towary',
    'Aktualności': '/aktualnosci',
    'Kontakt': '/kontakt',
    'Wyloguj się': '/'
};


export const Layout = () => {

    const [activeTabs, setActiveTabs] = useState<string[]>([]); // tab przechowuje nazwy zakładek
    const [currentTab, setCurrentTab] = useState<string>(''); // przechowuje nazwę zakładki
    const navigate = useNavigate();

    const handleCloseTab = (tabName: string) => { // zamknij zakładkę
        setActiveTabs(prevTabs => {
            const newTabs = prevTabs.filter(tab => tab !== tabName);
            if (currentTab === tabName) {
                if (newTabs.length > 0) {
                    setCurrentTab(newTabs[newTabs.length - 1]);
                    navigate(tabPaths[newTabs[newTabs.length - 1]]);
                } else {
                    setCurrentTab('');
                    navigate('/app');
                }
            }
            return newTabs;
        });
    };

    const handleOpenTab = (tabName: string) => { // otwórz zakładkę
        if (tabName !== 'Home') {
            if (!activeTabs.includes(tabName)) {
                setActiveTabs(prevTabs => [...prevTabs, tabName]);
            }
            setCurrentTab(tabName);
            navigate(tabPaths[tabName]);
        } else {
            setActiveTabs([]);
            setCurrentTab(tabName);
            navigate(tabPaths[tabName]);
        }
    };

    const handleTabClick = (tabName: string) => { // zmień aktualną zakładkę, nawiguj do strony
        if (tabName !== 'Home') {
            setCurrentTab(tabName);
            navigate(tabPaths[tabName]);
        } else {
            setActiveTabs([]);
            setCurrentTab('');
            navigate(tabPaths[tabName]);
        }
    };

    // Funkcja czyszcząca zakładki
    const handleNavigateToHome = () => {
        setActiveTabs([]);
        setCurrentTab('Home');
        navigate(tabPaths['Home']);
    };

    return (
        <div className="app">
            <header className="header" style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/app" className="d-block text-center" onClick={handleNavigateToHome}>
                    <Image src="/image/logo-kopia1.png" className="logo" />
                </Link>
                <div className="tabs" style={{ display: 'flex', justifyContent: 'flex-start', width: '100%', paddingLeft: '20px' }}>
                    {activeTabs.map((tabName, index) => (
                        <div key={index} className="tab" style={{
                            height: '40px',
                            marginLeft: index === 0 ? '0' : '5px',
                            padding: '10px',
                            backgroundColor: currentTab === tabName ? '#FAFAFA' : 'white',
                            borderRadius: '4px 4px 0 0',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'black',
                            position: 'relative',
                            cursor: 'pointer',
                            fontSize: '14px',
                        }} onClick={() => handleTabClick(tabName)}>
                            {tabName}
                            <div className="close-tab" onClick={(e) => { e.stopPropagation(); handleCloseTab(tabName); }} style={{
                                marginLeft: '20px',
                                cursor: 'pointer'
                            }}>
                                x
                            </div>
                        </div>
                    ))}
                </div>
            </header>

            <Navbar className="bg-body-tertiary">
                <Container fluid>
                    <div className="d-flex">
                        <Nav className="flex-column" style={{
                            width: '320px',
                            height: '100%',
                            position: 'fixed',
                            left: 0,
                            top: '50px',
                            backgroundColor: '#8ACBED',
                            padding: '20px',
                        }}>
                            <Menu>
                                <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/app" onClick={handleNavigateToHome} />}>Home</MenuItem>

                                <SubMenu style={{ backgroundColor: '#8ACBED' }} label="Kadry">
                                    <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/pracownik" />} onClick={() => handleOpenTab('Dodaj pracownika')}>Dodaj pracownika</MenuItem>
                                    <SubMenu style={{ backgroundColor: '#8ACBED' }} label="Lista pracowników">
                                        <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/pracownicy" />} onClick={() => handleOpenTab('Pracownicy')}>Pracownicy</MenuItem>
                                        <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/zleceniobiorcy" />} onClick={() => handleOpenTab('Zleceniobiorcy')}>Zleceniobiorcy</MenuItem>
                                        <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/wszyscy" />} onClick={() => handleOpenTab('Wszyscy')}>Wszyscy</MenuItem>
                                    </SubMenu>
                                </SubMenu>

                                <SubMenu style={{ backgroundColor: '#8ACBED' }} label="Place">
                                    <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/placa" />} onClick={() => handleOpenTab('Oblicz płace')}>Oblicz płace</MenuItem>
                                    <SubMenu style={{ backgroundColor: '#8ACBED' }} label="Lista płac">
                                        <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/pracownicyplaca" />} onClick={() => handleOpenTab('Lista płac: Pracownicy')}>Pracownicy</MenuItem>
                                        <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/zleceniobiorcyplaca" />} onClick={() => handleOpenTab('Lista płac: Zleceniobiorcy')}>Zleceniobiorcy</MenuItem>
                                        <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/wszyscyplaca" />} onClick={() => handleOpenTab('Lista płac: Wszyscy')}>Wszyscy</MenuItem>
                                    </SubMenu>
                                </SubMenu>

                                <SubMenu style={{ backgroundColor: '#8ACBED' }} label="Magazyn">
                                    <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/towar" />} onClick={() => handleOpenTab('Dodaj kartę towaru')}>Dodaj kartę towaru</MenuItem>
                                    <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/towary" />} onClick={() => handleOpenTab('Stan magazynowy')}>Stan magazynowy</MenuItem>
                                </SubMenu>

                                <SubMenu style={{ backgroundColor: '#8ACBED' }} label="Faktury">
                                    <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/towar" />} onClick={() => handleOpenTab('Dodaj fakturę')}>Dodaj fakturę</MenuItem>
                                    <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/towary" />} onClick={() => handleOpenTab('Lista faktur')}>Lista faktur</MenuItem>
                                </SubMenu>

                                <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/aktualnosci" />}>Aktualności</MenuItem>
                                <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/kontakt" />}>Kontakt</MenuItem>
                                <MenuItem style={{ backgroundColor: '#8ACBED' }} component={<Link to="/" />}>Wyloguj się</MenuItem>
                            </Menu>

                            <footer className="footer">
                                <div>© CAMSOFT </div>
                                <div>Kontakt: 512-345-678 | pomoc@camsoft.pl</div>
                            </footer>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
            <Container fluid className="mt-0 pt-0 horizontal-scroll-container page-content" style={{ marginLeft: '300px', padding: '20px', height: '95vh' }}>
                <Row>
                    {/*<Col sm={0}></Col>*/}
                    {/*<Col sm={13}>*/}
                        <div className="px-10">
                            <Outlet />
                        </div>
                    {/*</Col>*/}
                </Row>
            </Container>
        </div>
    );
};

export default Layout;
