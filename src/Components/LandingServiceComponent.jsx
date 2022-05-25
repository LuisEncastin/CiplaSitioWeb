import React from 'react'

// assets
import serviceImage from '../assets/img/bg_image_2.jpg'

const LandingServiceComponent = ({
  displayServiceModal,
  setDisplayServiceModal,
  handleServiceModal,
}) => {
  return (
    <>
    <section id='landingServiceComponentSection' className="displayContractModal" 
    >
      <div className='modalWrapper'>
        <button className='closeModalButton' onClick={handleServiceModal}>Cerrar</button>
          <img src={serviceImage} alt="Contrato" className='contractImage' />
        <div className='modalMessage'>
          <h1>Para conocer más de nuestros servicios, comunícate con nosotros:</h1>
          <a href='https://wa.me/+525562221427' rel="noopener noreferrer"  target="_blank"><button>Contactar</button></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default LandingServiceComponent