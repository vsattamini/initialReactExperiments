import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Repositories from './pages/Repositories/index';
import Home from './pages/Home/index';

export default function Rut() {
    return (
        <Router>
            <Routes>
            <Route path="/" element={<Home/>}>
          </Route>
                <Route path="/Repositories" element={<Repositories/>}>
          </Route>
            </Routes>
        </Router>
    )  
}

// Diferente da aula, tive que usar Routes no lugar de switch 
// Diferente da aula, tive que trocar component por element e usar <Repositories/> para direcionar, diferente de so Repositories