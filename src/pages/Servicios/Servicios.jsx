import React from 'react'

// components
import OurServices from '../../sections/OurServices/OurServices';
import BannerImage from '../../sections/BannerImage/BannerImage';

//assets
import imagenBannerServices from '../../assets/img/bg_image_2.jpg'

const Servicios = () => {
  return (
    <>
      <BannerImage tituloBanner={''} imagenBanner={imagenBannerServices}/>
      <OurServices/>
    </>
  )
}

export default Servicios