import React from 'react'

// Componentes
import AboutUs from '../../sections/AboutUs/AboutUs'
import IdentidadCorporativa from '../../sections/IdentidadCorporativa/IdentidadCorporativa'
import OurTeam from '../../sections/OurTeam/OurTeam'
import BannerImage from '../../sections/BannerImage/BannerImage'

// assets
import recursosImage from '../../assets/img/bg_image_3.jpg'
import imagenBannerNosotros from '../../assets/img/bg_image_1.jpg'

const Nosotros = () => {
  return (
    <>
        <BannerImage tituloBanner={''} imagenBanner={imagenBannerNosotros}/>
        <AboutUs/>
        <IdentidadCorporativa/>
        <OurTeam/>
        <div class="container" style={{padding:'2rem 0'}} id="nosotros">
          <div class="row align-items-center">
            <div class="col-lg-6 py-3">
              {/* <div class="subhead">S</div> */}
              <h2 class="title-section">Nuestros <span style={{color:'var(--blue)'}}>Recursos</span> </h2>

              <p>
              Actualmente tenemos nuestra oficina matriz en Toluca, Estado de México equipada con tecnología de punta que permiten dar respuesta inmediata a las necesidades de nuestros clientes. <br/>
              Contamos con el personal profesional (12 abogados a la fecha) y material de trabajo suficiente para la atención oportuna de asuntos en varias entidades federativas, con independencia, de los que se tienen actualmente en atención. <br/>
              Nuestro personal cuenta con amplia experiencia en el manejo de los procedimientos laborales previos a la última reforma laboral y actualmente nos encontramos en constante capacitación respecto del nuevo procedimiento en materia laboral lo cual puede asegurar una asesoría integral y representación eficiente. <br/>
              </p>
            </div>
            <div class="col-lg-6 py-3">
              <div class="about-img">
                <img src={recursosImage} alt="Reunion"/>
              </div>
            </div>
          </div>
          <div class="column align-items-center">
            <div className='cobertura'>
                <h2 class="title-section">Ofrecemos nuestros <span style={{color:'var(--blue)'}}>servicios en los siguientes estados:</span> </h2>
                  <p>
                    <ul>
                      <li>ESTADO DE MÉXICO</li>
                      <li>CIUDAD DE MÉXICO</li>
                      <li>QUINTANA ROO</li>
                      <li>JALISCO</li>
                      <li>MORELOS</li>
                      <li>QUERÉTARO</li>
                      <li>PUEBLA</li>
                      <li>HIDALGO</li>
                    </ul>
                  </p>
            </div>
            <div>
                <div className='cobertura'>
                  <h2 class="title-section">Cobertura directa <span style={{color:'var(--blue)'}}>Ciudad de méxico:</span> </h2>
                    <p>
                    <ul>
                      <li>Estado de México</li>
                      <li>Toluca</li>
                      <li>Ecatepec</li>
                      <li>Tlalnepantla</li>
                      <li>Naucalpan</li>
                      <li>Cuatitlán</li>
                    </ul>
                    </p>                  
                </div>
                <div className='cobertura'>
                  <h2 class="title-section">Cobertura directa <span style={{color:'var(--blue)'}}> y corresponsalías</span> </h2>
                    <p>
                    <ul>
                      <li>Estado de México</li>
                      <li>Toluca</li>
                      <li>Ecatepec</li>
                      <li>Tlalnepantla</li>
                      <li>Naucalpan</li>
                      <li>Cuatitlán</li>
                    </ul>
                    </p>                  
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Nosotros