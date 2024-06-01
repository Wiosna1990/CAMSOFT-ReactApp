import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Towar } from './pages/towar/TowarPage.jsx'
import { Towary } from './pages/towar/TowaryPage.jsx'
import { Pracownik } from './pages/pracownik/PracownikPage.jsx'
import { Pracownicy } from './pages/pracownik/PracownicyPage.jsx'
import { Zleceniobiorcy } from './pages/pracownik/ZleceniobiorcyPage.jsx'
import { Wszyscy } from './pages/pracownik/WszyscyPage.jsx'
import { Kontakt } from './pages/kontakt/KontaktPage.jsx'
import { Placa } from './pages/placa/PlacaPage.jsx'
import { PracownicyPlaca } from './pages/placa/PracownicyPlacaPage.jsx'
import { ZleceniobiorcyPlaca } from './pages/placa/ZleceniobiorcyPlacaPage.jsx'
import { PlacaZlecenie } from './pages/placa/PlacaZleceniePage.jsx'
import { WszyscyPlaca } from './pages/placa/WszyscyPlacaPage.jsx'
import { Layout } from './pages/layout/Layout.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './pages/login/LoginPage.jsx';



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}>
                    <Route index element={<Login />} />
                </Route>

                <Route path='/app' element={<Layout />}>
                    <Route index element={<App />} />
                </Route>
                <Route path='/towar' element={<Layout />}>
                    <Route index element={<Towar />} />
                </Route>
                <Route path='/towary' element={<Layout />}>
                    <Route index element={<Towary />} />
                </Route>
                <Route path='/pracownik' element={<Layout />}>
                    <Route index element={<Pracownik />} />
                </Route>
                <Route path='/pracownicy' element={<Layout />}>
                    <Route index element={<Pracownicy />} />
                </Route>
                <Route path='/kontakt' element={<Layout />}>
                    <Route index element={<Kontakt />} />
                </Route>
                <Route path='/placa' element={<Layout />}>
                    <Route index element={<Placa />} />
                </Route>
                <Route path='/pracownicyplaca' element={<Layout />}>
                    <Route index element={<PracownicyPlaca />} />
                </Route>
                <Route path='/zleceniobiorcy' element={<Layout />}>
                    <Route index element={<Zleceniobiorcy />} />
                </Route>
                <Route path='/zleceniobiorcyplaca' element={<Layout />}>
                    <Route index element={<ZleceniobiorcyPlaca />} />
                </Route>
                <Route path='/wszyscyplaca' element={<Layout />}>
                    <Route index element={<WszyscyPlaca />} />
                </Route>
                <Route path='/wszyscy' element={<Layout />}>
                    <Route index element={<Wszyscy />} />
                </Route>
                <Route path='/placazlecenie' element={<Layout />}>
                    <Route index element={<PlacaZlecenie />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
