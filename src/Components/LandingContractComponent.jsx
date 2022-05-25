import React from 'react'

// assets
import contractImage from '../assets/img/contractImage.jpg'

const LandingContractComponent = ({
  displayContractModal,
  setDisplayContractModal,
  handleContractModal,
}) => {
  return (
    <>
    <section id='landingContractComponentSection' className="displayContractModal" 
    >
      <div className='modalWrapper'>
        <button className='closeModalButton' onClick={handleContractModal}>Cerrar</button>
          <img src={contractImage} alt="Contrato" className='contractImage' />
        <div className='modalMessage'>
          <h1>Para conocer tu contrato, comunícate con nosotros:</h1>
          <a href='https://wa.me/+525562221427' rel="noopener noreferrer"  target="_blank"><button>Contactar</button></a>
        </div>
      </div> 
    </section>
    </>
  )
}

export default LandingContractComponent