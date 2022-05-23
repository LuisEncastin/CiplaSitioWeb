import React from 'react'

// Components
import ServiceComponent from '../../Components/ServiceComponent'

// styles
import './OurServices.css'

const OurServices = () => {
  return (
    <>
    <div class="page-section servicesSection" id="services">
      <div class="container">
        <div class="text-center">
          <div class="subhead">Nuestros servicios</div>
          <h2 class="title-section">Conoce el catálogo de servicios que ponemos a tu disposición</h2>
        </div>

        <div class="row justify-content-center">

          <ServiceComponent/>
          <ServiceComponent/>

        </div>
      </div>
    </div> 
    </>
  )
}

export default OurServices