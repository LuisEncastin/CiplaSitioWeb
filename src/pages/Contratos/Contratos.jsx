import React from 'react'

// componentes
import OurContracts from '../../sections/OurContracts/OurContracts'
import BannerImage from '../../sections/BannerImage/BannerImage';

//assets
import imagenBannerServices from '../../assets/img/bg_image_3.jpg'

const Contratos = () => {
  return (
    <>
      <BannerImage tituloBanner={''} imagenBanner={imagenBannerServices}/>
      <OurContracts/>
    </>
  )
}

export default Contratos