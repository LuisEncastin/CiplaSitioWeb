import React from 'react'

// styles
import './IdentidadCorporativa.css'

const IdentidadCorporativa = () => {
  return (
    <>
        <div id='identidadCorporativaLayer'>
            <section id='identidadCorporativaSection'>
            <div className='subhead text-center' style={{color: "#ffffff"}}>Identidad corporativa</div>
            <div className='identidadContainer'>
                <div className='value mision'>
                    <h1>Misión</h1>
                    <p>Dotar a nuestros clientes con un servicio profesional y de conocimiento del Derecho del Trabajo, brindándoles certeza y tranquilidad en sus relaciones laborales en el afán de crear un ambiente que fomente el crecimiento y productividad en sus empresas.</p>
                </div>
                <div className='value mision'>
                    <h1>Visión</h1>
                    <p>
                    Ser un despacho dedicado a proveer todos los servicios jurídicos profesionales relacionados con el ámbito laboral, con el compromiso firme de resolver las necesidades específicas de los sectores de la producción en sus relaciones. <br/>
                    Brindando y respaldando a nuestros clientes, con respuestas, asesoría y acompañamiento permanente en la solución y manejo de las relaciones de trabajo y sus conflictos. 
                    </p>
                </div>
                <div className='value mision'>
                    <h1>Valores</h1>
                    <p>Nos regimos bajo los principios y valores del Derecho y Justicia; conducimos nuestro servicio profesional con la premisa fundamental del respeto, la honestidad, la igualdad, en la búsqueda del bien común.</p>
                </div>
            </div>
            </section>            
        </div>
    </>
  )
}

export default IdentidadCorporativa