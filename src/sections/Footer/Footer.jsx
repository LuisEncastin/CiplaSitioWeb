import React from 'react'
import { Link } from 'react-router-dom';

// assets
import logo from '../../assets/img/CiplaLogo.jpeg';

// styles
import './Footer.css'

const Footer = () => {
  return (
    <>
 <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 py-3">
          <Link to="/" class="navbar-brand"><img src={logo} alt="Logo Cipla Abogados" /></Link>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Contacto</h5>
          <p>Dirección</p>
          <p>Av. Paseo Tollocan, #1213, Colonia El Seminario, C.P. 50170, Toluca, Estado de México.</p>
          <p>Email: contacto@ciplabogados.com</p>
          <p>Teléfonos de oficina: <br/>
           +52 722 2 80 97 76 <br/>
           +52 722 5 67 67 32  <br/>
           55 62 22 14 27  <br/>
           </p>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Navegación</h5>
          <ul class="footer-menu">
            <li class="nav-item">
              <Link to="/nosotros" class="nav-link">Sobre nosotros</Link>
            </li>
            <li class="nav-item">
              <Link to="/servicios" class="nav-link">Servicios</Link>
            </li>
            <li class="nav-item">
              <Link to="/contratos" class="nav-link">Contratos</Link>
            </li>
            <li class="nav-item">
              <Link to="/contacto" class="nav-link">Contacto</Link>
            </li> 
          </ul>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Legal</h5>
          <ul class="footer-menu">
            <li class="nav-item">
              <Link to="/terminos-y-condiciones" target="_blank">Términos y condiciones</Link>
            </li>
            <li class="nav-item">
              <Link to="/aviso-de-privacidad" target="_blank">Aviso de privacidad</Link>
            </li>
          </ul>
        </div>
      </div>

      <hr/>

      <div class="row mt-4">
        <div class="col-md-6" className='copyright'>
          
          <p><strong>Copyright 2022.</strong><br />
          Website designed by<a href="/" target="_blank"> Luis Encastin</a></p>
        </div>
        {/* <div class="col-md-6 text-right">
          <div class="sosmed-button">
            <a href="/"><span class="mai-logo-facebook-f"></span></a>
            <a href="/"><span class="mai-logo-twitter"></span></a>
            <a href="/"><span class="mai-logo-youtube"></span></a>
            <a href="/"><span class="mai-logo-linkedin"></span></a>
          </div>
        </div> */}
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer;