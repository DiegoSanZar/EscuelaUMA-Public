import React, {useState} from 'react'
import {Link} from "react-router-dom" 
import Clases1 from "../resources/img/Clases1.jpg"
import Clases2 from "../resources/img/Clases2.jpg"
import Clases3 from "../resources/img/Clases3.jpg"
import Clases4 from "../resources/img/Clases4.jpg"
import Clases5 from "../resources/img/Clases5.jpg"
import Clases6 from "../resources/img/Clases6.jpg"

function ClasesDetail () {

  return (

    <div className="album py-5 bg-light">
      <div className="container">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img src={Clases1} className="card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

              <div className="card-body">
                <p className="card-text"> <h6 className="fw-bold">Guitarra electrica</h6> Está pensado para personas que están empezando a tocar o que nunca han tocado. No necesitas ninguna experiencia ni conocimiento musical previo. En este curso aprenderás paso a paso y de forma progresiva todo lo que necesitas saber para tocar la guitarra eléctrica.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <img src={Clases2} className="card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

              <div className="card-body">
                <p className="card-text"><h6 className="fw-bold">Violín</h6> Este completo curso de violín te lleva desde unas sólidas bases hasta poder tocar melodías con el mejor sonido y la mejor técnica. Aprende la lectura de partituras, la afinación y la postura correcta para que cuides tu cuerpo y disfrutes del aprendizaje de este hermoso instrumento.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <img src={Clases6} className="card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>


              <div className="card-body">
                <p className="card-text"><h6 className="fw-bold">Trompeta</h6> El curso de trompeta, le permitirá conocer todo acerca del manejo de este instrumento de viento, el cual requiere la implementacion de recursos técnicos y ejercicios, que facilitarán el desarrollo de las notas. </p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <img src={Clases4} className="card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

              <div className="card-body">
                <p className="card-text"><h6 className="fw-bold">Guitarra acústica</h6> Curso para que puedas aprender a tocar la guitarra acústica. Este curso está pensado sin que sea necesario que tengan conocimientos previos de guitarra o de música.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow-sm">
              <img src={Clases5} className="card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>


              <div className="card-body">
                <p className="card-text"><h6 className="fw-bold">Flauta</h6> Este curso está dedicado a todas las personas sin excepciones, que deseen aprender a tocar de una manera rápida y excelente este instrumento musical como lo es la flauta dulce.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card shadow-sm">
              <img src={Clases3} className="card-img-top" width="100%" height="225" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>

              <div className="card-body">
                <p className="card-text"><h6 className="fw-bold">Piano</h6>  Este curso de piano, te enseñara todas aquellas técnicas y habilidades que debes adquirir para poder tocar este instrumento musical. Este curso de piano está dirigido para quienes que quieran aprender a tocar este divertido instrumento.</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default ClasesDetail