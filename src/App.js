import React  from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";
import Exercicio1 from './exercicio/exercicio1';
import Exercicio2 from './exercicio/exercicio2';
import Exercicio3 from './exercicio/exercicio3';
import Exercicio4 from './exercicio/exercicio4';
import Exercicio5 from './exercicio/exercicio5';
import Exercicio6 from './exercicio/exercicio6';
import Exercicio7 from './exercicio/exercicio7';
import Exercicio8 from './exercicio/exercicio8';
import Exercicio9 from './exercicio/exercicio9';
import Exercicio10 from './exercicio/exercicio10';
import Exercicio11 from './exercicio/exercicio11';
export default function App() {

  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/exercicio1" className='link'>Exercício 1</Link></li>
            <li><Link to="/exercicio2" className='link'>Exercício 2</Link></li>
            <li><Link to="/exercicio3" className='link'>Exercício 3</Link></li>
            <li><Link to="/exercicio4" className='link'>Exercício 4</Link></li>
            <li><Link to="/exercicio5" className='link'>Exercício 5</Link></li>
            <li><Link to="/exercicio6" className='link'>Exercício 6</Link></li> 
            <li><Link to="/exercicio7" className='link'>Exercício 7</Link></li> 
            <li><Link to="/exercicio8" className='link'>Exercício 8</Link></li> 
            <li><Link to="/exercicio9" className='link'>Exercício 9</Link></li>
            <li><Link to="/exercicio10" className='link'>Exercício 10</Link></li>
            <li><Link to="/exercicio11" className='link'>Exercício 11</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/exercicio1" element={<Exercicio1 />} />
          <Route path="/exercicio2" element={<Exercicio2 />} />
          <Route path="/exercicio3" element={<Exercicio3 />} />
          <Route path="/exercicio4" element={<Exercicio4 />} />
          <Route path="/exercicio5" element={<Exercicio5 />} />
          <Route path="/exercicio6" element={<Exercicio6 />} />
          <Route path="/exercicio7" element={<Exercicio7 />} />
          <Route path="/exercicio8" element={<Exercicio8 />} />
          <Route path="/exercicio9" element={<Exercicio9 />} />
          <Route path="/exercicio10" element={<Exercicio10 />} />
          <Route path="/exercicio11" element={<Exercicio11 />} />
        </Routes>
      </main>
    </Router>
  );
}
