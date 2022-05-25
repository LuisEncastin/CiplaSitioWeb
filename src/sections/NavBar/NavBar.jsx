// hooks
import React, {useState} from "react";
import { Link } from 'react-router-dom';

// assets
import logo from '../../assets/img/CiplaLogo.jpeg';

// style
import '../../styles/bootstrap.css' 
import './NavBar.css'

function NavBar() {
    
  const [toggle, setToggle] = useState(false);

  const handleToggle= () => {
		setToggle(!toggle);
	}

    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-light">
          <div class="container">

            <Link to="/" class="navbar-brand"><img src={logo} alt="Logo Cipla Abogados" /></Link>

            <button class="navbar-toggler" onClick={handleToggle}  data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div className={`navbar-collapse ${toggle ? 'collapse-open' : 'collapse-closed'}`} id="navbarContent">
              <ul class="navbar-nav ml-auto pt-3 pt-lg-0">
                <li class="nav-item">
                  <Link to="/nosotros" class="nav-link">Nosotros</Link>
                </li>
                <li class="nav-item">
                  <Link to="/servicios" class="nav-link">Servicios</Link>
                </li>
                <li class="nav-item">
                  <Link to="/contratos" class="nav-link">Contratos</Link>
                </li>
                <li class="nav-item">
                  <Link to="/contacto" class="nav-link">Contacto</Link>
                </li>
                {/* <li class="nav-item">
                  <a href="/" class="nav-link">Recursos</a>
                  <ul>
                    <li><a href="/faq.html">Preguntas frecuentes</a></li>
                    <li><a href="/blog.html">Blog</a></li>
                  </ul>  
                </li> */}
              </ul>
            </div>
          </div>
        </nav>          
      </div>
    );
  };

  export default NavBar;