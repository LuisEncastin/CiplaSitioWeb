// Router
import {BrowserRouter, Routes, Route } from "react-router-dom";

// styles
// import './styles/bootstrap.css'
import '../styles/index.css';

// Components
import Home from '../pages/Home/Home';
import Nosotros from "../pages/Nosotros/Nosotros";
import Servicios from "../pages/Servicios/Servicios";
import Contacto from "../pages/Contacto/Contacto";
import Contratos from "../pages/Contratos/Contratos"

function App() {
  return (
    <>
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/servicios" element={<Servicios/>} />
        <Route path="/contratos" element={<Contratos/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
    </BrowserRouter>
    </div>
    </>

  );
}

export default App;
