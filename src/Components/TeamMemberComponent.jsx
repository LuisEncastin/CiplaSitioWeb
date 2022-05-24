import React from 'react'

const TeamMemberComponent = ({
  nombre,
  trayectoria,
  foto,
}) => {
  return (
    <>
    <div class="team-wrap">
        <div class="team-profile">
          {/* <div style={{ backgroundImage: `url(require(${foto}))` }}></div> */}
            <img src={foto} alt={nombre}/>
        </div>
        <div class="team-content">
            <h5>{nombre}</h5>
            <div class="text-sm fg-grey">{trayectoria}</div>

            {/* <div class="social-button">
            <a href="/"><span class="mai-logo-facebook-messenger"></span></a>
            <a href="/"><span class="mai-call"></span></a>
            <a href="/"><span class="mai-mail"></span></a>
            </div> */}
        </div>
    </div>
    </>
  )
}

export default TeamMemberComponent