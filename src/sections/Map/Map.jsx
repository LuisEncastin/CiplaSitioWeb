import React from 'react'

// styles
import './Map.css'

const Map = () => {
  return (
    <>
    <div class="maps-container">
      <div id="google-maps"></div>
      <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAIA_zqjFMsJM_sxP9-6Pde5vVCTyJmUHM&callback=initMap"></script>
    </div>
    </>
  )
}

export default Map