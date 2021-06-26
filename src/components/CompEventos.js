import React, {useState} from 'react'
import {Link} from "react-router-dom" 
import Eventos1 from "../resources/img/Eventos1.jpg"
import Eventos2 from "../resources/img/Eventos2.jpg"

function EventosDetail () {

  return (
    
    <main className="container">
      <div className="p-4 p-md-5 mb-4 text-white rounded bg-primary">
        <div className="col-md-6 px-0">
          <h1 className="display-4 fst-italic">FIESTA DE LA MÚSICA 2021</h1>
          <p className="lead my-3">Desde el 14 al 20 de junio vuelve este evento cultural global con una amplia agenda académica y musical. Este año, unims esfuerzos para ofrecer talleres, mesas redondas y conciertos virtuales.</p>
          <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continuar leyendo...</a></p>
        </div>
      </div>

      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">Eventos</strong>
              <h3 className="mb-0">Niños tocan para Niños</h3>
              <div className="mb-1 text-muted">Jun 12</div>
              <p className="card-text mb-auto">Este concierto se llevará a cabo, donde se mostraran las habilidades de los jóvenes en el piano y la guitarra.</p>
              <a href="#" className="stretched-link">Continuar leyendo</a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img className="bd-placeholder-img" width="300" height="250" src={Eventos2} alt="" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">  
              <strong className="d-inline-block mb-2 text-success">Design</strong>
              <h3 className="mb-0">Música contra el abuso</h3>
              <div className="mb-1 text-muted">Jun 11</div>
              <p className="mb-auto">La iniciativa, que reúne a músicos de todo el mundo a fin de sensibilizar sobre el trabajo infantil.</p>
              <a href="#" className="stretched-link">Continuar leyendo</a>
            </div>
            <div className="col-auto d-none d-lg-block">
              <img className="bd-placeholder-img" width="300" height="250" src={Eventos1} alt="" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false" />
            </div>
          </div>
        </div>
      </div>
    </main>

  )

}

export default EventosDetail
