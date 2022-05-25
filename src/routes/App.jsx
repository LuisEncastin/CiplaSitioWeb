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
import Terminos from "../sections/Terminos/Terminos";
import AvisoPrivacidad from "../sections/AvisoPrivacidad/AvisoPrivacidad";

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
        <Route path="/terminos-y-condiciones" element={<Terminos/>} />
        <Route path="/aviso-de-privacidad" element={<AvisoPrivacidad/>} />
      </Routes>
    </BrowserRouter>
    </div>
    </>

  );
}

export default App;
