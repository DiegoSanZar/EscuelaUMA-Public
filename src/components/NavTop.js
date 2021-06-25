import React, {useState} from 'react'
import {Link} from "react-router-dom" 
import logo from "../resources/img/uma_logo.jpg"

function NavTop() {
    const [estaColapsado, setEstaColapsado] = useState(true)
    const manejarNavbar = () => setEstaColapsado(!estaColapsado)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" className="navbar-brand-img" style={{width:"150px",height:"150px"}}></img>
          </a>  

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!estaColapsado ? true : false} onClick={manejarNavbar} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`${estaColapsado ? 'collapse' : ''} navbar-collapse`} id="navbarCollapse">
            <ul className="navbar-nav ">
              <li className="nav-item p-3">
                <a className="nav-link" href="#">Inicio</a>
              </li>
              <li className="nav-item p-3">
                <Link className="nav-link" to="/carrito">Eventos</Link>
              </li>
              <li className="nav-item p-3">
                <Link className="nav-link" to="/carrito">Nosotros</Link>
              </li>              
              <li className="nav-item p-3">
                <Link className="nav-link" to="/calendario">Clases</Link>
              </li>              
              <li className="nav-item p-3">
                <Link className="nav-link" to="/carrito">Contactenos</Link>
              </li> 
            </ul>
            <Link className="navbar-btn btn btn-sm btn-primary lift ms-auto p-2" to="/usuario">Iniciar Sesión</Link>

          </div>
        </div>
      </nav>
    )
}

export default NavTop
