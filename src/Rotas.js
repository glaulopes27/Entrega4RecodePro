import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './views/components/Navbar';
import Home from './views/Home';
import AddCliente from './views/AddCliente';

import EditCliente from './views/EditCliente';
import ViewCliente from './views/ViewCliente';

export default function Rotas() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/AddCliente" elemente={<AddCliente />} />
                <Route path="/edit/:id_cliente" element={<EditCliente />} />
                <Route path="/view/:id_cliente" element={<ViewCliente />} />
                <Route path="*" element={<h1>Página não encontrada.</h1>} />
            </Routes>
        </Router>
    )
}
