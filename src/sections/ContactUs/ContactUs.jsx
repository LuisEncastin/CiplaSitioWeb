import React from 'react'

// styles
import './ContactUs.css'

const ContactUs = () => {
  return (
    <>
    <div class="page-section contactUsSection" id="contactUs">
      <div class="container">
        <div class="text-center">
          <h2 class="title-section mb-3">Contáctanos</h2>
          <p>¿Buscas asistencia personalizada? <br/> 
            Completa los datos y en breve estaremos en contacto contigo.</p>
        </div>
        <div class="row justify-content-center mt-5">
          <div class="col-lg-8">
            <form action="#" class="form-contact">
              <div class="row">
                <div class="col-sm-6 py-2">
                  <label htmlFor="name" class="fg-grey">Nombre</label>
                  <input type="text" class="form-control" id="name" placeholder="Nombre*"/>
                </div>
                <div class="col-sm-6 py-2">
                  <label htmlFor="email" class="fg-grey">Correo</label>
                  <input type="text" class="form-control" id="email" placeholder="Correo electrónico*"/>
                </div>
                <div class="col-sm-6 py-2">
                  <label htmlFor="phone" class="fg-grey">Teléfono</label>
                  <input type="text" class="form-control" id="phone" placeholder="Teléfono*"/>
                </div>
                <div class="col-12 py-2">
                  <label htmlFor="message" class="fg-grey">Mensaje</label>
                  <textarea id="message" rows="8" class="form-control" placeholder="¿En qué podemos apoyarte?*"></textarea>
                </div>
                <div class="col-12 mt-3">
                  <button type="submit" class="btn btn-primary px-5" disabled>Enviar</button>
                </div>
              </div>
            </form>
          </div>
          <p class="m-3">También puedes contactarnos directamente a través del correo: <a href="contacto@ciplabogados.com">contacto@ciplabogados.com</a></p>
        </div>
      </div> 
    </div> 
    </>
  )
}

export default ContactUs