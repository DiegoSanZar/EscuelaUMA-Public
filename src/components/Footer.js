import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../resources/img/uma_logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhoneSquare } from '@fortawesome/free-solid-svg-icons'

function Footer() {

  return (
    <footer className="container-fluid py-5 bg-dark">
      <div className="row">
        <div className="col-md-4 col-sm-12 text-center">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              className="navbar-brand-img"
              style={{ width: "150px", height: "150px", borderRadius: "100px"}}
            ></img>
          </a>
        </div>
        <div className="col-md-4 col-sm-6">
          <h5 className="text-primary fw-bolder">Sede principal</h5>
          <p className="text-light">
            <FontAwesomeIcon icon={faMapMarkerAlt}/> Sede Principal             <br />
            Jirón Carabaya 421,                                                 <br />
            Lima 1 - Perú.                                                      <br />
            <FontAwesomeIcon icon={faPhoneSquare}/> Teléfono: (511) 426 9677
          </p>
        </div>
        <div className="col-md-4 col-sm-6">
          <h5 className="text-primary fw-bolder">Nosotros:</h5>
          <ul className="list-unstyled text-small">
            <li>
              <Link className="link-light" to="/eventos">Eventos</Link>
            </li>
            <li>
              <Link className="link-light" to="/nosotros">Nosotros</Link>
            </li>
            <li>
                <Link className="link-light" to="/clases">Clases</Link>
            </li>
            <li>
                <Link className="link-light" to="/contactenos">Contactenos</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );

}

export default Footer;
