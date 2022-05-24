import React from 'react'

// componentes
import TeamMemberComponent from '../../Components/TeamMemberComponent'
// assets
import fotoMendoza from '../../assets/img/Mendoza.jpeg'
import fotoPeña from '../../assets/img/peña.jpeg'

// Style
import './OurTeam.css'

const OurTeam = () => {

  const socios = [
    {
      nombre: 'M. EN D. LUIS ENRIQUE MENDOZA DOSAL',
      cargo: '',
      trayectoria: '25 años de experiencia en asuntos laborales, actualmente litigante en materia individual y colectiva, Presidente Titular por ministerio de ley y Secretario General de Conflictos Colectivos y Huelgas de la Junta de Conciliación y Arbitraje del valle Cuautitlán-Texcoco, Presidente de diversas Juntas especiales en las Juntas del Estado de	 Mexico, del valle de Toluca y del valle Cuautitlán-Texcoco, Contralor Jurídico interno y Jefe de la sección de amparos en la Junta de Conciliación y Arbitraje del Valle de Toluca, Auxiliar de trámite en diversas juntas, tanto en la del Estado de Mexico, como en la del valle Cuautitlán-Texcoco.',
      foto: fotoMendoza,
    },
    {
      nombre: 'M. EN A. P. JOSE LUIS PEÑA COLIN	',
      cargo: '',
      trayectoria: '22 años de experiencia en el área laboral, actualmente	litigante en	materia individual y colectiva, Presidente por ministerio de ley	de la Junta Especial 7 de la Junta	de Conciliación y Arbitraje del Estado de Mexico con sede en Tlalnepantla,	auxiliar de trámite en diversas	Juntas especiales de la Junta del	Estado de Mexico y del valle	Cuautitlán-Texcoco, Secretario de acuerdos en diversas juntas	especiales	de la Junta	del Estado	de Mexico	y del	valle Cuautitlán-Texcoco,	Secretario	particular	del	Director General del Trabajo	 de la	Secretaria	del Trabajo del Estado	de Mexico.',
      foto: fotoPeña,
  },
];

  return (
    <>
   <section id="ourTeamLayer" >
    <div class="page-section" id="ourTeam" >
      <div class="container">
        <div class="text-center">
          <div class="subhead">Nuestro equipo</div>
          <h2 class="title-section" >Nuestro equipo de expertos en Cipla Abogados S.C.</h2>
        </div>
        <div class="teamMembersContainer">
        <TeamMemberComponent nombre={socios[0].nombre} trayectoria={socios[0].trayectoria} foto={socios[0].foto}/>
        <TeamMemberComponent nombre={socios[1].nombre} trayectoria={socios[1].trayectoria} foto={socios[1].foto}/>
        </div>
      </div> 
    </div> 
   </section> 
    </>
  )
}

export default OurTeam