import React, {useState} from 'react'

// Components
import ServiceComponent from '../../Components/ServiceComponent'
import LandingServiceComponent from '../../Components/LandingServiceComponent'
// assets
import empresas from '../../assets/img/empresas.jpg'
import empleados from '../../assets/img/empleados.jpg'
// styles
import './OurServices.css'

const OurServices = () => {

  const [displayServiceModal, setDisplayServiceModal] = useState(false);

  const handleServiceModal =()=>{
      setDisplayServiceModal(!displayServiceModal);
  }

  return (
    <>
    <div class="page-section servicesSection" id="services">
    { displayServiceModal === true
    ? <LandingServiceComponent
      displayServiceModal={displayServiceModal}
      setDisplayServiceModal={setDisplayServiceModal}
      handleServiceModal={handleServiceModal}
      />
    :   null
    }
      <div class="container">
        <div class="text-center">
          <div class="subhead">Nuestros servicios</div>
          <h2 class="title-section">Conoce el catálogo de servicios que ponemos a tu disposición</h2>
        </div>
        <div class="row justify-content-center">

            <div class="row justify-content-center">

            <ServiceComponent categoria={'Empresas'} imagen={empresas} descripcion={'Servicios dirigidos a personas morales en materia laboral'} />
            <ServiceComponent categoria={'Empleados'} imagen={empleados} descripcion={'Servicios de asesoría jurídica en materia laboral para el trabajador.'} />

            </div>

            <h4>Las Auditorias y Consultorías Jurídico Laborales constan, entre otras cosas, de:</h4>
                <div class="container" id='servicesList'>
                    <div onClick={handleServiceModal} class="servicio1 ciplaService">1. Elaboración o revisión constante del Reglamento Interior de Trabajo </div>
                    <div onClick={handleServiceModal} class="servicio2 ciplaService">2. Revisión y en su caso elaboración de los Contratos Individuales de Trabajo.</div>
                    <div onClick={handleServiceModal} class="servicio3 ciplaService">3. Auxilio personalizado o por medios electrónicos en la Contratación de personal de nuevo ingreso o renovación de contrato.</div>
                    <div onClick={handleServiceModal} class="servicio4 ciplaService">4. Actualización constante de Contratos Individuales de Trabajo.</div>
                    <div onClick={handleServiceModal} class="servicio5 ciplaService">5. Revisión y en su caso, elaboración o actualización de los Planes y Programas de Capacitación y Adiestramiento con el auxilio del cliente.</div>
                    <div onClick={handleServiceModal} class="servicio6 ciplaService">6.	Revisión y en su caso elaboración de los Cuadros Generales de Antigüedad.</div>
                    <div onClick={handleServiceModal} class="servicio7 ciplaService">7.	Revisión y en su caso elaboración de los recibos de aguinaldo, vacaciones y primas vacacionales</div>
                    <div onClick={handleServiceModal} class="servicio8 ciplaService">8.	Revisión y en su caso elaboración de las constancias de antigüedad para disfrute de las mismas.</div>
                    <div onClick={handleServiceModal} class="servicio9 ciplaService">9.	Elaboración de las actas de Integración de las Comisiones Mixtas de Reparto de Utilidades; de Capacitación, Adiestramiento y Productividad; de Seguridad e Higiene; de Cuadro General de Antigüedad y del Reglamento Interior de Trabajo.</div>
                    <div onClick={handleServiceModal} class="servicio10 ciplaService">10. Elaboración y Constante revisión de los Contratos Colectivos de Trabajo así como de los tabuladores de salarios correspondientes.</div>
                    <div onClick={handleServiceModal} class="servicio11 ciplaService">11. Elaboración o Revisión de Controles de Asistencia del personal, en cualquier modalidad.</div>
                    <div onClick={handleServiceModal} class="servicio12 ciplaService">12. Revisión y sugerencias sobre recibos de nómina o recibos de pago de salario; así como de las prestaciones legales incluyendo, en su caso, prima dominical, fondo de ahorro, horas extras, días de descanso obligatorio y semanal, entre otras.</div>
                    <div onClick={handleServiceModal} class="servicio13 ciplaService">13. Revisión de las altas, modificaciones y bajas ante el Instituto Mexicano del Seguro Social</div>
                    <div onClick={handleServiceModal} class="servicio14 ciplaService">14. Auxilio en las terminaciones de las relaciones laborales, ya sea personalizada o por medios electrónicos.</div>
                    <div onClick={handleServiceModal} class="servicio15 ciplaService">15. Elaboración	de	los	Convenios	de	Ley	antes	las	Autoridades correspondientes.</div>
                    <div onClick={handleServiceModal} class="servicio16 ciplaService">16. Asesoramiento y Tramites para contratación de Personal Extranjero.</div>
                    <div onClick={handleServiceModal} class="servicio17 ciplaService">17. Asistencia y/o revisión de inscripciones, cedulas de determinación y liquidación ante IMSS, INFONAVIT, INFONACOT e ISSEMYM.</div>
                    <div onClick={handleServiceModal} class="servicio18 ciplaService">18. Asistencia y/o Asesoría en contratación a menores de edad.</div>
                    <div onClick={handleServiceModal} class="servicio19 ciplaService">19. Asistencia y asesoría jurídica en materia administrativa relacionada con la aplicación de las leyes en materia laboral y/o en su caso, sin relación con estas con previo análisis y acuerdo con el cliente.</div>
                    <div onClick={handleServiceModal} class="servicio20 ciplaService">20. Asesoramiento	sobre	Avisos	de	Privacidad	y	Contratos	de    Confidencialidad.</div>
                    <div onClick={handleServiceModal} class="servicio21 ciplaService">21. Asesoría y constante atención personal o por cualquier medio de comunicación que ambas partes establezcan para tal efecto</div>
                </div>       
        </div>
      </div>
    </div> 
    </>
  )
}

export default OurServices