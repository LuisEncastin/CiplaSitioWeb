import React from 'react'
import { Link } from 'react-router-dom';

// assets

const ServiceComponent = ({
  categoria,
  imagen,
  descripcion,
}) => {
  return (
    <>
    <div class="service-wrap">
        <Link to="/servicios">
            <h5 class="text-center">{categoria}</h5>
        </Link>
        
        <div class="service-container">
          <img src={imagen} alt="imagen" className='service-image'/>
            {/* <div class="service-image">
            </div> */}
            <div class="service-content" >
              <div>
                <Link to="/servicios" id='serviceDescription'>
                  {descripcion}  
                </Link>
                <p className='callToAction'>Conoce más...</p>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ServiceComponent