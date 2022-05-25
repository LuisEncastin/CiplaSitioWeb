import React from 'react'

// styles
import './BannerImage.css'

const BannerImage = ({
    tituloBanner,
    imagenBanner,
}) => {
  return (
    <>
    <section class="bannerSection" style={{backgroundImage: `url(${imagenBanner})`}} >
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <h1 class="fg-white text-center">{tituloBanner}</h1>
            </div>
        </div>
    </section> 
    </>
  )
}

export default BannerImage