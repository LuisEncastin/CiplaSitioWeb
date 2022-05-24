import React from 'react'

// assets

const ServiceComponent = ({
  categoria,
  descripcion
}) => {
  return (
    <>
    <div class="service-wrap">
        <a href="/servicios">
            <h5 class="text-center">{categoria}</h5>
        </a>
        
        <div class="service-container">
            <div class="service-image">
              {/* imagen */}
            </div>
            <div class="service-content">
              <div>
                <a href="/servicios" id='serviceDescription'>
                  {descripcion}  
                </a>
                <p className='callToAction'>Conoce más...</p>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ServiceComponent