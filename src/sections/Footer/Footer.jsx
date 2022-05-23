import React from 'react'

// styles
import './Footer.css'

const Footer = () => {
  return (
    <>
 <footer class="page-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 py-3">
          <h3><a href="index.html" class="navbar-brand">CIPLA S.C.<span class="text-primary"> Abogados</span></a></h3>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Contacto</h5>
          <p>Dirección</p>
          <p>Av. Paseo Tollocan, #1213, Colonia El Seminario, C.P. 50170, Toluca, Estado de México.</p>
          <p>Email: contacto@ciplabogados.com</p>
          <p>Teléfono: +52 722 2 80 97 76</p>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Navegación</h5>
          <ul class="footer-menu">
            <li class="nav-item">
              <a href="/html/about.html">Sobre nosotros</a>
            </li>
            <li class="nav-item">
              <a href="/html/services.html">Servicios</a>
            </li>
            <li>
              <a href="/html/contact.html">Contacto</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-3 py-3">
          <h5>Legal</h5>
          <ul class="footer-menu">
            <li class="nav-item">
              <a href="/html/terminosYCondiciones.html" target="_blank">Términos y condiciones</a>
            </li>
            <li class="nav-item">
              <a href="/html/AvisoDePrivacidad.html" target="_blank">Aviso de privacidad</a>
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
        <div class="col-md-6 text-right">
          <div class="sosmed-button">
            <a href="/"  ><span class="mai-logo-facebook-f"></span></a>
            <a href="/"><span class="mai-logo-twitter"></span></a>
            <a href="/"><span class="mai-logo-youtube"></span></a>
            <a href="/"><span class="mai-logo-linkedin"></span></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer;