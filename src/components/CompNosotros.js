import React, {useState} from 'react'
import {Link} from "react-router-dom" 
import Nosotros1 from "../resources/img/Nosotros1.jpg"
import Nosotros2 from "../resources/img/Nosotros2.jpg"
import Nosotros3 from "../resources/img/Nosotros3.jpg"

function NosotrosDetail () {

  return (
    
    <div className="container">

      <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Visión</h2>
          <p className="lead">La Escuela de Música busca consolidarse como centro de formación, estudio y difusión musical de excelencia, innovador e internacionalizado; reconocido por la calidad de sus egresados y como agente activo del desarrollo cultural de su comunidad; con una gestión y clima organizacional eficientes; social, cultural y ambientalmente comprometida.</p>
        </div>
        <div className="col-md-5">
          <img style={{borderRadius: "10px"}} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={Nosotros1} alt="" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/>
        </div>
      </div>

      <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading">Misión</h2>
          <p className="lead">La Escuela de Música es una institución educativa que forma profesionales íntegros(as) en el campo de la música, desarrollando en cada uno de ellos todo su potencial para el logro de competencias cognitivas, procedimentales y personales, mediante la aplicación de un modelo educativo innovador y el desempeño comprometido de sus funcionarios; en un ambiente que promueve valores éticos, estéticos, ambientales, sociales y culturales; permitiendo que sus egresados sean personas reflexivas y autónomas, capaces de emprender proyectos que beneficien a su comunidad y comprometidas con la construcción de una sociedad más humana, justa y fraterna.</p>
        </div>
        <div className="col-md-5 order-md-1">
          <img style={{borderRadius: "10px"}} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={Nosotros2} alt="" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/>
        </div>
      </div>

      <hr className="featurette-divider"/>

      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading">Valores</h2>
          <p className="lead">Por otra parte, nos gustaría destacar nuestra absoluta confianza en las capacidades de cada individuo. No importa tu edad, género, conocimientos previos o gustos musicales. Nosotros creemos en tus posibilidades. Sabemos que el aprendizaje es un proceso que se comparte a partes iguales entre profesor y alumno. Por eso, como hemos comentado en el primer punto, nos gusta dar lo mejor de nosotros y, en cuanto al alumno, pretendemos crear unas condiciones de motivación y confianza que provoquen una mayor implicación, un gran disfrute y un aprovechamiento óptimo de los recursos que ofrecemos. Nos gusta conocer las aspiraciones y objetivos de los participantes en los cursos, para así poder adaptar todos los aspectos de la formación a cada caso particular.</p>
        </div>
        <div className="col-md-5">
          <img style={{borderRadius: "10px"}} className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={Nosotros3} alt="" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"/>
        </div>
      </div>

      <br />

    </div>
  )

}

export default NosotrosDetail
