import React from 'react'
 
// assets
import reunionImage from '../../assets/img/about.jpg'

// styles
import './AboutUs.css'

const AboutUs = () => {
  return (
    <>
      <div class="page-section aboutUsSection" id="aboutUs">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 py-3">
              <div class="subhead">Sobre nosotros</div>
              <h2 class="title-section">Somos <span style={{color:'var(--blue)'}}>abogados profesionales</span> en el campo del derecho laboral.</h2>

              <p>En "CIPLA, S.C. Abogados" somos una firma de que se dedica a proveer todos los servicios jurídicos y profesionales relacionados con el ámbito laboral, con el compromiso firme de brindar a nuestros clientes de respuestas, asesoría y acompañamiento permanente en la solución y manejo de las relaciones de trabajo y sus conflictos.</p>

              <a href="/nosotros" class="btn btn-primary mt-4">Conoce más sobre nosotros.</a>
            </div>
            <div class="col-lg-6 py-3">
              <div class="about-img">
                <img src={reunionImage} alt="Reunion"/>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default AboutUs