import React from 'react'

// componentes
import ContactUs from '../../sections/ContactUs/ContactUs'
import BannerImage from '../../sections/BannerImage/BannerImage';
import Map from '../../sections/Map/Map';

//assets
import imagenBannerServices from '../../assets/img/pexels-rodnae-productions-5922211.jpg'

const Contacto = () => {
  return (
    <>
      <BannerImage tituloBanner={''} imagenBanner={imagenBannerServices}/>
      <ContactUs/>
      <Map/>    
    </>
  )
}

export default Contacto