import { useState } from 'react'
import './App.css'
import Principal from './components/Principal';
import Nuevo from './components/Nuevo';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';



function App() {


  return (
    <>
      <div className='contenedor-contactos'>
        <h1>Agenda de Contactos</h1>
      </div>
      <div>
        <Router>
          <Routes>

            <Route path='/' element={<Principal />} />
            <Route path='/nuevo' element={<Nuevo />} />

          </Routes>
        </Router>

      </div>
    </>
  );
}

export default App;
