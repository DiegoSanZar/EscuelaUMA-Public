import React, {useState} from 'react'
import {Link} from "react-router-dom" 
import Contactenos from "../resources/img/Contactenos.jpg"

function ContactenosDetail () {

  return (
    
  <div className="container">
    
      <div className="b-example-divider"></div>

      <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-bold">¿Tienes alguna pregunta o propuesta?</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Para nosotros es un placer atenderte. Por eso, te ofrecemos diferentes medios para responder a cada una de tus solicitudes de la manera que más te convenga.</p>
        </div>

        <div className="overflow-hidden" style={{maxHeight: "30vh"}}>
          <div className="container px-5">
            <img src={Contactenos} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"/>
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="container-fluid">
        <form>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Correo electronico</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nombre@ejemplo.com"/>
          </div>
          
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Comentario</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>

          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">¡Contactar!</button>
          </div>          
        </form>        
      </div>


    </div>
  )

}

export default ContactenosDetail