import React from 'react'

// assets
import bgImage from '../../assets/img/bg_image_1.jpg'
import logo from '../../assets/img/CiplaLogo.jpeg';

// styles
import './Intro.css'

const Intro = () => {
  return (
    <>
    <div class="page-banner home-banner" id='intro' >
      <div className='caroussel'>
        <div className='caroussel-Layer'></div>
        <img src={bgImage} alt="Imagen de fondo" id='introBgImage'/>
      </div>
      <div class="introPrincipalContainer">
        <img src={logo} alt="LOGO CIPLA"/>
        <h1 class="mb-4 gancho">
          Consultoría integral en procedimiento laboral y amparo <br/>
        </h1>
        <h2>
          Soluciones claras y efectivas a necesidades concretas. <br/>
        </h2>
      </div>
    </div> 
    </>
  )
}

export default Intro