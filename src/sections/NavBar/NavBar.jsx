// hooks
import React, {useState} from "react";
// {useState, useEffect, useRef} 

// Router
// import { Link } from "react-router-dom";
// import AboutUs from "../AboutUs/AboutUs";
// import ContactUs from "../ContactUs/ContactUs";
// import OurServices from "../OurServices/OurServices";

// style
import '../../styles/bootstrap.css' 
import './NavBar.css'

function NavBar() {
    
  const [toggle, setToggle] = useState(false);

  const handleToggle= () => {
		setToggle(!toggle);
	}

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <a href="index.html" class="navbar-brand">CIPLA S.C.<span class="text-primary"> Abogados</span></a>

            <button class="navbar-toggler" onClick={handleToggle}  data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className={`navbar-collapse ${toggle ? 'collapse-open' : 'collapse-closed'}`} id="navbarContent">
              <ul class="navbar-nav ml-auto pt-3 pt-lg-0">
                <li class="nav-item">
                  <a href="/html/about.html" class="nav-link">Sobre nosotros</a>
                </li>
                <li class="nav-item">
                  <a href="/html/services.html" class="nav-link">Servicios</a>
                </li>
                <li class="nav-item">
                  <a href="/html/contact.html" class="nav-link">Contacto</a>
                </li>
                <li class="nav-item">
                  <a href="/html/contratos.html" class="nav-link">Contratos</a>
                </li>
                {/* <li class="nav-item">
                  <a href="/" class="nav-link">Recursos</a>
                  <ul>
                    <li><a href="/html/faq.html">Preguntas frecuentes</a></li>
                    <li><a href="/html/blog.html">Blog</a></li>
                  </ul>  
                </li> */}
              </ul>
            </div>
          </div>
        </nav>          
      </>
    );
  };

  export default NavBar;